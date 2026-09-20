import { useState } from 'react'
import { NOTIFICATIONS } from '../../data/mock.js'

export default function NotificacoesSheet({ onClose }) {
  const [items, setItems] = useState(NOTIFICATIONS)

  function markAllRead() {
    setItems((list) => list.map((n) => ({ ...n, unread: false })))
  }

  return (
    <div className="bg-white rounded-t-[20px] sm:rounded-[20px] flex flex-col max-h-[85vh] shadow-xl">
      <div className="p-4 flex items-center justify-between border-b border-[#ECEDF5]">
        <h2 className="text-base font-bold text-[#12161C]">Notificações</h2>
        <button type="button" onClick={markAllRead} className="text-xs font-semibold text-[#12161C]/60">
          Marcar todas como lidas
        </button>
      </div>
      <ul className="overflow-y-auto flex-1 divide-y divide-[#ECEDF5]">
        {items.map((n) => (
          <li key={n.id} className={`flex gap-3 p-4 ${n.unread ? 'bg-[#E7FE8E]/15' : ''}`}>
            <img src={n.actor.avatarUrl} alt="" className="w-10 h-10 rounded-full object-cover shrink-0" />
            <div className="min-w-0">
              <p className="text-sm text-[#12161C]">
                <span className="font-semibold">{n.actor.name}</span> {n.text}
              </p>
              <p className="text-xs text-[#12161C]/45 mt-1">{n.time}</p>
            </div>
            {n.unread && <span className="w-2 h-2 rounded-full bg-[#E7FE8E] shrink-0 mt-2" />}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onClose}
        className="p-4 text-sm text-center text-[#12161C]/55 border-t border-[#ECEDF5]"
      >
        Fechar
      </button>
    </div>
  )
}
