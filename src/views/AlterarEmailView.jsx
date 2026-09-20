import { useState } from 'react'
import { ME } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

function validEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export default function AlterarEmailView({ onBack }) {
  const { showToast } = useNav()
  const [email, setEmail] = useState(ME.email)
  const ok = validEmail(email)

  function save() {
    if (!ok) {
      showToast('Informe um e-mail válido')
      return
    }
    showToast('E-mail atualizado')
    onBack()
  }

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title="Alterar e-mail" onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        <label className="block bg-white rounded-[20px] p-4">
          <span className="text-xs font-medium text-[#12161C]/55 uppercase">Novo e-mail</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 text-sm text-[#12161C] focus:outline-none"
          />
        </label>
        {!ok && email && <p className="text-xs text-red-500 px-1">Formato de e-mail inválido</p>}
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
