import { useNavigate } from 'react-router-dom'
import { CriarStoryModal } from '../components/sheets/CriarStorySheet.jsx'

/** Route fallback for /criar-story — same UI as gooday_criar_story_modal.html */
export default function CriarStory() {
  const navigate = useNavigate()
  const close = () => navigate('/home')

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-[#12161C]/68 backdrop-blur-sm">
      <button type="button" aria-label="Fechar" className="absolute inset-0" onClick={close} />
      <div className="relative w-full max-w-[448px]">
        <CriarStoryModal
          onClose={close}
          onTakePhoto={close}
          onChooseGallery={close}
        />
      </div>
    </div>
  )
}
