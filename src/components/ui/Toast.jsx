import { useNav } from '../../shell/NavigationContext.jsx'

export default function Toast() {
  const { toast } = useNav()
  if (!toast) return null

  return (
    <div
      className="fixed left-1/2 z-[90] -translate-x-1/2 px-4 py-3 rounded-2xl bg-[#12161C] text-white text-sm font-medium shadow-lg max-w-[420px] w-[calc(100%-2rem)] text-center animate-[toastUp_240ms_ease-out]"
      style={{ bottom: 'calc(68px + env(safe-area-inset-bottom, 0px))' }}
      role="status"
    >
      {toast.message}
      <style>{`
        @keyframes toastUp {
          from { opacity: 0; transform: translate(-50%, 8px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        @media (min-width: 800px) {
          [role="status"] { bottom: 100px !important; }
        }
      `}</style>
    </div>
  )
}
