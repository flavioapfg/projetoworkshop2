import { CONVERSATIONS } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

export default function MensagensView({ onBack }) {
  const { go } = useNav()

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title="Mensagens" onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-4 space-y-2">
        {CONVERSATIONS.map((conv) => (
          <button
            key={conv.id}
            type="button"
            onClick={() => go('chat', conv)}
            className="w-full flex items-center gap-3 p-4 bg-white rounded-[20px] text-left hover:ring-2 hover:ring-[#E7FE8E]/50 transition"
          >
            <div className="relative shrink-0">
              <img src={conv.peer.avatarUrl} alt="" className="w-12 h-12 rounded-full object-cover" />
              {conv.peer.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between gap-2">
                <p className="text-sm font-semibold text-[#12161C] truncate">{conv.peer.name}</p>
                <span className="text-xs text-[#12161C]/45 shrink-0">{conv.time}</span>
              </div>
              <p className="text-sm text-[#12161C]/55 truncate">{conv.preview}</p>
            </div>
            {conv.unread > 0 && (
              <span className="shrink-0 min-w-[22px] h-[22px] px-1.5 rounded-full bg-[#E7FE8E] text-xs font-bold text-[#12161C] flex items-center justify-center">
                {conv.unread}
              </span>
            )}
          </button>
        ))}
      </main>
    </div>
  )
}
