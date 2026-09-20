import { useMemo, useState } from 'react'
import { GROUPS } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

export default function MeusGruposView({ onBack }) {
  const { go } = useNav()
  const [query, setQuery] = useState('')
  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return GROUPS.filter((g) => !q || g.name.toLowerCase().includes(q) || g.description.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title="Meus grupos" onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar grupos..."
          className="w-full px-4 py-3 bg-white rounded-[20px] text-sm text-[#12161C] focus:outline-none focus:ring-2 focus:ring-[#E7FE8E]"
        />
        <div className="space-y-2">
          {list.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => go('group', group)}
              className="w-full flex items-center gap-3 p-4 bg-white rounded-[20px] text-left"
            >
              <img src={group.coverUrl} alt="" className="w-12 h-12 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#12161C] truncate">{group.name}</p>
                <p className="text-xs text-[#12161C]/55 truncate">{group.members} membros</p>
              </div>
              {group.joined && (
                <span className="text-[10px] font-semibold uppercase text-[#12161C]/50">Ativo</span>
              )}
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
