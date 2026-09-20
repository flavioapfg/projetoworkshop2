import { useNav } from '../shell/NavigationContext.jsx'
import BuscarView from '../views/BuscarView.jsx'
import PerfilView from '../views/PerfilView.jsx'
import UserProfileView from '../views/UserProfileView.jsx'
import GrupoView from '../views/GrupoView.jsx'
import PublicacaoView from '../views/PublicacaoView.jsx'
import MensagensView from '../views/MensagensView.jsx'
import ChatView from '../views/ChatView.jsx'
import EditarPerfilView from '../views/EditarPerfilView.jsx'
import MembrosView from '../views/MembrosView.jsx'
import SeguidoresView from '../views/SeguidoresView.jsx'
import MeusGruposView from '../views/MeusGruposView.jsx'
import ConfiguracoesView from '../views/ConfiguracoesView.jsx'
import AlterarEmailView from '../views/AlterarEmailView.jsx'
import AlterarSenhaView from '../views/AlterarSenhaView.jsx'

const VIEWS = {
  search: BuscarView,
  profile: PerfilView,
  user: UserProfileView,
  group: GrupoView,
  post: PublicacaoView,
  messages: MensagensView,
  chat: ChatView,
  editProfile: EditarPerfilView,
  members: MembrosView,
  follows: SeguidoresView,
  groups: MeusGruposView,
  settings: ConfiguracoesView,
  changeEmail: AlterarEmailView,
  changePassword: AlterarSenhaView,
}

export default function ViewHost() {
  const { current, back } = useNav()
  if (!current) return null

  const Comp = VIEWS[current.view]
  if (!Comp) return null

  return (
    <div
      className="fixed inset-0 z-[60] bg-[#ECEDF5] overflow-y-auto overscroll-contain animate-[viewIn_240ms_ease-out]"
      data-purpose="overlay-view"
    >
      <Comp param={current.param} onBack={back} />
      <style>{`
        @keyframes viewIn {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

export function ViewHeader({ title, onBack, right = null }) {
  return (
    <header className="sticky top-0 z-10 w-full bg-white/95 backdrop-blur border-b border-[#E8EAF2] px-4 sm:px-8 py-4 flex items-center gap-3 pt-[max(1rem,env(safe-area-inset-top))]">
      <button
        type="button"
        aria-label="Voltar"
        className="p-1.5 -ml-1.5 text-[#12161C] hover:bg-slate-100 rounded-full"
        onClick={onBack}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {title ? <h1 className="text-base font-semibold text-[#12161C] tracking-tight flex-1">{title}</h1> : <div className="flex-1" />}
      {right}
    </header>
  )
}
