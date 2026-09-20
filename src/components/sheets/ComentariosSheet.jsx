import { useState } from 'react'
import { PEOPLE } from '../../data/mock.js'

export default function ComentariosSheet({ payload, onClose }) {
  const post = payload
  const [comments, setComments] = useState([
    { id: '1', author: PEOPLE[1], body: 'Adorei!', time: 'há 5 min' },
    { id: '2', author: PEOPLE[0], body: 'Bora repetir amanhã?', time: 'há 2 min' },
  ])
  const [draft, setDraft] = useState('')

  function send() {
    const body = draft.trim()
    if (!body) return
    setComments((c) => [
      ...c,
      { id: String(Date.now()), author: PEOPLE[0], body, time: 'agora' },
    ])
    setDraft('')
  }

  return (
    <div className="bg-white rounded-t-[20px] sm:rounded-[20px] flex flex-col max-h-[85vh] shadow-xl">
      <div className="p-4 border-b border-[#ECEDF5] flex items-center justify-between">
        <h2 className="text-base font-bold text-[#12161C]">Comentários</h2>
        <button type="button" onClick={onClose} className="text-sm text-[#12161C]/55">
          Fechar
        </button>
      </div>
      {post?.body && (
        <p className="px-4 py-2 text-xs text-[#12161C]/55 border-b border-[#ECEDF5] truncate">{post.body}</p>
      )}
      <ul className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {comments.map((c) => (
          <li key={c.id} className="flex gap-2">
            <img src={c.author.avatarUrl} alt="" className="w-8 h-8 rounded-full object-cover shrink-0" />
            <div className="bg-[#ECEDF5] rounded-[16px] px-3 py-2 flex-1">
              <p className="text-xs font-semibold text-[#12161C]">{c.author.name}</p>
              <p className="text-sm text-[#12161C]">{c.body}</p>
              <p className="text-[10px] text-[#12161C]/45 mt-1">{c.time}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="p-3 border-t border-[#ECEDF5] flex gap-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Escreva um comentário..."
          className="flex-1 px-4 py-2.5 rounded-[20px] bg-[#ECEDF5] text-sm focus:outline-none"
        />
        <button type="button" onClick={send} className="px-4 py-2 rounded-[20px] bg-[#12161C] text-white text-sm">
          Enviar
        </button>
      </div>
    </div>
  )
}
