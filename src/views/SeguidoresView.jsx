import { useState } from 'react'
import { PEOPLE } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

export default function SeguidoresView({ param, onBack }) {
  const { go } = useNav()
  const tab = param?.tab || 'followers'
  const title = tab === 'following' ? 'Seguindo' : tab === 'posts' ? 'Publicações' : 'Seguidores'
  const [following, setFollowing] = useState({})

  function toggle(id) {
    setFollowing((f) => ({ ...f, [id]: !f[id] }))
  }

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title={title} onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-4 space-y-2">
        {PEOPLE.map((person) => {
          const isFollowing = following[person.id]
          return (
            <div key={person.id} className="flex items-center gap-3 p-4 bg-white rounded-[20px]">
              <button type="button" onClick={() => go('user', person)} className="flex items-center gap-3 flex-1 min-w-0 text-left">
                <img src={person.avatarUrl} alt="" className="w-11 h-11 rounded-full object-cover shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#12161C] truncate">{person.name}</p>
                  <p className="text-xs text-[#12161C]/55 truncate">@{person.handle}</p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => toggle(person.id)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold ${
                  isFollowing ? 'bg-[#ECEDF5] text-[#12161C]' : 'bg-[#E7FE8E] text-[#12161C]'
                }`}
              >
                {isFollowing ? 'Seguindo' : 'Seguir'}
              </button>
            </div>
          )
        })}
      </main>
    </div>
  )
}
