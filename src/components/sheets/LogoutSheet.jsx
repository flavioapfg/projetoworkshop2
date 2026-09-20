import { useNav } from '../../shell/NavigationContext.jsx'

export default function LogoutSheet({ onClose }) {
  const { showToast, closeSheet } = useNav()

  function confirmLogout() {
    showToast('Você saiu da conta')
    closeSheet()
    onClose()
  }

  return (
    <div className="bg-white rounded-t-[20px] sm:rounded-[20px] p-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-xl text-center">
      <h2 className="text-base font-bold text-[#12161C]">Sair do Gooday?</h2>
      <p className="text-sm text-[#12161C]/55 mt-2">Você precisará entrar novamente para ver o feed.</p>
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button type="button" onClick={onClose} className="py-3 rounded-[20px] bg-[#ECEDF5] text-sm font-medium text-[#12161C]">
          Cancelar
        </button>
        <button type="button" onClick={confirmLogout} className="py-3 rounded-[20px] bg-[#12161C] text-sm font-semibold text-white">
          Sair
        </button>
      </div>
    </div>
  )
}
