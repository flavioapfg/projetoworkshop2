import { useEffect, useState } from 'react'
import { ME } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'

const FAKE_URL = ME.coverUrl

export default function MediaCaptureOverlay() {
  const { mediaCapture, closeMediaCapture, openSheet } = useNav()
  const [step, setStep] = useState('source')

  useEffect(() => {
    if (!mediaCapture) {
      setStep('source')
      return
    }
    if (mediaCapture.source === 'camera') setStep('camera')
    else if (mediaCapture.source === 'gallery') setStep('review')
    else setStep('source')
  }, [mediaCapture])

  if (!mediaCapture) return null

  const isStory = mediaCapture.mode === 'story'

  function confirm() {
    mediaCapture.onConfirm?.(FAKE_URL)
    closeMediaCapture()
    if (isStory) openSheet('story', { mediaUrl: FAKE_URL })
  }

  function close() {
    setStep('source')
    closeMediaCapture()
  }

  return (
    <div className="fixed inset-0 z-[75] bg-[#12161C] text-white flex flex-col">
      <header className="flex items-center justify-between px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <button type="button" onClick={close} className="text-sm text-white/70">
          Cancelar
        </button>
        <span className="text-sm font-semibold">{isStory ? 'Novo story' : 'Mídia'}</span>
        <span className="w-12" />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
        {step === 'source' && (
          <>
            <p className="text-white/70 text-sm text-center">Escolha como adicionar mídia</p>
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              <button type="button" onClick={() => setStep('camera')} className="py-8 rounded-[20px] bg-white/10">
                Câmera
              </button>
              <button type="button" onClick={() => setStep('review')} className="py-8 rounded-[20px] bg-white/10">
                Galeria
              </button>
            </div>
          </>
        )}
        {step === 'camera' && (
          <>
            <div className="w-full max-w-sm aspect-[9/16] rounded-[20px] bg-[#ECEDF5]/20 flex items-center justify-center">
              Pré-visualização da câmera
            </div>
            <button
              type="button"
              onClick={() => setStep('review')}
              className="w-16 h-16 rounded-full border-4 border-white bg-[#E7FE8E]"
              aria-label="Capturar"
            />
          </>
        )}
        {step === 'review' && (
          <>
            <div className={`w-full max-w-sm overflow-hidden rounded-[20px] ${isStory ? 'aspect-[9/16]' : 'aspect-square'}`}>
              <img src={FAKE_URL} alt="" className="w-full h-full object-cover" />
            </div>
            <button
              type="button"
              onClick={confirm}
              className="w-full max-w-sm py-3 rounded-[20px] bg-[#E7FE8E] text-[#12161C] font-semibold text-sm"
            >
              Usar esta mídia
            </button>
          </>
        )}
      </main>
    </div>
  )
}
