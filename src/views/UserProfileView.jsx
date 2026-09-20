import { useMemo, useState } from 'react'
import { PEOPLE } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

export default function UserProfileView({ param, onBack }) {
  const { go } = useNav()
  const user = useMemo(() => {
    if (param?.id) return PEOPLE.find((p) => p.id === param.id) || param
    return param || PEOPLE[0]
  }, [param])
  const [following, setFollowing] = useState(false)

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title={user.name} onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-4">
        <div className="flex flex-col items-center text-center">
          <img src={user.avatarUrl} alt="" className="w-24 h-24 rounded-full object-cover ring-4 ring-white" />
          <h2 className="mt-3 text-xl font-bold text-[#12161C]">{user.name}</h2>
          <p className="text-sm text-[#12161C]/55">
            @{user.handle} · {user.location}
          </p>
          {user.online && (
            <span className="mt-1 text-xs text-emerald-600 font-medium">Online agora</span>
          )}
          <p className="mt-3 text-sm text-[#12161C]/80 max-w-sm">{user.bio}</p>
        </div>

        <div className="flex justify-center gap-8 mt-5">
          {['128', '64', '12'].map((n, i) => (
            <button
              key={n}
              type="button"
              onClick={() => go('follows', { user, tab: ['followers', 'following', 'posts'][i] })}
              className="text-center"
            >
              <span className="block font-bold text-[#12161C]">{n}</span>
              <span className="text-xs text-[#12161C]/55">{['seguidores', 'seguindo', 'posts'][i]}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <button
            type="button"
            onClick={() => setFollowing((f) => !f)}
            className={`py-2.5 rounded-[20px] text-sm font-semibold ${
              following ? 'bg-white text-[#12161C]' : 'bg-[#E7FE8E] text-[#12161C]'
            }`}
          >
            {following ? 'Seguindo' : 'Seguir'}
          </button>
          <button
            type="button"
            onClick={() => go('chat', { peer: user })}
            className="py-2.5 rounded-[20px] bg-white text-sm font-medium text-[#12161C]"
          >
            Mensagem
          </button>
        </div>
      </main>
    </div>
  )
}
