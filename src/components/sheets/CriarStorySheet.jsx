import { useNav } from '../../shell/NavigationContext.jsx'

/** Presentational modal — matches gooday_criar_story_modal.html */
export function CriarStoryModal({ onClose, onTakePhoto, onChooseGallery }) {
  return (
    <div
      aria-labelledby="modal-title"
      aria-modal="true"
      className="w-full max-w-[448px] mx-auto bg-white rounded-3xl shadow-2xl p-7 flex flex-col"
      role="dialog"
      data-purpose="criar-story-modal"
    >
      <div className="mb-5">
        <h2
          className="text-[21px] font-bold text-gray-900 tracking-tight leading-snug"
          id="modal-title"
        >
          Novo story
        </h2>
        <p className="text-[13.5px] text-gray-500 mt-1 leading-normal">
          Escolha como quer criar seu story
        </p>
      </div>

      <div className="flex flex-col gap-3.5 mb-5" data-purpose="story-creation-options">
        <button
          className="w-full flex items-center gap-4 p-3.5 border border-modal-border rounded-2xl text-left transition-colors duration-150 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-400"
          data-purpose="action-take-photo"
          type="button"
          onClick={onTakePhoto}
        >
          <div className="w-11 h-11 rounded-full bg-brand-lime-light/90 flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 text-brand-lime-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[14.5px] font-semibold text-gray-900 leading-snug">Tirar foto</span>
            <span className="text-[12.5px] text-gray-500 leading-normal">
              Usar a câmera do dispositivo
            </span>
          </div>
        </button>

        <button
          className="w-full flex items-center gap-4 p-3.5 border border-modal-border rounded-2xl text-left transition-colors duration-150 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-400"
          data-purpose="action-choose-gallery"
          type="button"
          onClick={onChooseGallery}
        >
          <div className="w-11 h-11 rounded-full bg-brand-lime-light/90 flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 text-brand-lime-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[14.5px] font-semibold text-gray-900 leading-snug">
              Escolher da galeria
            </span>
            <span className="text-[12.5px] text-gray-500 leading-normal">
              Selecionar uma imagem salva
            </span>
          </div>
        </button>
      </div>

      <footer className="w-full">
        <button
          className="w-full py-3.5 bg-modal-cancel hover:bg-modal-cancel-hover text-gray-900 text-[14.5px] font-semibold rounded-2xl transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-300 active:scale-[0.99]"
          data-purpose="action-cancel"
          type="button"
          onClick={onClose}
        >
          Cancelar
        </button>
      </footer>
    </div>
  )
}

export default function CriarStorySheet({ onClose }) {
  const { openMediaCapture, closeSheet } = useNav()

  function pick(source) {
    closeSheet()
    openMediaCapture({ mode: 'story', source })
  }

  return (
    <CriarStoryModal
      onClose={onClose}
      onTakePhoto={() => pick('camera')}
      onChooseGallery={() => pick('gallery')}
    />
  )
}
