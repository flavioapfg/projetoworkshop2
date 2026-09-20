import { ME } from '../../data/mock.js'
import { useNav } from '../../shell/NavigationContext.jsx'

export default function SuaContaSheet({ onClose }) {
  const { go, openSheet, closeSheet } = useNav()

  function nav(view) {
    closeSheet()
    go(view)
  }

  const links = [
    { label: 'Meu perfil', action: () => nav('profile') },
    { label: 'Editar perfil', action: () => nav('editProfile') },
    { label: 'Configurações', action: () => nav('settings') },
    { label: 'Sair', action: () => openSheet('logout'), danger: true },
  ]

  return (
    <div className="bg-white rounded-t-[20px] sm:rounded-[20px] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-xl">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#ECEDF5]">
        <img src={ME.avatarUrl} alt="" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-[#12161C]">{ME.name}</p>
          <p className="text-sm text-[#12161C]/55">@{ME.handle}</p>
        </div>
      </div>
      <div className="space-y-1">
        {links.map(({ label, action, danger }) => (
          <button
            key={label}
            type="button"
            onClick={action}
            className={`w-full text-left px-4 py-3 rounded-[16px] text-sm hover:bg-[#ECEDF5] ${
              danger ? 'text-red-600' : 'text-[#12161C]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <button type="button" onClick={onClose} className="w-full mt-3 text-sm text-[#12161C]/55">
        Fechar
      </button>
    </div>
  )
}
