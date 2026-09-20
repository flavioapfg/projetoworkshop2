import { useState } from 'react'
import { ME } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

export default function EditarPerfilView({ onBack }) {
  const { showToast } = useNav()
  const [name, setName] = useState(ME.name)
  const [handle, setHandle] = useState(ME.handle)
  const [bio, setBio] = useState(ME.bio)
  const [location, setLocation] = useState(ME.location)

  function save() {
    showToast('Perfil atualizado')
    onBack()
  }

  const fields = [
    { label: 'Nome', value: name, set: setName },
    { label: 'Usuário', value: handle, set: setHandle, prefix: '@' },
    { label: 'Bio', value: bio, set: setBio, multiline: true },
    { label: 'Local', value: location, set: setLocation },
  ]

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title="Editar perfil" onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        {fields.map(({ label, value, set, prefix, multiline }) => (
          <label key={label} className="block bg-white rounded-[20px] p-4">
            <span className="text-xs font-medium text-[#12161C]/55 uppercase tracking-wide">{label}</span>
            <div className="flex items-center mt-1 gap-1">
              {prefix && <span className="text-[#12161C]/45">{prefix}</span>}
              {multiline ? (
                <textarea
                  value={value}
                  onChange={(e) => set(e.target.value)}
                  rows={3}
                  className="w-full text-sm text-[#12161C] focus:outline-none resize-none"
                />
              ) : (
                <input
                  value={value}
                  onChange={(e) => set(e.target.value)}
                  className="w-full text-sm text-[#12161C] focus:outline-none"
                />
              )}
            </div>
          </label>
        ))}
        <button
          type="button"
          onClick={save}
          className="w-full py-3 rounded-[20px] bg-[#E7FE8E] text-sm font-semibold text-[#12161C]"
        >
          Salvar
        </button>
      </main>
    </div>
  )
}
