import { useNavigate } from 'react-router-dom'

export default function NovaPublicacao() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#111827] relative w-screen h-screen flex items-center justify-center select-none">
      {/* BEGIN: Background Content (Blurred App Feed Snapshot) */}
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm" data-purpose="modal-backdrop"></div>
{/* END: Background Content */}
{/* BEGIN: Modal Container */}
<div className="relative z-50 w-full max-w-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col p-6 animate-fade-in" data-purpose="modal-wrapper" style={{borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
{/* BEGIN: Modal Header */}
<header className="flex items-center justify-between pb-4">
<h2 className="text-[17px] font-bold text-gray-900 tracking-tight">Nova publicação</h2>
{/* Close Button */}
<button className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center text-gray-500 hover:text-gray-800" data-purpose="close-modal-button" type="button" onClick={() => navigate('/home')}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</header>
{/* END: Modal Header */}
{/* BEGIN: Media Upload Area */}
<div className="w-full h-[290px] bg-[#eaedf3] hover:bg-[#e4e8ef] transition-colors rounded-2xl flex flex-col items-center justify-center cursor-pointer border border-transparent hover:border-slate-300 group" data-purpose="media-upload-area">
<div className="flex flex-col items-center gap-2.5">
{/* 4 squares grid icon */}
<svg className="w-7 h-7 text-gray-600 group-hover:scale-105 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
<rect height="7" rx="1.5" width="7" x="3" y="3"></rect>
<rect height="7" rx="1.5" width="7" x="14" y="3"></rect>
<rect height="7" rx="1.5" width="7" x="14" y="14"></rect>
<rect height="7" rx="1.5" width="7" x="3" y="14"></rect>
</svg>
<span className="text-xs font-medium text-gray-600 tracking-wide">Tirar foto ou galeria</span>
</div>
</div>
{/* END: Media Upload Area */}
{/* BEGIN: Caption Input Section */}
<div className="flex items-center gap-3 py-4" data-purpose="caption-input-container">
{/* User Avatar */}
<div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-slate-200 border border-slate-200">
<svg className="w-full h-full text-slate-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
</div>
{/* Textarea / Input */}
<input className="w-full bg-transparent border-none text-[13.5px] text-gray-800 placeholder-gray-400 focus:ring-0 px-0 py-1" placeholder="Escreva uma legenda..." type="text" />
</div>
{/* END: Caption Input Section */}
{/* BEGIN: Publishing Settings Options */}
<div className="bg-white rounded-xl border border-[#edf1f7] divide-y divide-[#edf1f7] overflow-hidden text-[13px]" data-purpose="publishing-options">
{/* Option: Marcar pessoas */}
<div className="flex items-center justify-between px-3.5 py-3 hover:bg-slate-50 transition cursor-pointer">
<div className="flex items-center gap-2.5 text-gray-800 font-medium">
{/* User / Tag Icon */}
<svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<span className="">Marcar pessoas</span>
</div>
<div className="flex items-center gap-1.5 text-gray-400">
<span className="text-xs text-gray-500">Adicionar</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
{/* Option: Adicionar local */}
<div className="flex items-center justify-between px-3.5 py-3 hover:bg-slate-50 transition cursor-pointer">
<div className="flex items-center gap-2.5 text-gray-800 font-medium">
{/* Pin Icon */}
<svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<span className="">Adicionar local</span>
</div>
<div className="flex items-center gap-1.5 text-gray-400">
<span className="text-xs text-gray-500">Adicionar</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
{/* Option: Público */}
<div className="flex items-center justify-between px-3.5 py-3 hover:bg-slate-50 transition cursor-pointer">
<div className="flex items-center gap-2.5 text-gray-800 font-medium">
{/* Globe Icon */}
<svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="10" strokeWidth="1.8"></circle>
<path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<span className="">Público</span>
</div>
<div className="flex items-center gap-1.5 text-gray-400">
<span className="text-xs text-gray-500">Todos</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
{/* Option: Grupo */}
<div className="flex items-center justify-between px-3.5 py-3 hover:bg-slate-50 transition cursor-pointer">
<div className="flex items-center gap-2.5 text-gray-800 font-medium">
{/* Group / Grid Layout Icon */}
<svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
<rect height="7" rx="1.5" width="7" x="3" y="3"></rect>
<rect height="7" rx="1.5" width="7" x="14" y="3"></rect>
<rect height="7" rx="1.5" width="7" x="14" y="14"></rect>
<rect height="7" rx="1.5" width="7" x="3" y="14"></rect>
</svg>
<span className="">Grupo</span>
</div>
<div className="flex items-center gap-1.5 text-gray-400">
<span className="text-xs text-gray-500">Nenhum</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
{/* END: Publishing Settings Options */}
{/* BEGIN: Modal Footer */}
<footer className="flex items-center justify-between pt-5 mt-auto">
<span className="text-xs text-gray-400 font-normal">0/2.200</span>
<button className="bg-[#dff199] hover:bg-[#d2ea82] transition-colors text-slate-800 text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm" data-purpose="submit-post-button" type="button">
        Compartilhar
      </button>
</footer>
{/* END: Modal Footer */}
</div>
{/* END: Modal Container */}
    </div>
  )
}
