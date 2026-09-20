import { useNavigate } from 'react-router-dom'

export default function Criar() {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-900 overflow-hidden select-none font-sans antialiased">
      {/* BEGIN: Background Layer (Blurred & Dimmed Snapshot) */}
<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" data-purpose="background-context">

{/* Dark/dim overlay on top of blurred image */}
<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
</div>
{/* END: Background Layer */}
{/* BEGIN: Modal Container */}
<main className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-6" data-purpose="modal-wrapper">
{/* BEGIN: Create Modal Box */}
<div aria-labelledby="modal-title" aria-modal="true" className="relative w-full max-w-[540px] bg-white rounded-3xl shadow-modal p-7 md:p-8 flex flex-col" data-purpose="create-modal" role="dialog">
{/* BEGIN: Modal Header */}
<header className="flex items-center justify-between mb-6 pb-1">
<h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight" id="modal-title">
          Criar
        </h2>
{/* Close Button */}
<button aria-label="Fechar" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F0F2F6] hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-400" onClick={() => navigate('/home')} type="button">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</header>
{/* END: Modal Header */}
{/* BEGIN: Modal Actions / Options List */}
<div className="space-y-4" data-purpose="options-list">
{/* Option 1: Publicação */}
<button className="option-card w-full flex items-center p-4 sm:p-5 rounded-2xl border border-gray-100 bg-white shadow-sm text-left group focus:outline-none focus:ring-2 focus:ring-lime-400" data-purpose="create-post-option" type="button" onClick={() => navigate('/nova-publicacao')}>
{/* Soft Lime Circular Icon Container */}
<div className="w-14 h-14 rounded-full bg-[#F5FCD2] flex items-center justify-center shrink-0 mr-4 text-[#8CB71B] group-hover:scale-105 transition-transform">
{/* Camera / Media icon matching design */}
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
<rect height="18" rx="5" ry="5" width="20" x="2" y="3"></rect>
<circle cx="12" cy="12" r="3.5"></circle>
<circle cx="17.5" cy="6.5" fill="currentColor" r="0.8"></circle>
</svg>
</div>
{/* Option Text Details */}
<div className="flex flex-col">
<span className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-black">Publicação</span>
<span className="text-xs sm:text-sm text-gray-500 mt-0.5">Compartilhe fotos ou texto no feed</span>
</div>
</button>
{/* Option 2: Story */}
<button className="option-card w-full flex items-center p-4 sm:p-5 rounded-2xl border border-gray-100 bg-white shadow-sm text-left group focus:outline-none focus:ring-2 focus:ring-lime-400" data-purpose="create-story-option" type="button" onClick={() => navigate('/criar-story')}>
{/* Soft Lime Circular Icon Container */}
<div className="w-14 h-14 rounded-full bg-[#F5FCD2] flex items-center justify-center shrink-0 mr-4 text-[#8CB71B] group-hover:scale-105 transition-transform">
{/* Story (+) Icon matching screenshot */}
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="9"></circle>
<line x1="12" x2="12" y1="8" y2="16"></line>
<line x1="8" x2="16" y1="12" y2="12"></line>
</svg>
</div>
{/* Option Text Details */}
<div className="flex flex-col">
<span className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-black">Story</span>
<span className="text-xs sm:text-sm text-gray-500 mt-0.5">Desaparece em 24 horas</span>
</div>
</button>
</div>
{/* END: Modal Actions / Options List */}
</div>
{/* END: Create Modal Box */}
</main>
{/* END: Modal Container */}
{/* BEGIN: Interactive Logic */}

{/* END: Interactive Logic */}
    </div>
  )
}
