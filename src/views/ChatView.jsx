import { useMemo, useState } from 'react'
import { MESSAGES, PEOPLE } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

export default function ChatView({ param, onBack }) {
  const { go } = useNav()
  const peer = param?.peer || PEOPLE[0]
  const convId = param?.id
  const initial = useMemo(() => (convId ? MESSAGES[convId] || [] : []), [convId])
  const [messages, setMessages] = useState(initial)
  const [draft, setDraft] = useState('')

  function send() {
    const body = draft.trim()
    if (!body) return
    setMessages((m) => [
      ...m,
      { id: String(Date.now()), fromMe: true, body, time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) },
    ])
    setDraft('')
  }

  return (
    <div className="min-h-full flex flex-col pb-4">
      <ViewHeader
        title={peer.name}
        onBack={onBack}
        right={
          <button type="button" onClick={() => go('user', peer)} className="p-1">
            <img src={peer.avatarUrl} alt="" className="w-8 h-8 rounded-full object-cover" />
          </button>
        }
      />
      <div className="flex-1 max-w-lg mx-auto w-full px-4 py-4 space-y-3 overflow-y-auto">
        {!messages.length && (
          <p className="text-center text-sm text-[#12161C]/45 py-8">Comece a conversa com {peer.name}</p>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] px-4 py-2.5 rounded-[20px] text-sm ${
                msg.fromMe ? 'bg-[#E7FE8E] text-[#12161C]' : 'bg-white text-[#12161C]'
              }`}
            >
              <p>{msg.body}</p>
              <p className="text-[10px] opacity-60 mt-1 text-right">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 max-w-lg mx-auto w-full px-4 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <div className="flex gap-2 bg-white rounded-[20px] p-2 shadow-sm">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Mensagem..."
            className="flex-1 px-3 py-2 text-sm bg-transparent focus:outline-none text-[#12161C]"
          />
          <button
            type="button"
            onClick={send}
            className="px-4 py-2 rounded-[16px] bg-[#12161C] text-white text-sm font-medium"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}
