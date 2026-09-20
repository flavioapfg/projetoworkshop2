import { ME } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

const LINKS = [
  { label: 'Alterar e-mail', view: 'changeEmail' },
  { label: 'Alterar senha', view: 'changePassword' },
]

export default function ConfiguracoesView({ onBack }) {
  const { go, openSheet } = useNav()

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title="Configurações" onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        <div className="flex items-center gap-4 p-4 bg-white rounded-[20px]">
          <img src={ME.avatarUrl} alt="" className="w-14 h-14 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-[#12161C]">{ME.name}</p>
            <p className="text-sm text-[#12161C]/55">@{ME.handle}</p>
            <p className="text-xs text-[#12161C]/45 mt-0.5">{ME.email}</p>
          </div>
        </div>

        <div className="bg-white rounded-[20px] overflow-hidden divide-y divide-[#ECEDF5]">
          {LINKS.map(({ label, view }) => (
            <button
              key={view}
              type="button"
              onClick={() => go(view)}
              className="w-full flex items-center justify-between px-4 py-3.5 text-sm text-[#12161C] hover:bg-[#ECEDF5]/50"
            >
              {label}
              <span className="text-[#12161C]/35">›</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => openSheet('logout')}
          className="w-full py-3 rounded-[20px] bg-white text-sm font-semibold text-red-600"
        >
          Sair
        </button>
      </main>
    </div>
  )
}
