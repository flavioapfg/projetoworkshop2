import { PEOPLE, ME } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

const ROLES = ['Admin', 'Moderador', 'Membro']

export default function MembrosView({ param, onBack }) {
  const { go } = useNav()
  const title = param?.name ? `Membros · ${param.name}` : 'Membros'

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title={title} onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-4 space-y-2">
        {[ME, ...PEOPLE].map((person, i) => (
          <button
            key={person.id}
            type="button"
            onClick={() => go('user', person)}
            className="w-full flex items-center gap-3 p-4 bg-white rounded-[20px] text-left"
          >
            <img src={person.avatarUrl} alt="" className="w-11 h-11 rounded-full object-cover" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#12161C] truncate">{person.name}</p>
              <p className="text-xs text-[#12161C]/55">@{person.handle}</p>
            </div>
            <span className="text-xs font-medium text-[#12161C]/60 px-2 py-1 bg-[#ECEDF5] rounded-full">
              {i === 0 ? 'Admin' : ROLES[(i % ROLES.length) + 1] || 'Membro'}
            </span>
          </button>
        ))}
      </main>
    </div>
  )
}
