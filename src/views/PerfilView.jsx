import { useState } from 'react'
import { ME, POSTS } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'
import { ViewHeader } from '../shell/ViewHost.jsx'

const TABS = ['Publicações', 'Salvos', 'Grupos', 'Sobre']

export default function PerfilView({ onBack }) {
  const { go } = useNav()
  const [tab, setTab] = useState('Publicações')
  const myPosts = POSTS.filter((p) => p.authorId === ME.id)

  return (
    <div className="min-h-full pb-16">
      <ViewHeader title="Meu perfil" onBack={onBack} />
      <main className="max-w-lg mx-auto px-4 pt-2 pb-8">
        <div className="h-[140px] rounded-[20px] overflow-hidden bg-white">
          <img src={ME.coverUrl} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="-mt-10 ml-2 w-[72px] h-[72px] rounded-full border-[3px] border-[#ECEDF5] overflow-hidden">
          <img src={ME.avatarUrl} alt="" className="w-full h-full object-cover" />
        </div>
        <h2 className="mt-2 text-xl font-bold text-[#12161C]">{ME.name}</h2>
        <p className="text-sm text-[#12161C]/55">
          @{ME.handle} · {ME.location}
        </p>
        <p className="text-sm text-[#12161C]/80 mt-2">{ME.bio}</p>

        <div className="flex gap-6 mt-4">
          {[
            ['followers', 'seguidores'],
            ['following', 'seguindo'],
            ['posts', 'publicações'],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => go('follows', { tab: key })}
              className="text-left"
            >
              <span className="block text-base font-bold text-[#12161C]">{ME[key]}</span>
              <span className="text-xs text-[#12161C]/55">{label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <button
            type="button"
            onClick={() => go('editProfile')}
            className="py-2.5 rounded-[20px] bg-[#E7FE8E] text-sm font-semibold text-[#12161C]"
          >
            Editar perfil
          </button>
          <button
            type="button"
            onClick={() => go('groups')}
            className="py-2.5 rounded-[20px] bg-white text-sm font-medium text-[#12161C]"
          >
            Meus grupos
          </button>
        </div>

        <nav className="flex gap-5 mt-8 border-b border-[#12161C]/10 text-sm">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`pb-2 ${tab === t ? 'font-semibold text-[#12161C] border-b-2 border-[#E7FE8E]' : 'text-[#12161C]/55'}`}
            >
              {t}
            </button>
          ))}
        </nav>

        {tab === 'Publicações' && (
          <div className="grid grid-cols-2 gap-3 mt-4">
            {(myPosts.length ? myPosts : POSTS.slice(0, 2)).map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => go('post', post)}
                className="aspect-square rounded-[20px] overflow-hidden bg-white"
              >
                <img src={post.imageUrl} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
        {tab === 'Sobre' && (
          <div className="mt-4 p-4 bg-white rounded-[20px] text-sm text-[#12161C]/80">
            <p className="font-medium text-[#12161C] mb-2">Interesses</p>
            <div className="flex flex-wrap gap-2">
              {ME.interests.map((i) => (
                <span key={i} className="px-3 py-1 bg-[#ECEDF5] rounded-full text-xs">
                  {i}
                </span>
              ))}
            </div>
          </div>
        )}
        {tab !== 'Publicações' && tab !== 'Sobre' && (
          <p className="mt-6 text-sm text-[#12161C]/55 text-center">Em breve nesta aba.</p>
        )}
      </main>
    </div>
  )
}
