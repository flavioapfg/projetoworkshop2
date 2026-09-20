import { useNav } from '../../shell/NavigationContext.jsx'
import CreatePickerSheet from './CreatePickerSheet.jsx'
import CriarStorySheet from './CriarStorySheet.jsx'
import NovaPublicacaoSheet from './NovaPublicacaoSheet.jsx'
import NovoStorySheet from './NovoStorySheet.jsx'
import ComentariosSheet from './ComentariosSheet.jsx'
import ReagirSheet from './ReagirSheet.jsx'
import CompartilharSheet from './CompartilharSheet.jsx'
import OpcoesPublicacaoSheet from './OpcoesPublicacaoSheet.jsx'
import NotificacoesSheet from './NotificacoesSheet.jsx'
import SuaContaSheet from './SuaContaSheet.jsx'
import LogoutSheet from './LogoutSheet.jsx'

const SHEETS = {
  create: CreatePickerSheet,
  createStory: CriarStorySheet,
  newPost: NovaPublicacaoSheet,
  story: NovoStorySheet,
  comments: ComentariosSheet,
  react: ReagirSheet,
  share: CompartilharSheet,
  postOptions: OpcoesPublicacaoSheet,
  notifications: NotificacoesSheet,
  account: SuaContaSheet,
  logout: LogoutSheet,
}

export default function SheetHost() {
  const { sheet, closeSheet } = useNav()
  if (!sheet) return null

  const Comp = SHEETS[sheet.type]
  if (!Comp) return null

  const centered = sheet.type === 'createStory'

  return (
    <div
      className={`fixed inset-0 z-[70] flex justify-center p-4 ${
        centered ? 'items-center' : 'items-end sm:items-center sm:p-4 p-0'
      }`}
      role="presentation"
    >
      <button
        type="button"
        aria-label="Fechar"
        className="absolute inset-0 bg-[#12161C]/68 backdrop-blur-sm"
        onClick={closeSheet}
      />
      <div
        className={`relative w-full sm:max-w-md max-h-[92vh] overflow-hidden ${
          centered ? 'animate-[fadeScale_220ms_ease-out]' : 'animate-[sheetUp_280ms_ease-out]'
        }`}
      >
        <Comp payload={sheet.payload} onClose={closeSheet} />
      </div>
      <style>{`
        @keyframes sheetUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
