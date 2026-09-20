import { PEOPLE } from '../../data/mock.js'
import { useNav } from '../../shell/NavigationContext.jsx'

const ACTIONS = ['Copiar link', 'Enviar por mensagem', 'Compartilhar no grupo']

export default function CompartilharSheet({ onClose }) {
  const { showToast, closeSheet } = useNav()

  function act(label) {
    showToast(label)
    closeSheet()
  }

  return (
    <div className="bg-white rounded-t-[20px] sm:rounded-[20px] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-xl">
      <h2 className="text-base font-bold text-[#12161C] mb-4">Compartilhar</h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {PEOPLE.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => act(`Enviado para ${p.name}`)}
            className="shrink-0 flex flex-col items-center gap-1 w-16"
          >
            <img src={p.avatarUrl} alt="" className="w-12 h-12 rounded-full object-cover" />
            <span className="text-[10px] text-[#12161C]/70 truncate w-full text-center">{p.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 space-y-1">
        {ACTIONS.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => act(label)}
            className="w-full text-left px-4 py-3 rounded-[20px] hover:bg-[#ECEDF5] text-sm text-[#12161C]"
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
