import { useState } from 'react'
import { ME } from '../../data/mock.js'
import { useNav } from '../../shell/NavigationContext.jsx'

export default function NovaPublicacaoSheet({ onClose }) {
  const { showToast, closeSheet } = useNav()
  const [caption, setCaption] = useState('')

  function share() {
    showToast('Publicação compartilhada')
    closeSheet()
  }

  return (
    <div className="bg-white rounded-t-[20px] sm:rounded-[20px] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-xl max-h-[92vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#12161C]">Nova publicação</h2>
        <button type="button" onClick={onClose} className="p-2 rounded-full hover:bg-[#ECEDF5] text-[#12161C]/60" aria-label="Fechar">
          ✕
        </button>
      </div>
      <div className="h-48 rounded-[20px] bg-[#ECEDF5] flex flex-col items-center justify-center text-sm text-[#12161C]/55">
        <span className="text-2xl mb-2">🖼</span>
        Tirar foto ou galeria
      </div>
      <div className="flex items-start gap-3 mt-4">
        <img src={ME.avatarUrl} alt="" className="w-9 h-9 rounded-full object-cover" />
        <input
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Escreva uma legenda..."
          className="flex-1 text-sm text-[#12161C] bg-transparent focus:outline-none py-2"
        />
      </div>
      <button
        type="button"
        onClick={share}
        className="w-full mt-6 py-3 rounded-[20px] bg-[#E7FE8E] text-sm font-semibold text-[#12161C]"
      >
        Compartilhar
      </button>
    </div>
  )
}
