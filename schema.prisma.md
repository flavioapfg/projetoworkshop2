# Gooday — schema.prisma (revisão vs Supabase)

Documento de verificação. O banco **já está no Supabase** (`mqgzhjclpgvezllmpoju`) via SQL em `supabase/migrations/20260920143000_gooday_schema.sql`. Este arquivo espelha o que foi implantado, em formato Prisma, para revisão — **não** há Prisma Client rodando no app ainda.

Fonte de referência original: `../gooday_prisma_schema_schema.prisma.md`

---

## Status da revisão

| Área | Original (Prisma doc) | Implantado (Supabase) | Status |
|------|----------------------|----------------------|--------|
| Auth / senha | `passwordHash` em `User` | `auth.users` + perfil em `public.users` | Correto (melhor para Supabase) |
| Email | `email` em `User` | Email só em `auth.users` | Correto |
| Username | `username` | `handle` (+ check `^[a-z0-9._]{2,30}$`) | OK (renomeado) |
| Preferências | `UserPreferences` único | `user_settings` + `notification_preferences` | OK (mais fiel à UI) |
| Follows | PK composta | UUID + unique `(follower, following)` | OK |
| Posts | `imageUrl` único | `media` + `post_media` (múltiplas mídias) | OK (melhor) |
| Tags | `Tag` + `PostTag` | `post_tags.tag` (texto) | OK (mais simples) |
| Likes | só post | post **ou** comment | OK |
| Bookmarks | `SavedPost` | `bookmarks` | OK |
| Stories | `mediaUrl` + reactions | `media_id` + views + **replies** | OK; reactions de story não existem (há `reactions` em posts) |
| Comunidades | `Community` | `groups` (+ `parent_id`, interesses) | OK |
| Member role | MEMBER/MODERATOR/ADMIN | OWNER/ADMIN/MEMBER + status ACTIVE/PENDING/BANNED | OK |
| Mensagens | `DirectMessage` + `receiverId` + status | `messages` por conversa (sem status SENT/READ) | OK; leitura via `last_read_at` |
| Notificações | `entityId` genérico | FKs tipadas (`post_id`, `comment_id`, `group_id`) | OK |
| Interesses | ausente | `interests`, `user_interests`, `group_interests` | Extra (necessário à UI Buscar) |
| Search history | ausente | `search_history` | Extra (tela Buscar) |
| Mentions | ausente | `post_mentions` | Extra |
| RLS / Storage | ausente no Prisma | RLS + buckets avatars/covers/posts/stories | Extra (produção) |

### Gaps conscientes (não bloqueiam o app atual)

1. Sem enum `MessageStatus` (SENT/DELIVERED/READ) — leitura inferida por `conversation_participants.last_read_at`.
2. Sem `StoryReaction` — replies cobrem o fluxo de resposta a story.
3. Sem `UserRole` (USER/MODERATOR/ADMIN) global — papéis ficam em `group_members.role`.
4. Post `PRIVATE` do doc original → no banco: `post_audience` = PUBLIC | FOLLOWERS | GROUP.

---

## 1. `schema.prisma` (espelho do banco atual)

```prisma
// ========================================================
// Gooday — Prisma schema espelhando Supabase (Postgres)
// Auth real: auth.users (Supabase Auth)
// Perfis: public.users (id = auth.users.id)
// ========================================================

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  // schemas = ["public", "auth"] // se usar multiSchema no Prisma
  // directUrl = env("DIRECT_URL")
}

generator client {
  provider = "prisma-client-js"
}

// --------------------------------------------------------
// ENUMS (public.*)
// --------------------------------------------------------

enum Privacy {
  PUBLIC
  PRIVATE
}

enum GroupMemberRole {
  OWNER
  ADMIN
  MEMBER
}

enum GroupMemberStatus {
  ACTIVE
  PENDING
  BANNED
}

enum NotificationType {
  FOLLOW
  LIKE
  COMMENT
  MENTION
  GROUP_INVITE
  GROUP_REQUEST
  GROUP_ACCEPTED
  MESSAGE
  STORY_REPLY
  POST_SHARE
}

enum MediaType {
  IMAGE
  VIDEO
}

enum PostAudience {
  PUBLIC
  FOLLOWERS
  GROUP
}

enum StoryStatus {
  ACTIVE
  EXPIRED
  DELETED
}

// --------------------------------------------------------
// AUTH (somente referência — gerenciado pelo Supabase)
// --------------------------------------------------------
// model AuthUser {
//   id    String @id @db.Uuid
//   email String?
//   @@map("users")
//   @@schema("auth")
// }

// --------------------------------------------------------
// PERFIL
// --------------------------------------------------------

model User {
  id         String   @id @db.Uuid // = auth.users.id
  name       String
  handle     String   @unique // @marcos_v → marcos_v
  avatarUrl  String?  @map("avatar_url")
  coverUrl   String?  @map("cover_url")
  bio        String?
  location   String?
  website    String?
  isVerified Boolean  @default(false) @map("is_verified")
  isPrivate  Boolean  @default(false) @map("is_private")
  createdAt  DateTime @default(now()) @map("created_at") @db.Timestamptz(6)
  updatedAt  DateTime @default(now()) @updatedAt @map("updated_at") @db.Timestamptz(6)

  following               Follow[]                   @relation("UserFollowing")
  followers               Follow[]                   @relation("UserFollowers")
  interests               UserInterest[]
  media                   Media[]
  posts                   Post[]
  postMentions            PostMention[]
  stories                 Story[]
  storyViews              StoryView[]
  storyReplies            StoryReply[]
  comments                Comment[]
  likes                   Like[]
  reactions               Reaction[]
  bookmarks               Bookmark[]
  groupMemberships        GroupMember[]
  groupPostsAuthored      GroupPost[]
  conversationParticipants ConversationParticipant[]
  messagesSent            Message[]
  notificationsReceived   Notification[]             @relation("NotificationRecipient")
  notificationsAsActor    Notification[]             @relation("NotificationActor")
  settings                UserSettings?
  notificationPreferences NotificationPreferences?
  searchHistory           SearchHistory[]

  @@index([handle])
  @@map("users")
}

model UserSettings {
  id             String  @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId         String  @unique @map("user_id") @db.Uuid
  language       String  @default("pt-BR")
  theme          String  @default("light")
  reduceMotion   Boolean @default(false) @map("reduce_motion")
  textSizeOffset Int     @default(0) @map("text_size_offset")

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("user_settings")
}

model NotificationPreferences {
  id                   String  @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId               String  @unique @map("user_id") @db.Uuid
  pushEnabled          Boolean @default(true) @map("push_enabled")
  emailWeeklySummary   Boolean @default(false) @map("email_weekly_summary")
  notifyFollows        Boolean @default(true) @map("notify_follows")
  notifyLikes          Boolean @default(true) @map("notify_likes")
  notifyComments       Boolean @default(true) @map("notify_comments")
  notifyMentions       Boolean @default(true) @map("notify_mentions")
  notifyGroupActivity  Boolean @default(true) @map("notify_group_activity")
  notifyMessages       Boolean @default(true) @map("notify_messages")

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("notification_preferences")
}

// --------------------------------------------------------
// SOCIAL
// --------------------------------------------------------

model Follow {
  id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  followerId  String   @map("follower_id") @db.Uuid
  followingId String   @map("following_id") @db.Uuid
  createdAt   DateTime @default(now()) @map("created_at") @db.Timestamptz(6)

  follower  User @relation("UserFollowing", fields: [followerId], references: [id], onDelete: Cascade)
  following User @relation("UserFollowers", fields: [followingId], references: [id], onDelete: Cascade)

  @@unique([followerId, followingId])
  @@index([followerId])
  @@index([followingId])
  @@map("follows")
}

model Interest {
  id   String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name String @unique
  slug String @unique

  users  UserInterest[]
  groups GroupInterest[]

  @@map("interests")
}

model UserInterest {
  userId     String @map("user_id") @db.Uuid
  interestId String @map("interest_id") @db.Uuid

  user     User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  interest Interest @relation(fields: [interestId], references: [id], onDelete: Cascade)

  @@id([userId, interestId])
  @@map("user_interests")
}

// --------------------------------------------------------
// MEDIA / POSTS / FEED
// --------------------------------------------------------

model Media {
  id         String    @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  uploaderId String    @map("uploader_id") @db.Uuid
  url        String
  type       MediaType @default(IMAGE)
  mimeType   String?   @map("mime_type")
  width      Int?
  height     Int?
  duration   Int?
  sizeBytes  Int?      @map("size_bytes")
  altText    String?   @map("alt_text")
  createdAt  DateTime  @default(now()) @map("created_at") @db.Timestamptz(6)

  uploader  User        @relation(fields: [uploaderId], references: [id], onDelete: Cascade)
  postMedia PostMedia[]
  stories   Story[]

  @@index([uploaderId])
  @@map("media")
}

model Post {
  id           String       @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  authorId     String       @map("author_id") @db.Uuid
  body         String       @default("")
  audience     PostAudience @default(PUBLIC)
  locationName String?      @map("location_name")
  latitude     Float?
  longitude    Float?
  createdAt    DateTime     @default(now()) @map("created_at") @db.Timestamptz(6)
  updatedAt    DateTime     @default(now()) @updatedAt @map("updated_at") @db.Timestamptz(6)
  deletedAt    DateTime?    @map("deleted_at") @db.Timestamptz(6)

  author       User           @relation(fields: [authorId], references: [id], onDelete: Cascade)
  media        PostMedia[]
  tags         PostTag[]
  mentions     PostMention[]
  comments     Comment[]
  likes        Like[]
  reactions    Reaction[]
  bookmarks    Bookmark[]
  groupPost    GroupPost?
  notifications Notification[]

  @@index([authorId, createdAt(sort: Desc)])
  @@map("posts")
}

model PostMedia {
  postId    String @map("post_id") @db.Uuid
  mediaId   String @map("media_id") @db.Uuid
  sortOrder Int    @default(0) @map("sort_order")

  post  Post  @relation(fields: [postId], references: [id], onDelete: Cascade)
  media Media @relation(fields: [mediaId], references: [id], onDelete: Cascade)

  @@id([postId, mediaId])
  @@map("post_media")
}

model PostTag {
  postId String @map("post_id") @db.Uuid
  tag    String

  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)

  @@id([postId, tag])
  @@map("post_tags")
}

model PostMention {
  postId String @map("post_id") @db.Uuid
  userId String @map("user_id") @db.Uuid

  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@id([postId, userId])
  @@map("post_mentions")
}

model Comment {
  id        String    @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  postId    String    @map("post_id") @db.Uuid
  authorId  String    @map("author_id") @db.Uuid
  parentId  String?   @map("parent_id") @db.Uuid
  body      String
  createdAt DateTime  @default(now()) @map("created_at") @db.Timestamptz(6)
  deletedAt DateTime? @map("deleted_at") @db.Timestamptz(6)

  post          Post           @relation(fields: [postId], references: [id], onDelete: Cascade)
  author        User           @relation(fields: [authorId], references: [id], onDelete: Cascade)
  parent        Comment?       @relation("CommentThread", fields: [parentId], references: [id], onDelete: Cascade)
  replies       Comment[]      @relation("CommentThread")
  likes         Like[]
  notifications Notification[]

  @@index([postId, createdAt])
  @@map("comments")
}

model Like {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId    String   @map("user_id") @db.Uuid
  postId    String?  @map("post_id") @db.Uuid
  commentId String?  @map("comment_id") @db.Uuid
  createdAt DateTime @default(now()) @map("created_at") @db.Timestamptz(6)

  user    User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  post    Post?    @relation(fields: [postId], references: [id], onDelete: Cascade)
  comment Comment? @relation(fields: [commentId], references: [id], onDelete: Cascade)

  // DB: XOR check — exatamente um de postId/commentId; unique parcial por alvo
  @@index([postId])
  @@map("likes")
}

model Reaction {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId    String   @map("user_id") @db.Uuid
  postId    String   @map("post_id") @db.Uuid
  emoji     String
  createdAt DateTime @default(now()) @map("created_at") @db.Timestamptz(6)

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)

  @@unique([userId, postId, emoji])
  @@map("reactions")
}

model Bookmark {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId    String   @map("user_id") @db.Uuid
  postId    String   @map("post_id") @db.Uuid
  createdAt DateTime @default(now()) @map("created_at") @db.Timestamptz(6)

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  post Post @relation(fields: [postId], references: [id], onDelete: Cascade)

  @@unique([userId, postId])
  @@index([userId, createdAt(sort: Desc)])
  @@map("bookmarks")
}

// --------------------------------------------------------
// STORIES
// --------------------------------------------------------

model Story {
  id        String      @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  authorId  String      @map("author_id") @db.Uuid
  mediaId   String?     @map("media_id") @db.Uuid
  status    StoryStatus @default(ACTIVE)
  expiresAt DateTime    @map("expires_at") @db.Timestamptz(6)
  createdAt DateTime    @default(now()) @map("created_at") @db.Timestamptz(6)
  deletedAt DateTime?   @map("deleted_at") @db.Timestamptz(6)

  author  User          @relation(fields: [authorId], references: [id], onDelete: Cascade)
  media   Media?        @relation(fields: [mediaId], references: [id], onDelete: SetNull)
  views   StoryView[]
  replies StoryReply[]

  @@index([authorId, createdAt(sort: Desc)])
  @@map("stories")
}

model StoryView {
  storyId  String   @map("story_id") @db.Uuid
  viewerId String   @map("viewer_id") @db.Uuid
  viewedAt DateTime @default(now()) @map("viewed_at") @db.Timestamptz(6)

  story  Story @relation(fields: [storyId], references: [id], onDelete: Cascade)
  viewer User  @relation(fields: [viewerId], references: [id], onDelete: Cascade)

  @@id([storyId, viewerId])
  @@map("story_views")
}

model StoryReply {
  id       String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  storyId  String   @map("story_id") @db.Uuid
  senderId String   @map("sender_id") @db.Uuid
  body     String
  sentAt   DateTime @default(now()) @map("sent_at") @db.Timestamptz(6)

  story  Story @relation(fields: [storyId], references: [id], onDelete: Cascade)
  sender User  @relation(fields: [senderId], references: [id], onDelete: Cascade)

  @@map("story_replies")
}

// --------------------------------------------------------
// GROUPS (comunidades)
// --------------------------------------------------------

model Group {
  id          String    @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name        String
  slug        String    @unique
  description String?
  coverUrl    String?   @map("cover_url")
  avatarUrl   String?   @map("avatar_url")
  privacy     Privacy   @default(PUBLIC)
  parentId    String?   @map("parent_id") @db.Uuid
  createdAt   DateTime  @default(now()) @map("created_at") @db.Timestamptz(6)
  updatedAt   DateTime  @default(now()) @updatedAt @map("updated_at") @db.Timestamptz(6)
  deletedAt   DateTime? @map("deleted_at") @db.Timestamptz(6)

  parent        Group?          @relation("GroupTree", fields: [parentId], references: [id], onDelete: SetNull)
  children      Group[]         @relation("GroupTree")
  interests     GroupInterest[]
  members       GroupMember[]
  posts         GroupPost[]
  notifications Notification[]

  @@map("groups")
}

model GroupInterest {
  groupId    String @map("group_id") @db.Uuid
  interestId String @map("interest_id") @db.Uuid

  group    Group    @relation(fields: [groupId], references: [id], onDelete: Cascade)
  interest Interest @relation(fields: [interestId], references: [id], onDelete: Cascade)

  @@id([groupId, interestId])
  @@map("group_interests")
}

model GroupMember {
  id       String            @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  groupId  String            @map("group_id") @db.Uuid
  userId   String            @map("user_id") @db.Uuid
  role     GroupMemberRole   @default(MEMBER)
  status   GroupMemberStatus @default(ACTIVE)
  joinedAt DateTime          @default(now()) @map("joined_at") @db.Timestamptz(6)

  group Group @relation(fields: [groupId], references: [id], onDelete: Cascade)
  user  User  @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([groupId, userId])
  @@index([userId])
  @@map("group_members")
}

model GroupPost {
  id      String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  groupId String @map("group_id") @db.Uuid
  postId  String @unique @map("post_id") @db.Uuid
  authorId String @map("author_id") @db.Uuid

  group  Group @relation(fields: [groupId], references: [id], onDelete: Cascade)
  post   Post  @relation(fields: [postId], references: [id], onDelete: Cascade)
  author User  @relation(fields: [authorId], references: [id], onDelete: Cascade)

  @@map("group_posts")
}

// --------------------------------------------------------
// MESSAGES
// --------------------------------------------------------

model Conversation {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  isGroup   Boolean  @default(false) @map("is_group")
  title     String?
  createdAt DateTime @default(now()) @map("created_at") @db.Timestamptz(6)
  updatedAt DateTime @default(now()) @updatedAt @map("updated_at") @db.Timestamptz(6)

  participants ConversationParticipant[]
  messages     Message[]

  @@map("conversations")
}

model ConversationParticipant {
  conversationId String    @map("conversation_id") @db.Uuid
  userId         String    @map("user_id") @db.Uuid
  joinedAt       DateTime  @default(now()) @map("joined_at") @db.Timestamptz(6)
  lastReadAt     DateTime? @map("last_read_at") @db.Timestamptz(6)
  leftAt         DateTime? @map("left_at") @db.Timestamptz(6)

  conversation Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)
  user         User         @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@id([conversationId, userId])
  @@index([userId])
  @@map("conversation_participants")
}

model Message {
  id             String    @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  conversationId String    @map("conversation_id") @db.Uuid
  senderId       String    @map("sender_id") @db.Uuid
  body           String    @default("")
  mediaUrl       String?   @map("media_url")
  sentAt         DateTime  @default(now()) @map("sent_at") @db.Timestamptz(6)
  deletedAt      DateTime? @map("deleted_at") @db.Timestamptz(6)

  conversation Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)
  sender       User         @relation(fields: [senderId], references: [id], onDelete: Cascade)

  @@index([conversationId, sentAt(sort: Desc)])
  @@map("messages")
}

// --------------------------------------------------------
// NOTIFICATIONS / SEARCH
// --------------------------------------------------------

model Notification {
  id          String           @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  recipientId String           @map("recipient_id") @db.Uuid
  actorId     String?          @map("actor_id") @db.Uuid
  type        NotificationType
  postId      String?          @map("post_id") @db.Uuid
  commentId   String?          @map("comment_id") @db.Uuid
  groupId     String?          @map("group_id") @db.Uuid
  isRead      Boolean          @default(false) @map("is_read")
  createdAt   DateTime         @default(now()) @map("created_at") @db.Timestamptz(6)

  recipient User     @relation("NotificationRecipient", fields: [recipientId], references: [id], onDelete: Cascade)
  actor     User?    @relation("NotificationActor", fields: [actorId], references: [id], onDelete: SetNull)
  post      Post?    @relation(fields: [postId], references: [id], onDelete: Cascade)
  comment   Comment? @relation(fields: [commentId], references: [id], onDelete: Cascade)
  group     Group?   @relation(fields: [groupId], references: [id], onDelete: Cascade)

  @@index([recipientId, createdAt(sort: Desc)])
  @@map("notifications")
}

model SearchHistory {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId    String   @map("user_id") @db.Uuid
  query     String
  createdAt DateTime @default(now()) @map("created_at") @db.Timestamptz(6)

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId, createdAt(sort: Desc)])
  @@map("search_history")
}
```

---

## 2. Tabelas no Supabase (conferido)

27 tabelas em `public`:  
`bookmarks`, `comments`, `conversation_participants`, `conversations`, `follows`, `group_interests`, `group_members`, `group_posts`, `groups`, `interests`, `likes`, `media`, `messages`, `notification_preferences`, `notifications`, `post_media`, `post_mentions`, `post_tags`, `posts`, `reactions`, `search_history`, `stories`, `story_replies`, `story_views`, `user_interests`, `user_settings`, `users`

---

## 3. Mapa de nomenclatura (doc original → banco)

| Original | Banco atual |
|----------|-------------|
| `User.username` | `users.handle` |
| `User.fullName` | `users.name` |
| `User.passwordHash` / `email` | Supabase Auth (`auth.users`) |
| `UserPreferences` | `user_settings` + `notification_preferences` |
| `Community` | `groups` |
| `CommunityMember` | `group_members` |
| `PostLike` / `SavedPost` | `likes` / `bookmarks` |
| `DirectMessage` | `messages` |
| `Post.imageUrl` | `media` + `post_media` |
| `Story.mediaUrl` | `stories.media_id` → `media` |

---

## 4. Veredito

O schema implantado está **correto e alinhado** às telas Gooday e à referência Prisma, com adaptações necessárias para Supabase Auth, mídia múltipla e RLS.

Não é necessário recriar tabelas. Próximo passo opcional: gerar `prisma/schema.prisma` real só se quiser Prisma Client — o app hoje usa `@supabase/supabase-js`.

Arquivos relacionados:

- SQL fonte: `supabase/migrations/20260920143000_gooday_schema.sql`
- Dashboard: https://supabase.com/dashboard/project/mqgzhjclpgvezllmpoju
- Referência antiga: `../gooday_prisma_schema_schema.prisma.md`
