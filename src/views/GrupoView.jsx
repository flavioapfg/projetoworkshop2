import { useMemo, useState } from 'react'
import { GROUPS } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

export default function GrupoView({ param, onBack }) {
  const { go, showToast } = useNav()
  const group = useMemo(() => {
    if (param?.id) return GROUPS.find((g) => g.id === param.id) || param
    return param || GROUPS[0]
  }, [param])
  const [joined, setJoined] = useState(Boolean(group.joined))

  function toggleJoin() {
    setJoined((j) => {
      const next = !j
      showToast(next ? `Você entrou em ${group.name}` : `Você saiu de ${group.name}`)
      return next
    })
  }

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title="Grupo" onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-2">
        <div className="h-40 rounded-[20px] overflow-hidden bg-white">
          <img src={group.coverUrl} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-[#12161C]">{group.name}</h1>
        <p className="text-sm text-[#12161C]/55 mt-1">
          {group.members} membros · {group.privacy === 'PUBLIC' ? 'Público' : group.privacy}
        </p>
        <p className="mt-3 text-sm text-[#12161C]/80">{group.description}</p>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <button
            type="button"
            onClick={toggleJoin}
            className={`py-2.5 rounded-[20px] text-sm font-semibold ${
              joined ? 'bg-white text-[#12161C]' : 'bg-[#E7FE8E] text-[#12161C]'
            }`}
          >
            {joined ? 'Participando' : 'Participar'}
          </button>
          <button
            type="button"
            onClick={() => go('members', group)}
            className="py-2.5 rounded-[20px] bg-white text-sm font-medium text-[#12161C]"
          >
            Ver membros
          </button>
        </div>
      </main>
    </div>
  )
}
