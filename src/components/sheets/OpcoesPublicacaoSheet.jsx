import { useNav } from '../../shell/NavigationContext.jsx'

const ITEMS = ['Salvar publicação', 'Desativar comentários', 'Denunciar', 'Excluir']

export default function OpcoesPublicacaoSheet({ onClose }) {
  const { showToast, closeSheet } = useNav()

  function pick(label) {
    showToast(label)
    closeSheet()
  }

  return (
    <div className="bg-white rounded-t-[20px] sm:rounded-[20px] p-3 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-xl">
      <div className="w-10 h-1 bg-[#ECEDF5] rounded-full mx-auto mb-2 sm:hidden" />
      {ITEMS.map((label) => (
        <button
          key={label}
          type="button"
          onClick={() => pick(label)}
          className={`w-full text-left px-4 py-3.5 rounded-[16px] text-sm hover:bg-[#ECEDF5] ${
            label === 'Excluir' ? 'text-red-600' : 'text-[#12161C]'
          }`}
        >
          {label}
        </button>
      ))}
      <button type="button" onClick={onClose} className="w-full py-3 text-sm font-medium text-[#12161C]/55">
        Cancelar
      </button>
    </div>
  )
}
