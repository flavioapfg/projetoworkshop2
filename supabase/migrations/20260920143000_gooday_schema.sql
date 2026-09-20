-- Gooday schema: Auth uses auth.users. Profiles live in public.users (id = auth.uid()).

CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC;
GRANT USAGE ON SCHEMA private TO postgres, service_role;

CREATE EXTENSION IF NOT EXISTS "pg_trgm" WITH SCHEMA extensions;

-- Enums
CREATE TYPE public.privacy AS ENUM ('PUBLIC', 'PRIVATE');
CREATE TYPE public.group_member_role AS ENUM ('OWNER', 'ADMIN', 'MEMBER');
CREATE TYPE public.group_member_status AS ENUM ('ACTIVE', 'PENDING', 'BANNED');
CREATE TYPE public.notification_type AS ENUM (
  'FOLLOW', 'LIKE', 'COMMENT', 'MENTION', 'GROUP_INVITE',
  'GROUP_REQUEST', 'GROUP_ACCEPTED', 'MESSAGE', 'STORY_REPLY', 'POST_SHARE'
);
CREATE TYPE public.media_type AS ENUM ('IMAGE', 'VIDEO');
CREATE TYPE public.post_audience AS ENUM ('PUBLIC', 'FOLLOWERS', 'GROUP');
CREATE TYPE public.story_status AS ENUM ('ACTIVE', 'EXPIRED', 'DELETED');

-- Profiles
CREATE TABLE public.users (
  id uuid PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  name text NOT NULL,
  handle text NOT NULL UNIQUE,
  avatar_url text,
  cover_url text,
  bio text,
  location text,
  website text,
  is_verified boolean NOT NULL DEFAULT false,
  is_private boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT users_handle_format CHECK (handle ~ '^[a-z0-9._]{2,30}$')
);

CREATE TABLE public.follows (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  follower_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  following_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT follows_no_self CHECK (follower_id <> following_id),
  CONSTRAINT follows_unique UNIQUE (follower_id, following_id)
);

CREATE TABLE public.interests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE
);

CREATE TABLE public.user_interests (
  user_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  interest_id uuid NOT NULL REFERENCES public.interests (id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, interest_id)
);

CREATE TABLE public.media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  uploader_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  url text NOT NULL,
  type public.media_type NOT NULL DEFAULT 'IMAGE',
  mime_type text,
  width integer,
  height integer,
  duration integer,
  size_bytes integer,
  alt_text text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  body text NOT NULL DEFAULT '',
  audience public.post_audience NOT NULL DEFAULT 'PUBLIC',
  location_name text,
  latitude double precision,
  longitude double precision,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz
);

CREATE TABLE public.post_media (
  post_id uuid NOT NULL REFERENCES public.posts (id) ON DELETE CASCADE,
  media_id uuid NOT NULL REFERENCES public.media (id) ON DELETE CASCADE,
  sort_order integer NOT NULL DEFAULT 0,
  PRIMARY KEY (post_id, media_id)
);

CREATE TABLE public.post_tags (
  post_id uuid NOT NULL REFERENCES public.posts (id) ON DELETE CASCADE,
  tag text NOT NULL,
  PRIMARY KEY (post_id, tag)
);

CREATE TABLE public.post_mentions (
  post_id uuid NOT NULL REFERENCES public.posts (id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, user_id)
);

CREATE TABLE public.stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  media_id uuid REFERENCES public.media (id) ON DELETE SET NULL,
  status public.story_status NOT NULL DEFAULT 'ACTIVE',
  expires_at timestamptz NOT NULL DEFAULT (now() + interval '24 hours'),
  created_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz
);

CREATE TABLE public.story_views (
  story_id uuid NOT NULL REFERENCES public.stories (id) ON DELETE CASCADE,
  viewer_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  viewed_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (story_id, viewer_id)
);

CREATE TABLE public.story_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  story_id uuid NOT NULL REFERENCES public.stories (id) ON DELETE CASCADE,
  sender_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  body text NOT NULL,
  sent_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES public.posts (id) ON DELETE CASCADE,
  author_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  parent_id uuid REFERENCES public.comments (id) ON DELETE CASCADE,
  body text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz
);

CREATE TABLE public.likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  post_id uuid REFERENCES public.posts (id) ON DELETE CASCADE,
  comment_id uuid REFERENCES public.comments (id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT likes_target CHECK (
    (post_id IS NOT NULL AND comment_id IS NULL)
    OR (post_id IS NULL AND comment_id IS NOT NULL)
  )
);

CREATE UNIQUE INDEX likes_user_post_idx ON public.likes (user_id, post_id) WHERE post_id IS NOT NULL;
CREATE UNIQUE INDEX likes_user_comment_idx ON public.likes (user_id, comment_id) WHERE comment_id IS NOT NULL;

CREATE TABLE public.reactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  post_id uuid NOT NULL REFERENCES public.posts (id) ON DELETE CASCADE,
  emoji text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT reactions_unique UNIQUE (user_id, post_id, emoji)
);

CREATE TABLE public.bookmarks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  post_id uuid NOT NULL REFERENCES public.posts (id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT bookmarks_unique UNIQUE (user_id, post_id)
);

CREATE TABLE public.groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  cover_url text,
  avatar_url text,
  privacy public.privacy NOT NULL DEFAULT 'PUBLIC',
  parent_id uuid REFERENCES public.groups (id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz
);

CREATE TABLE public.group_interests (
  group_id uuid NOT NULL REFERENCES public.groups (id) ON DELETE CASCADE,
  interest_id uuid NOT NULL REFERENCES public.interests (id) ON DELETE CASCADE,
  PRIMARY KEY (group_id, interest_id)
);

CREATE TABLE public.group_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid NOT NULL REFERENCES public.groups (id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  role public.group_member_role NOT NULL DEFAULT 'MEMBER',
  status public.group_member_status NOT NULL DEFAULT 'ACTIVE',
  joined_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT group_members_unique UNIQUE (group_id, user_id)
);

CREATE TABLE public.group_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid NOT NULL REFERENCES public.groups (id) ON DELETE CASCADE,
  post_id uuid NOT NULL UNIQUE REFERENCES public.posts (id) ON DELETE CASCADE,
  author_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE
);

CREATE TABLE public.conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  is_group boolean NOT NULL DEFAULT false,
  title text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.conversation_participants (
  conversation_id uuid NOT NULL REFERENCES public.conversations (id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  joined_at timestamptz NOT NULL DEFAULT now(),
  last_read_at timestamptz,
  left_at timestamptz,
  PRIMARY KEY (conversation_id, user_id)
);

CREATE TABLE public.messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES public.conversations (id) ON DELETE CASCADE,
  sender_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  body text NOT NULL DEFAULT '',
  media_url text,
  sent_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz
);

CREATE TABLE public.notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  recipient_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  actor_id uuid REFERENCES public.users (id) ON DELETE SET NULL,
  type public.notification_type NOT NULL,
  post_id uuid REFERENCES public.posts (id) ON DELETE CASCADE,
  comment_id uuid REFERENCES public.comments (id) ON DELETE CASCADE,
  group_id uuid REFERENCES public.groups (id) ON DELETE CASCADE,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.user_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES public.users (id) ON DELETE CASCADE,
  language text NOT NULL DEFAULT 'pt-BR',
  theme text NOT NULL DEFAULT 'light',
  reduce_motion boolean NOT NULL DEFAULT false,
  text_size_offset integer NOT NULL DEFAULT 0
);

CREATE TABLE public.notification_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES public.users (id) ON DELETE CASCADE,
  push_enabled boolean NOT NULL DEFAULT true,
  email_weekly_summary boolean NOT NULL DEFAULT false,
  notify_follows boolean NOT NULL DEFAULT true,
  notify_likes boolean NOT NULL DEFAULT true,
  notify_comments boolean NOT NULL DEFAULT true,
  notify_mentions boolean NOT NULL DEFAULT true,
  notify_group_activity boolean NOT NULL DEFAULT true,
  notify_messages boolean NOT NULL DEFAULT true
);

CREATE TABLE public.search_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  query text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX users_handle_trgm_idx ON public.users USING gin (handle extensions.gin_trgm_ops);
CREATE INDEX users_name_trgm_idx ON public.users USING gin (name extensions.gin_trgm_ops);
CREATE INDEX follows_following_id_idx ON public.follows (following_id);
CREATE INDEX follows_follower_id_idx ON public.follows (follower_id);
CREATE INDEX posts_author_created_idx ON public.posts (author_id, created_at DESC) WHERE deleted_at IS NULL;
CREATE INDEX posts_created_idx ON public.posts (created_at DESC) WHERE deleted_at IS NULL;
CREATE INDEX comments_post_id_idx ON public.comments (post_id, created_at);
CREATE INDEX likes_post_id_idx ON public.likes (post_id);
CREATE INDEX bookmarks_user_id_idx ON public.bookmarks (user_id, created_at DESC);
CREATE INDEX stories_author_idx ON public.stories (author_id, created_at DESC);
CREATE INDEX stories_active_idx ON public.stories (expires_at) WHERE status = 'ACTIVE' AND deleted_at IS NULL;
CREATE INDEX groups_name_trgm_idx ON public.groups USING gin (name extensions.gin_trgm_ops);
CREATE INDEX group_members_user_id_idx ON public.group_members (user_id);
CREATE INDEX messages_conversation_sent_idx ON public.messages (conversation_id, sent_at DESC);
CREATE INDEX notifications_recipient_idx ON public.notifications (recipient_id, created_at DESC);
CREATE INDEX search_history_user_idx ON public.search_history (user_id, created_at DESC);
CREATE INDEX media_uploader_id_idx ON public.media (uploader_id);

-- updated_at
CREATE OR REPLACE FUNCTION private.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER users_set_updated_at BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();
CREATE TRIGGER posts_set_updated_at BEFORE UPDATE ON public.posts
  FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();
CREATE TRIGGER groups_set_updated_at BEFORE UPDATE ON public.groups
  FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();
CREATE TRIGGER conversations_set_updated_at BEFORE UPDATE ON public.conversations
  FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

-- New auth user -> profile
CREATE OR REPLACE FUNCTION private.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_handle text;
  v_name text;
BEGIN
  v_name := COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1));
  v_handle := lower(COALESCE(NEW.raw_user_meta_data->>'handle', regexp_replace(split_part(NEW.email, '@', 1), '[^a-z0-9._]', '', 'g')));
  IF v_handle IS NULL OR length(v_handle) < 2 THEN
    v_handle := 'user_' || substr(replace(NEW.id::text, '-', ''), 1, 8);
  END IF;

  INSERT INTO public.users (id, name, handle, avatar_url)
  VALUES (NEW.id, v_name, v_handle, NEW.raw_user_meta_data->>'avatar_url')
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_settings (user_id) VALUES (NEW.id) ON CONFLICT (user_id) DO NOTHING;
  INSERT INTO public.notification_preferences (user_id) VALUES (NEW.id) ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION private.handle_new_user();
