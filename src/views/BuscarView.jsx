import { useMemo, useState } from 'react'
import { PEOPLE, GROUPS, RECENT_SEARCHES } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

function match(q, ...parts) {
  const s = q.trim().toLowerCase()
  if (!s) return true
  return parts.some((p) => String(p || '').toLowerCase().includes(s))
}

export default function BuscarView({ onBack }) {
  const { go } = useNav()
  const [query, setQuery] = useState('')

  const people = useMemo(
    () => PEOPLE.filter((p) => match(query, p.name, p.handle, p.bio, p.location)),
    [query],
  )
  const groups = useMemo(
    () => GROUPS.filter((g) => match(query, g.name, g.description, g.slug)),
    [query],
  )

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title="Buscar" onBack={onBack} />
      <main className="max-w-2xl mx-auto px-4 pt-6 space-y-8">
        <div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#12161C]/50 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white rounded-full text-sm text-[#12161C] placeholder:text-[#12161C]/40 focus:outline-none focus:ring-2 focus:ring-[#E7FE8E]"
              placeholder="Pessoas, grupos e interesses"
              type="search"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {RECENT_SEARCHES.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="px-4 py-1.5 bg-white rounded-full text-xs font-medium text-[#12161C] shadow-sm hover:bg-white/80"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {people.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold text-[#12161C]/50 uppercase tracking-wider mb-3">Pessoas</h2>
            <div className="space-y-2">
              {people.map((person) => (
                <button
                  key={person.id}
                  type="button"
                  onClick={() => go('user', person)}
                  className="w-full flex items-center gap-3 p-3 bg-white rounded-[20px] text-left hover:ring-2 hover:ring-[#E7FE8E]/60 transition"
                >
                  <img src={person.avatarUrl} alt="" className="w-11 h-11 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#12161C] truncate">{person.name}</p>
                    <p className="text-xs text-[#12161C]/55 truncate">@{person.handle}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {groups.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold text-[#12161C]/50 uppercase tracking-wider mb-3">Grupos</h2>
            <div className="space-y-2">
              {groups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => go('group', group)}
                  className="w-full flex items-center gap-3 p-3 bg-white rounded-[20px] text-left hover:ring-2 hover:ring-[#E7FE8E]/60 transition"
                >
                  <img src={group.coverUrl} alt="" className="w-11 h-11 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#12161C] truncate">{group.name}</p>
                    <p className="text-xs text-[#12161C]/55 truncate">{group.members} membros</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {query && !people.length && !groups.length && (
          <p className="text-sm text-[#12161C]/55 text-center py-8">Nenhum resultado para &quot;{query}&quot;</p>
        )}
      </main>
    </div>
  )
}
