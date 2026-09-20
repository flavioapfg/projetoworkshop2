import { REACTION_EMOJIS } from '../../data/mock.js'
import { useNav } from '../../shell/NavigationContext.jsx'

export default function ReagirSheet({ onClose }) {
  const { showToast, closeSheet } = useNav()

  function pick(emoji) {
    showToast(`Você reagiu ${emoji}`)
    closeSheet()
  }

  return (
    <div className="bg-white rounded-t-[20px] sm:rounded-[20px] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-xl">
      <h2 className="text-base font-bold text-[#12161C] mb-4 text-center">Reagir</h2>
      <div className="grid grid-cols-4 gap-3">
        {REACTION_EMOJIS.map((emoji) => (
          <button
            key={emoji}
            type="button"
            onClick={() => pick(emoji)}
            className="aspect-square rounded-[20px] bg-[#ECEDF5] text-2xl hover:bg-[#E7FE8E]/50 transition"
          >
            {emoji}
          </button>
        ))}
      </div>
      <button type="button" onClick={onClose} className="w-full mt-4 text-sm text-[#12161C]/55">
        Cancelar
      </button>
    </div>
  )
}
