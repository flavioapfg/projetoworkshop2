export default function Configuracoes() {
  return (
    <div className="bg-[#EAEBF3] text-gray-900 min-h-screen flex flex-col antialiased">
      {/* BEGIN: MainHeader */}
<header className="w-full bg-white h-16 px-8 flex items-center border-b border-transparent shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-4">
{/* Back button link */}
<a aria-label="Voltar" className="text-gray-900 hover:text-gray-600 transition-colors p-1" href="/home">
<svg className="w-5 h-5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
{/* Page title */}
<h1 className="text-lg font-bold text-gray-900 tracking-tight">Configurações</h1>
</div>
</header>
{/* END: MainHeader */}
{/* BEGIN: MainContent */}
<main className="flex-1 w-full max-w-[560px] mx-auto pt-10 pb-16 px-4 flex flex-col gap-5">
{/* BEGIN: UserProfileCard */}
{/* Profile overview card containing avatar, full name, and handle */}
<section className="bg-white rounded-[20px] px-6 py-5 flex items-center gap-4 shadow-sm border border-black/[0.02]" data-purpose="user-profile-card">
<div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 ring-2 ring-transparent">
<img alt="Avatar de Marcos Vinícius" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOzn3Hb6h6fNwsaAk3b2HZF3EL90lGlb_N5gWfa68VhiauZ0B5tPtISQpU4YxBGagocBQC4akPKua0ifqsHIxiRq1T5reJGaiWjUxs4C1LFsT2JCt6nn4vaMPtcGOuCt3nN_WIdWTCLZrIrHQ1nsjw7ykgL-NIb-NhRp42Rz_Rmmzx0xFqcKTfl9QWYhrca-MCGJNUWFcfE5vgrkRk_yF1efKnNObR32gAKqDL2QRE0XSRt5nTph-Nmw" />
</div>
<div className="flex flex-col">
<h2 className="text-base font-bold text-gray-900 leading-snug">Marcos Vinícius</h2>
<span className="text-sm text-gray-500 font-normal">@marcos_v</span>
</div>
</section>
{/* END: UserProfileCard */}
{/* BEGIN: AccountSettingsCard */}
{/* Grouped account options for email and password management */}
<section className="bg-white rounded-[20px] shadow-sm border border-black/[0.02] overflow-hidden flex flex-col" data-purpose="account-settings">
{/* Option: Alterar e-mail */}
<a className="px-6 py-4 flex items-center justify-between hover:bg-gray-50/60 transition-colors group" href="#">
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-900 group-hover:text-black">Alterar e-mail</span>
<span className="text-xs text-gray-500 mt-0.5">marcos.v@email.com</span>
</div>
<div className="text-gray-400 group-hover:text-gray-600 transition-colors">
<svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</a>
{/* Subtle inner divider */}
<div className="h-[1px] bg-[#F1F3F9] mx-6"></div>
{/* Option: Alterar senha */}
<a className="px-6 py-4 flex items-center justify-between hover:bg-gray-50/60 transition-colors group" href="#">
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-900 group-hover:text-black">Alterar senha</span>
<span className="text-xs text-gray-500 mt-0.5 tracking-widest font-mono">••••••••</span>
</div>
<div className="text-gray-400 group-hover:text-gray-600 transition-colors">
<svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</a>
</section>
{/* END: AccountSettingsCard */}
{/* BEGIN: LogoutCard */}
{/* Standalone destructive action card */}
<section data-purpose="logout-section">
<button className="w-full bg-white rounded-[20px] px-6 py-4 shadow-sm border border-black/[0.02] text-left hover:bg-red-50/40 transition-colors" type="button">
<span className="text-sm font-medium text-[#F43F5E] hover:text-[#E11D48] transition-colors">
          Sair da conta
        </span>
</button>
</section>
{/* END: LogoutCard */}
</main>
{/* END: MainContent */}
    </div>
  )
}
