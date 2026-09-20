import { useEffect, useRef } from 'react'
import { ME } from '../../data/mock.js'
import { useNav } from '../../shell/NavigationContext.jsx'

export default function AvatarMenu() {
  const { avatarMenuOpen, setAvatarMenuOpen, go, openSheet } = useNav()
  const ref = useRef(null)

  useEffect(() => {
    if (!avatarMenuOpen) return undefined
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setAvatarMenuOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [avatarMenuOpen, setAvatarMenuOpen])

  if (!avatarMenuOpen) return null

  const links = [
    { label: 'Meu perfil', action: () => go('profile') },
    { label: 'Editar perfil', action: () => go('editProfile') },
    { label: 'Configurações', action: () => go('settings') },
    { label: 'Sair', action: () => openSheet('logout'), danger: true },
  ]

  function pick(action) {
    setAvatarMenuOpen(false)
    action()
  }

  return (
    <div className="fixed inset-0 z-[75] pointer-events-none">
      <div
        ref={ref}
        className="pointer-events-auto absolute right-4 top-16 w-56 bg-white rounded-[20px] shadow-xl border border-[#ECEDF5] py-2 overflow-hidden"
      >
      <div className="px-4 py-3 border-b border-[#ECEDF5] flex items-center gap-3">
        <img src={ME.avatarUrl} alt="" className="w-10 h-10 rounded-full object-cover" />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#12161C] truncate">{ME.name}</p>
          <p className="text-xs text-[#12161C]/55 truncate">@{ME.handle}</p>
        </div>
      </div>
      {links.map(({ label, action, danger }) => (
        <button
          key={label}
          type="button"
          onClick={() => pick(action)}
          className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#ECEDF5] ${
            danger ? 'text-red-600' : 'text-[#12161C]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
    </div>
  )
}
