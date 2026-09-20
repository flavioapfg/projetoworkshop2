import { useNav } from '../../shell/NavigationContext.jsx'

export default function CreatePickerSheet({ onClose }) {
  const { openSheet } = useNav()

  const items = [
    {
      label: 'Publicação',
      desc: 'Foto ou legenda no feed',
      action: () => {
        onClose()
        openSheet('newPost')
      },
    },
    {
      label: 'Story',
      desc: 'Compartilhe por 24h',
      action: () => {
        openSheet('createStory')
      },
    },
  ]

  return (
    <div className="bg-white rounded-t-[20px] sm:rounded-[20px] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-xl">
      <div className="w-10 h-1 bg-[#ECEDF5] rounded-full mx-auto mb-4 sm:hidden" />
      <h2 className="text-base font-bold text-[#12161C] mb-4">Criar</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={item.action}
            className="w-full text-left p-4 rounded-[20px] bg-[#ECEDF5] hover:bg-[#E7FE8E]/40 transition"
          >
            <p className="text-sm font-semibold text-[#12161C]">{item.label}</p>
            <p className="text-xs text-[#12161C]/55 mt-0.5">{item.desc}</p>
          </button>
        ))}
      </div>
      <button type="button" onClick={onClose} className="w-full mt-4 py-2.5 text-sm text-[#12161C]/55">
        Cancelar
      </button>
    </div>
  )
}
