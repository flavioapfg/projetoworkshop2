import { ME } from '../../data/mock.js'
import { useNav } from '../../shell/NavigationContext.jsx'

export default function NovoStorySheet({ payload, onClose }) {
  const { showToast, closeSheet } = useNav()
  const preview = payload?.mediaUrl || ME.coverUrl

  function publish() {
    showToast('Story publicado')
    closeSheet()
  }

  return (
    <div className="bg-white rounded-t-[20px] sm:rounded-[20px] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#12161C]">Novo story</h2>
        <button type="button" onClick={onClose} className="p-2 rounded-full hover:bg-[#ECEDF5]" aria-label="Fechar">
          ✕
        </button>
      </div>
      <div className="mx-auto w-full max-w-[220px] aspect-[9/16] rounded-[20px] overflow-hidden bg-[#12161C]">
        <img src={preview} alt="" className="w-full h-full object-cover" />
      </div>
      <button
        type="button"
        onClick={publish}
        className="w-full mt-6 py-3 rounded-[20px] bg-[#E7FE8E] text-sm font-semibold text-[#12161C]"
      >
        Publicar story
      </button>
    </div>
  )
}
