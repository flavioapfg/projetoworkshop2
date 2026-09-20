import { useMemo, useState } from 'react'
import { POSTS } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

export default function PublicacaoView({ param, onBack }) {
  const { go, openSheet } = useNav()
  const post = useMemo(() => {
    if (param?.id) return POSTS.find((p) => p.id === param.id) || param
    return param || POSTS[0]
  }, [param])
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  function toggleLike() {
    setLiked((l) => {
      setLikes((n) => (l ? n - 1 : n + 1))
      return !l
    })
  }

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title="Publicação" onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-2 space-y-4">
        <article className="bg-white rounded-[20px] overflow-hidden">
          <button type="button" onClick={() => go('user', post.author)} className="flex items-center gap-3 p-4 w-full text-left">
            <img src={post.author.avatarUrl} alt="" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-semibold text-[#12161C]">{post.author.name}</p>
              <p className="text-xs text-[#12161C]/55">
                {post.createdAt} · {post.group}
              </p>
            </div>
          </button>
          <img src={post.imageUrl} alt="" className="w-full aspect-square object-cover" />
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-4">
              <button type="button" onClick={toggleLike} className="text-sm font-semibold text-[#12161C]">
                {liked ? '❤️' : '🤍'} {likes}
              </button>
              <span className="text-sm text-[#12161C]/55">{post.comments} comentários</span>
            </div>
            <p className="text-sm text-[#12161C]">{post.body}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((t) => (
                <span key={t} className="text-xs text-[#12161C]/60">
                  {t}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => openSheet('comments', post)}
              className="w-full py-2.5 rounded-[20px] bg-[#ECEDF5] text-sm font-medium text-[#12161C]"
            >
              Escrever comentário
            </button>
          </div>
        </article>
      </main>
    </div>
  )
}
