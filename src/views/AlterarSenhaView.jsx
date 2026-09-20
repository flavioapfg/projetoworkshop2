import { useState } from 'react'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

function validPassword(current, next, confirm) {
  if (next !== confirm) return false
  if (current === '@admin' || current === 'admin') return next.length >= 6
  return next.length >= 8
}

export default function AlterarSenhaView({ onBack }) {
  const { showToast } = useNav()
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [confirm, setConfirm] = useState('')
  const ok = validPassword(current, next, confirm)

  function save() {
    if (!ok) {
      showToast('Verifique as senhas (mín. 8 caracteres)')
      return
    }
    showToast('Senha alterada')
    onBack()
  }

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title="Alterar senha" onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-4 space-y-3">
        {[
          ['Senha atual', current, setCurrent],
          ['Nova senha', next, setNext],
          ['Confirmar senha', confirm, setConfirm],
        ].map(([label, val, set]) => (
          <label key={label} className="block bg-white rounded-[20px] p-4">
            <span className="text-xs font-medium text-[#12161C]/55 uppercase">{label}</span>
            <input
              type="password"
              value={val}
              onChange={(e) => set(e.target.value)}
              className="w-full mt-2 text-sm text-[#12161C] focus:outline-none"
            />
          </label>
        ))}
        <p className="text-xs text-[#12161C]/45 px-1">Demo: senha atual @admin aceita nova senha com 6+ caracteres.</p>
        <button
          type="button"
          onClick={save}
          disabled={!ok}
          className="w-full py-3 rounded-[20px] bg-[#E7FE8E] text-sm font-semibold text-[#12161C] disabled:opacity-40"
        >
          Salvar
        </button>
      </main>
    </div>
  )
}
