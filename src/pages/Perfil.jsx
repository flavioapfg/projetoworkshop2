import { useNavigate } from 'react-router-dom'

export default function Perfil() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#f1f4f9] text-slate-900 min-h-screen antialiased flex flex-col">
      {/* BEGIN: TopNavigation */}
<header className="w-full bg-transparent px-8 py-5 flex items-center justify-between" data-purpose="top-navigation">
<div className="flex items-center gap-3">
{/* Back Button */}
<button aria-label="Voltar" className="p-1.5 -ml-1.5 text-slate-800 hover:text-black transition-colors rounded-full hover:bg-slate-200/50" type="button" onClick={() => navigate('/home')}>
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
<path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<h1 className="text-base font-semibold text-slate-900 tracking-tight">Meu perfil</h1>
</div>
</header>
{/* END: TopNavigation */}
{/* BEGIN: MainContent */}
<main className="flex-1 w-full max-w-[624px] mx-auto px-4 pb-16 pt-1">
{/* BEGIN: ProfileHeaderSection */}
<section className="relative w-full" data-purpose="profile-header">
{/* Cover Banner Image */}
<div className="w-full h-[152px] rounded-[22px] overflow-hidden bg-slate-200 shadow-sm">
<img alt="Atleta corredor largando no bloco de partida em pista de atletismo" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDics8IW8r5WRY9yoeqo0g1nuAwp00vJLn7vY0cNbJ_EFC1rPGDgTm8D9wpHvbU9-Un4vDiy_6l5o5qr2CrCgmtzGiwewJZcz6bBQaPuQIjNZi7iAAwFZZ5M6XXdZFnsBm5MH4_PNTgUME-bqBSPA7I6ZAEVmleCrwsmeogcjBnz3JeFTmBfA8CRsOAgCpq-65p6nbfl_NhGkddYEy6CGRjt669np-DIGcpmNwT2blGRSaZ_PqoAoSSUQ" />
</div>
{/* Avatar Overlay */}
<div className="relative -mt-11 ml-2 inline-block">
<div className="w-[74px] h-[74px] rounded-full overflow-hidden border-[3px] border-[#f1f4f9] bg-white shadow-sm">
<img alt="Marcos Vinícius" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKUrDgfFx7t8r7e5MDvRBEH5VpV1b7NhM1xsZU8uG1TNtRufZa5eCXvvUpzLW_7J3hzQBFk0K-7N8VJswiPgbwEgVvciiCPEPtPWW70Uwnt9r1hBRCuOuC_uJrMt65iT_Rdl1aHUATkzkWp4Vti8of4h9njBkjXtvGNfz_htP00cVxDe5W9R4tYspxRVTjD01ewU9V08D1dxIOTCTUW7g8hPky3cNCoLQ-6-2Joo-60yphNz9tCK3mBA" />
</div>
</div>
{/* User Bio & Metadata */}
<div className="mt-2.5 px-0.5" data-purpose="user-details">
<h2 className="text-[21px] font-bold text-slate-950 tracking-tight leading-tight">Marcos Vinícius</h2>
<p className="text-[13px] text-slate-500 font-normal mt-0.5">
          @marcos_v · São Paulo, SP
        </p>
<p className="text-[13px] text-slate-700 mt-2.5 font-normal leading-relaxed">
          Corrida, comida de verdade e rotina leve. Um dia bom por vez.
        </p>
</div>
{/* Stats Counters */}
<div className="flex items-center gap-7 mt-4 px-0.5 text-left" data-purpose="user-statistics">
<div className="flex flex-col">
<span className="text-[15px] font-bold text-slate-950 leading-none">148</span>
<span className="text-[12px] text-slate-500 mt-1">seguidores</span>
</div>
<div className="flex flex-col">
<span className="text-[15px] font-bold text-slate-950 leading-none">203</span>
<span className="text-[12px] text-slate-500 mt-1">seguindo</span>
</div>
<div className="flex flex-col">
<span className="text-[15px] font-bold text-slate-950 leading-none">2</span>
<span className="text-[12px] text-slate-500 mt-1">publicações</span>
</div>
</div>
{/* Action Buttons */}
<div className="grid grid-cols-2 gap-3.5 mt-5" data-purpose="action-buttons">
<button className="w-full py-2.5 px-4 bg-[#e5ff65] hover:bg-[#d9f54e] text-slate-950 text-[13px] font-semibold rounded-xl text-center transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5ff65] focus:ring-offset-2" type="button">
          Editar perfil
        </button>
<button className="w-full py-2.5 px-4 bg-[#dbe2ee] hover:bg-[#cfd7e5] text-slate-800 text-[13px] font-medium rounded-xl text-center transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" type="button">
          Meus grupos
        </button>
</div>
</section>
{/* END: ProfileHeaderSection */}
{/* BEGIN: TabsNavigation */}
<nav className="mt-8 border-b border-transparent flex items-center gap-6 text-[13px]" data-purpose="profile-navigation-tabs">
<div className="relative pb-2">
<button className="font-semibold text-slate-950 hover:text-black" type="button">
          Publicações
        </button>
{/* Active Tab Underline Indicator */}
<div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#e5ff65] rounded-full"></div>
</div>
<button className="pb-2 text-slate-500 hover:text-slate-800 font-medium transition-colors" type="button">
        Salvos
      </button>
<button className="pb-2 text-slate-500 hover:text-slate-800 font-medium transition-colors" type="button">
        Grupos
      </button>
<button className="pb-2 text-slate-500 hover:text-slate-800 font-medium transition-colors" type="button">
        Sobre
      </button>
</nav>
{/* END: TabsNavigation */}
{/* BEGIN: PublicationsGrid */}
<section className="mt-4 grid grid-cols-2 gap-3.5" data-purpose="posts-grid">
{/* Post 1: Running Workout */}
<article className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm group bg-slate-200 cursor-pointer">
<img alt="Corredor amarrando o cadarço do tênis no asfalto da cidade" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJdpIKljRu0bbKa-TKCCbSMDrEvlNT0K4o6xIIZds8guiKWSW0sneYwGT2Pd_YRDRDZH0FpWY4Ojra2Sv3WzrDY0eAvdU9V-y6F8vUc60rl41C9f0HwEviFA7p0-K8SG1bXaKbDFdK19l55QXfgpFhU5Kp5VplBMpSZ7l8VPal6nfOnuckE-aLW-z7iaiQvK350hgzEGVCdn16pjsp5TNp12PqzYsv0OYxcGpcdWdl1v4GjFhD7yegkg" />
</article>
{/* Post 2: Healthy Acai Bowl */}
<article className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm group bg-slate-200 cursor-pointer">
<img alt="Bowl nutritivo com açaí, frutas frescas, sementes e suco verde" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAalr0mimYxXjsdxR3oSHBfoL5JM843pNmoIAGGnEs9zDG9Yd2Oy8IvMPKpqQvrHdGhLPIjP1DstoG2bs38GyW3DKh7wTLlHNKOd2i3KcEEhcQU_5VxIMLhR3y5lCyCpYmdAGD4V7uDTvdU1P2Bdomi-C0w3LFQO3Qqvhp60lhaj7AG8yjbcLO8XZrDkiHkPK6PBf94KFuosSaeCfg6FY7dUSfXUgV7-1T9neowvcLwHpLhD3vnQkbK9Q" />
</article>
</section>
{/* END: PublicationsGrid */}
</main>
{/* END: MainContent */}
    </div>
  )
}
