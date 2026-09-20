export default function Home() {
  return (
    <div className="bg-[#ECEDF5] text-neutral-body font-sans antialiased min-h-screen flex flex-col selection:bg-brand-lima selection:text-neutral-heading">
      {/* BEGIN: Global Header matching exact prototype */}
<header className="sticky top-0 z-40 w-full bg-[#ECEDF5]/90 backdrop-blur-md border-b border-[#D5D8E4]" data-purpose="global-header">
<div className="max-w-[1520px] mx-auto px-4 lg:px-7 h-16 flex items-center justify-between gap-4">
{/* Left: Logo & Search */}
<div className="flex items-center gap-4 flex-1 max-w-xl">
{/* Logo Gooday with black text and lime dot */}
<a className="flex items-center gap-1 text-2xl font-bold tracking-tight text-[#12161C] select-none shrink-0" data-purpose="brand-logo" href="/home">
<span>Gooday</span>
<span className="w-2.5 h-2.5 rounded-full bg-brand-lima inline-block ml-0.5"></span>
</a>
{/* Search Bar with pill style and green circular accessory button */}
<div className="flex items-center gap-2 w-full max-w-md">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-muted">
<svg className="w-4 h-4 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<input className="w-full pl-9 pr-4 py-2 bg-white border border-[#D5D8E4] rounded-full text-xs sm:text-sm text-neutral-heading placeholder-neutral-muted focus:outline-none focus:ring-2 focus:ring-brand-lima focus:border-neutral-heading/40 transition shadow-none" placeholder="O que deseja fazer de bom hoje?" type="text" />
</div>
{/* Highlight circle button next to search */}
<button className="w-9 h-9 rounded-full bg-brand-lima shrink-0 flex items-center justify-center text-neutral-heading hover:bg-brand-lima-hover transition shadow-sm" title="Explorar">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
</svg>
</button>
</div>
</div>
{/* Center Motivational Subtitle Badge */}
<div className="hidden xl:flex items-center justify-center gap-2 text-xs font-medium text-neutral-body" data-purpose="motivational-badge">
<span className="text-sm">🌱</span>
<span className="text-[#2A313C]">Respeite sua mente e trate seu corpo bem.</span>
</div>
{/* Right: Actions & User Avatar */}
<div className="flex items-center gap-3 justify-end shrink-0" data-purpose="header-actions">
{/* Create / Pen icon */}
<button className="p-2 text-neutral-body hover:text-neutral-heading hover:bg-white/60 rounded-full transition" title="Criar">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</button>
{/* Notifications */}
<button className="relative p-2 text-neutral-body hover:text-neutral-heading hover:bg-white/60 rounded-full transition" title="Notificações">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-lima rounded-full ring-2 ring-[#ECEDF5]"></span>
</button>
{/* User Profile Avatar (Marcos Vinícius) */}
<a className="w-9 h-9 rounded-full overflow-hidden border border-[#D5D8E4] shrink-0 block hover:ring-2 hover:ring-brand-lima transition" href="/perfil" title="Marcos Vinícius">
<img alt="Marcos Vinícius" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-dQQ54Nb_Qnt7FyL4JYshLCxSQk3eFDDas-Dsibf8nrOYh5Dxr5Qe2M5CLH75b_y5eLMpHJNJ_kc4eQMuPVGjhwlAc5WWcRxP3pJ0cg10iYNcn_HdSG_QCuOBmSiDgMj0kW8kMYFroc2lh8lr8bgzTXqdIknd4FC2NNOOMLnFvtdSHnIESZZBibQA5fHnSUFBLQXuCttGka_NFhVqR3uCuq2Z7BIRiVBiwm_9nGdZtcBRlduKO5F3ag" />
</a>
</div>
</div>
</header>
{/* END: Global Header */}
{/* BEGIN: Main Layout */}
<div className="max-w-[1520px] mx-auto px-4 lg:px-7 py-5 flex-1 w-full flex items-start gap-6">
{/* BEGIN: Left Navigation Sidebar */}
<aside className="hidden md:block w-52 shrink-0 sticky top-20" data-purpose="left-sidebar">
<nav aria-label="Navegação Principal" className="space-y-1">
{/* Início (Active Pill Lime) */}
<a className="flex items-center gap-3.5 px-4 py-2.5 rounded-full bg-brand-lima text-[#12161C] font-bold text-sm shadow-sm transition" href="/home">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
</svg>
<span>Início</span>
</a>
{/* Buscar */}
<a className="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-neutral-body hover:bg-white/70 hover:text-neutral-heading font-medium text-sm transition" href="/buscar">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Buscar</span>
</a>
{/* Mensagens with Badge */}
<a className="flex items-center justify-between px-4 py-2.5 rounded-full text-neutral-body hover:bg-white/70 hover:text-neutral-heading font-medium text-sm transition" href="/mensagens">
<div className="flex items-center gap-3.5">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Mensagens</span>
</div>
<span className="text-[11px] font-bold px-1.5 py-0.2 rounded-full bg-[#12161C] text-white">2</span>
</a>
{/* Criar */}
<a className="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-neutral-body hover:bg-white/70 hover:text-neutral-heading font-medium text-sm transition" href="/criar">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Criar</span>
</a>
{/* Grupos */}
<a className="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-neutral-body hover:bg-white/70 hover:text-neutral-heading font-medium text-sm transition" href="#">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Grupos</span>
</a>
{/* Perfil */}
<a className="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-neutral-body hover:bg-white/70 hover:text-neutral-heading font-medium text-sm transition" href="/perfil">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Perfil</span>
</a>
{/* Configurações */}
<a className="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-neutral-body hover:bg-white/70 hover:text-neutral-heading font-medium text-sm transition" href="/configuracoes">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Configurações</span>
</a>
</nav>
</aside>
{/* END: Left Navigation Sidebar */}
{/* BEGIN: Center & Right Content Area */}
<div className="flex-1 min-w-0 space-y-6">
{/* BEGIN: Vertical Stories Carousel (Exact prototype look: tall cards 105x160px with full-bleed photos & avatar badges) */}
<section aria-label="Stories da Comunidade" className="relative group" data-purpose="vertical-stories-carousel">
<div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1 pt-0.5 scroll-smooth">
{/* Story 1: Você (Create Story) */}
<div className="relative w-[105px] h-[160px] rounded-2xl overflow-hidden shrink-0 cursor-pointer group/story shadow-sm border border-[#D5D8E4]">
<img alt="Seu story" className="w-full h-full object-cover brightness-[0.75] group-hover/story:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiXtZb6McexKad-T6S_ZjaIt_AyUEiuhkb9RN6A5cvdCkPa4-GMA-uQCWINtrJMdGyQZcqF_gMyEUhCZKL0TVsNHTlaFFebFUFbek5h4G2rWIEJrz7UQvcwAtE-zqWEuQUdNIC7lXT47Qcor6LCiYCsRdd_EVNMmxKChmeUpr1qut7eQNuF8-vMF923kMqM7Y86robj0LFxtBWTD22KnXHaOCILc8xu-8j_YsmuUubALQti4aQD0FDSA" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
{/* Center/Bottom + button */}
<div className="absolute inset-0 flex flex-col items-center justify-end pb-3">
<div className="w-8 h-8 rounded-full bg-brand-lima text-neutral-heading flex items-center justify-center font-bold text-lg shadow mb-1 ring-2 ring-white">
                +
              </div>
<span className="text-white text-xs font-semibold">Você</span>
</div>
</div>
{/* Story 2: Bruno Mendes */}
<div className="relative w-[105px] h-[160px] rounded-2xl overflow-hidden shrink-0 cursor-pointer group/story shadow-sm border border-[#D5D8E4]">
<img alt="Bruno Mendes" className="w-full h-full object-cover group-hover/story:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnLE48ussCu7ilJ08qy5_jJzjV_KKlJwT8j6XweByOQL4yw7uyPtnQwAwXCvFpOVXq-reneWM-U1kbKP1g1M8ZQZ3g5cl2hPSuxKabgU9khc8nzdYfnMIb5iE9hzn3FrAFt3JxByVIfGMP2huXJ8MIP6gZZxa68p50Ul79zDK2VAnQKI-qxl_Xsc_X9CPHY_fJY4kc62_bG8tnA1y-G38nx7AnGYbuWLCXaWEAA0LOTYQkQS-A4Kbuhw" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
{/* Ring Avatar & Name at bottom */}
<div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center px-1">
<div className="w-8 h-8 rounded-full story-ring-gradient p-[2px] shadow mb-1">
<img alt="@bruno" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYBLgRqVxtqzK2eLqXLFPDhl799ifAIJP85ZDDLVNyi82L-VMny3iCGdygomlSMGi4_Ra9dkbq8ZdR0qxTpnfMs0Tl9_m_ZUiV8k_OoKYSoFlWDa5qgGnKv_7FZZOQUsYWAmMw_G69NIWEEQGjlFtc9R0mlXht0DnvC62FCqU-1mrIz9zawP04cDD3yM8Ouo05EgwAsLAKroXZyZQr8Hq_VBc-v9DalDGYzbsAYXThoYIHjldPsE7RBg" />
</div>
<span className="text-white text-[11px] font-medium tracking-tight truncate w-full text-center">@bruno</span>
</div>
</div>
{/* Story 3: Renata Silva */}
<div className="relative w-[105px] h-[160px] rounded-2xl overflow-hidden shrink-0 cursor-pointer group/story shadow-sm border border-[#D5D8E4]">
<img alt="Renata Silva" className="w-full h-full object-cover group-hover/story:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnODJyhdMxwP-wsXs878ZBKkqxMwnHADSmCQdXwj5jT5ZZgWIaqYUmFWKOVqNkPOBfNu_PUJptveQZS0_K4zKQGajGBfqIok-KJFXZr8EzThhqAJsKPaccufPQP-8yXs7ekv02cLDr_Bpry9Vh-qsEmw-c82gYBT2AqIrmdCZKV1hEN80ifPGR46gbOu8Kgdf8k2nFDIj3H_9Mk1VFU-HkdssBOY3edZCca5-UATi4Pooae7CD92GTRg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center px-1">
<div className="w-8 h-8 rounded-full story-ring-gradient p-[2px] shadow mb-1">
<img alt="@renata" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRkBILKK6h6LkaEdV-QccBIZnP8hGm-HIQ86dkcuHW2bVyVxmoBw1BDndW7e13bxmGjII4vZEae14YzDj6pl2SqMkMd71OgguFRmYH4SuN3_AvfJY70u_qkn-BaOFHm_BiGBhVj-E-jm11H-Zl24rJ0X4vhYsvLZvhl2UTUF3Oy5yQgU4YmM02M1UtLmq1btK_x3p50UR9bKbCypTP8MIgh5nAh68hmIqaOLuFwq9LAYYwfT3oD_DwlA" />
</div>
<span className="text-white text-[11px] font-medium tracking-tight truncate w-full text-center">@renata</span>
</div>
</div>
{/* Story 4: Nicole Bueno */}
<div className="relative w-[105px] h-[160px] rounded-2xl overflow-hidden shrink-0 cursor-pointer group/story shadow-sm border border-[#D5D8E4]">
<img alt="Nicole Bueno" className="w-full h-full object-cover group-hover/story:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlCpfXPUBtErkEwtnz0S4m3BzYkl95W37ktewLBvN9gYmZrU4NpctN8RCVEKrAcTJe4biqv23B-5yhvzqfSM8cb_LsE-njxcrvzpY1Tw7XM9urpYVikrJBptQbuBTjOiFpA9-y1sHhNKdh-mTc8t_FRFpkd_1TCrFuOTV_xn1OhKtJKoixKWa4FQzdQYY3WUiFvv2qLSnu6Fq5zBlbe8GTH6whyFUNsDv0-W-gICk0Q3n8eZH-z8I06g" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center px-1">
<div className="w-8 h-8 rounded-full story-ring-gradient p-[2px] shadow mb-1">
<img alt="@nicole" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiARLItxxkxV41PFsMj45vvFKknGMs25x2chpfdDSPl_5bY_0E0kEoVT8k3kZoR-iMT6SlTNe_RwQZGPcvmHCQ4NdVIaok0qNb1UQR0reMD3tP2JvUeRSaXpgeS2IS5HapVXKSaWy__FBtL5LWZo8O5M3TR1AfEwtKrbvIeitUO0vVv9ic2xFUBGUYXr3Nej6l-B7NgPK-uVc9GzFpx87CqO647gq347d7dr10BHA9h33mbj_wPXaxMQ" />
</div>
<span className="text-white text-[11px] font-medium tracking-tight truncate w-full text-center">@nicole</span>
</div>
</div>
{/* Story 5: Tiago Souza */}
<div className="relative w-[105px] h-[160px] rounded-2xl overflow-hidden shrink-0 cursor-pointer group/story shadow-sm border border-[#D5D8E4]">
<img alt="Tiago Souza" className="w-full h-full object-cover group-hover/story:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfOYfd7xko48sOX1NrKuzSVPA61kbf8X-Rq5-x3b6pDnUeVZCnkeg-Bunckor8ywAsTnbyh9iOkARoAc-zACUmxMZTaes9-Iqvdw0lYrFhM-nPTUvihB4_1ohyj8COCxcwASFVMJw7Nq_W-iiQgetKpCFqEuWPzqJyNtrip-gJm5e3YhvOj_RQzWvEcfmS8DySBRSb3Rl7Zhfq0kbw6q0XRzf2nbyhKTDXTiKYEX73sgrsidZcKlIzrA" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center px-1">
<div className="w-8 h-8 rounded-full story-ring-gradient p-[2px] shadow mb-1">
<img alt="@tiago" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfOYfd7xko48sOX1NrKuzSVPA61kbf8X-Rq5-x3b6pDnUeVZCnkeg-Bunckor8ywAsTnbyh9iOkARoAc-zACUmxMZTaes9-Iqvdw0lYrFhM-nPTUvihB4_1ohyj8COCxcwASFVMJw7Nq_W-iiQgetKpCFqEuWPzqJyNtrip-gJm5e3YhvOj_RQzWvEcfmS8DySBRSb3Rl7Zhfq0kbw6q0XRzf2nbyhKTDXTiKYEX73sgrsidZcKlIzrA" />
</div>
<span className="text-white text-[11px] font-medium tracking-tight truncate w-full text-center">@tiago</span>
</div>
</div>
{/* Story 6: Lidiane Costa */}
<div className="relative w-[105px] h-[160px] rounded-2xl overflow-hidden shrink-0 cursor-pointer group/story shadow-sm border border-[#D5D8E4]">
<img alt="Lidiane Costa" className="w-full h-full object-cover group-hover/story:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJb-ydMK5nge19R40ew1U5w3bsL78s4GOih8uDR5FjGyF8rKivFO2rQtRoJOk2t2RkN2RjhGyyEVNqzS9QjkFqk-RB-myV2HxpZnO922x0Wj5azfkL4lJnWH61zgLfImI30Hv32e1P_6z61yZ3qSk1slzwN3TbBfUIqhaEXCEzMWmL30SE1Eb0yg9ITdlTQ__fIT8DZXRGKV_la1Ky2m6zD92uwSYJCr78-yoLzdHY8feXuwbM7nKTrA" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center px-1">
<div className="w-8 h-8 rounded-full story-ring-gradient p-[2px] shadow mb-1">
<img alt="@lidiane" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBero_x5-AOYwAVYfoZZU9APr0uE6DEW9qBvnRyjtgqwLcIwubomOzvgIRuhK8eOM3fW4QPNBUhVPSonbQVZtKvT3SAm6bJnU5vSIVMqPpAB6_q3_-ejp9DXvmyfTSXBBbBLJrCc20EuS11jaIawGgHfRw_s7TarYiBgF0bH_QZ4tD3uQHKMApWSc7RB817j7rVdBwyS7u8AIXmLxm7u-VSbHU1vKA_TuLKD_O-AhLNNlrGSTMZqDzJRA" />
</div>
<span className="text-white text-[11px] font-medium tracking-tight truncate w-full text-center">@lidiane</span>
</div>
</div>
{/* Story 7: Pedro Lima */}
<div className="relative w-[105px] h-[160px] rounded-2xl overflow-hidden shrink-0 cursor-pointer group/story shadow-sm border border-[#D5D8E4]">
<img alt="Pedro Lima" className="w-full h-full object-cover group-hover/story:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_GYbyhNNhiu5FTMqfpPrniJ5sR8Nju2wpc9_5VVErZyny1_2L62fpiqKWH4zhLPaMQUF-8Mhaiotj_fBkaZ2CrcyQlTtY9WcRUKdJ8lM9pNfpJ-39s5SkdFlP9XFFOepqHO7kpkAAptaDKkJOvz9qeFxNnmy7uDXknGvli7kCw6zMWTF-_wMUCOahuHumtcO2fiqVnez8wWHxbrKMnmWN1Jf0SWzlEp_Qesw4Ai1q2EXPSPFvVJLtrQ" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center px-1">
<div className="w-8 h-8 rounded-full story-ring-gradient p-[2px] shadow mb-1">
<img alt="@pedro" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAybB26m3zRHfQ3JzClgeUruFv2RFbLE51NMBA9Ifms1ILhQTTaJ8dM-ctu91J97Y4Fl2xlonBiMOL7rThBpzqeUoMDiE3GTyOtWGZqvo57yXVMVrGfTNX2abQpjDLRMtJNsJpBxOss00DdGt-sr9JR49BKgUgI-qdDpdayq7tQmmAd_H7KX0TL1o6vEYcSE8r0HCJ1XZec_VRuSVET1DJRkt2dtIsBqpwNCas3ZAnzsPBPN1DJbk_U-Q" />
</div>
<span className="text-white text-[11px] font-medium tracking-tight truncate w-full text-center">@pedro</span>
</div>
</div>
{/* Story 8: Marina Rocha */}
<div className="relative w-[105px] h-[160px] rounded-2xl overflow-hidden shrink-0 cursor-pointer group/story shadow-sm border border-[#D5D8E4]">
<img alt="Marina Rocha" className="w-full h-full object-cover group-hover/story:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe2NkXwC3eQyoVQ-m5akD7i_ha7HN04wNjMe5wJTzGTb1GWod7EzejNU7yS6MxmeRK5djnorI9sUDW1VnoHHUPMAzzDZJZDO4wSExa-MQaCqxtSLWowSffb5UW9zGORFPuQOppiR2NTEupyiYXnOs5BGedTZTDQVyYl6v-UoBBuj79dWTr7uDvqkyvP-ju6GB-mSv_yJFwbkotCl7m-AU7Cwfc0p9q0M67dLyDh-P3WiWqNlklYoFDeQ" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center px-1">
<div className="w-8 h-8 rounded-full story-ring-gradient p-[2px] shadow mb-1">
<img alt="@marina" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAty2qV_7Esul_nzJDfC83G2mgoR7ZT6uh2CKCqC1NsC-f4bpLTp8rfwQvxGNhDrxzD4W4srvBD5L9yljLV4SP3DNOIigq4nMbr4W5KGXphNTcJyVeBJ6ioEOu-68n9uG3MvVz_L4U_0YALjTRKc9cilbg8dWHWrHIb7JkWe-5H5lMq85TJcimum7yQUKW_cYxJxqPh9enRO1rYkZdWB9vsUuT0s1dWUNexyb-K2YmUR6lCbaddgPhgKQ" />
</div>
<span className="text-white text-[11px] font-medium tracking-tight truncate w-full text-center">@marina</span>
</div>
</div>
{/* Story 9: Camila Ferreira */}
<div className="relative w-[105px] h-[160px] rounded-2xl overflow-hidden shrink-0 cursor-pointer group/story shadow-sm border border-[#D5D8E4]">
<img alt="Camila Ferreira" className="w-full h-full object-cover group-hover/story:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPkpccCAcnvW_Ut7nCxgm1BLcbwFBIrs3yGhy037CfGnfFP0GmsrqIpoOqFi4s7KV2pgUt2BUUTjmLcWGCGMvt_oDy45dJ6zsv-ODT3ZmBo0AB9W1GqlcEAF_5U4RKzPTnN1k4hpz-sM08Hb0ygHtIFjVgmmh205CVKnCGVLjL0AvSW6hNZ40bGAHjnaJNIe7qBATtVtapOF9D02DURsTtPF0YyMZRB915Texu1kpcWKhYPpos19P3qA" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center px-1">
<div className="w-8 h-8 rounded-full story-ring-gradient p-[2px] shadow mb-1">
<img alt="@camila" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDynl4mSATRPfJTp1LWskAGTGRQYHjbMY-XbkEiUY9v6kwqOinIM2rnug21NVoVsqGStYRcyppwJ9Fm3VQ4sXoUoOeVTDVI0eqsdeEHxkfGxkvKqtA9PMLZEEcLoqUb4x-eB04DVDIuXwjeX3-X37vMjBedyKRqAMwTeSjirylV2rFLVALd7Yi0g8I0khw27rCPY4RIEjER5hI9TRclLy4we8DzNe5vpSrHyWC2O_E7hlbDjoOE__kO0A" />
</div>
<span className="text-white text-[11px] font-medium tracking-tight truncate w-full text-center">@camila</span>
</div>
</div>
</div>
</section>
{/* END: Vertical Stories Carousel */}
{/* BEGIN: 2 Columns Content Grid (Feed ~58% | Communities Grid ~42%) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/* ==================== LEFT COLUMN: FEED (~58%) ==================== */}
<div className="lg:col-span-7 space-y-6" data-purpose="feed-column">
{/* Post 1: Bruna Carla */}
<article className="bg-white rounded-xl2 border border-[#D5D8E4] p-5 shadow-sm" data-purpose="feed-post-card">
{/* Header */}
<div className="flex items-center justify-between mb-3.5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-[#D5D8E4] shrink-0">
<img alt="Bruna Carla" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq1lNuBn9JKa4d8syy1dXu_8LEutgvEwIZNrQE2mq7ecvaoeAtLNIKxy8L26W4RfkpP68uCyzjIweLlfmeBPBb5g1ZQiRji3DE_AHZmyNUUoze2qqOKFqmWgf6scBRJRJyDzMd2KT7_60s3nfp0e-gZhxikPTtxMNF1oDptMzU8IYACCUKbYSXciYvy-9s3rWMGghVbVDgVezXbAjvj9bTaK2KpZWmokSdNMyJQLwkU8UumUt59uyofA" />
</div>
<div>
<div className="flex items-center gap-1.5 flex-wrap">
<span className="text-sm font-bold text-[#12161C]">Bruna Carla</span>
<span className="text-xs text-neutral-muted">@bruna_carla</span>
<span className="text-[11px] font-medium bg-[#ECEDF5] text-[#2A313C] px-2 py-0.5 rounded-full border border-[#D5D8E4]/60 ml-1">
                      Sucos Naturais
                    </span>
<span className="text-xs text-neutral-muted">• há 2 min</span>
</div>
</div>
</div>
{/* Options (...) */}
<button className="text-neutral-muted hover:text-neutral-heading p-1 rounded-full transition" title="Mais opções">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
{/* Content text */}
<p className="text-sm text-[#12161C] leading-relaxed mb-3">
              Hoje foi o dia daquele batido natural pós-corrida! Mistura de espinafre, maçã verde, gengibre e hortelã. Energia pura pra começar a semana no foco! 🏃‍♀️✨
            </p>
{/* Tags */}
<div className="flex flex-wrap gap-1.5 mb-3.5">
<span className="text-xs font-semibold text-[#546500] hover:underline cursor-pointer">#natural</span>
<span className="text-xs font-semibold text-[#546500] hover:underline cursor-pointer">#sucosnaturais</span>
<span className="text-xs font-semibold text-[#546500] hover:underline cursor-pointer">#rotina</span>
<span className="text-xs font-semibold text-[#546500] hover:underline cursor-pointer">#vidasaudavel</span>
</div>
{/* Media Image (Bottles of natural juice & fruits on wooden table) */}
<div className="rounded-xl overflow-hidden mb-3.5 border border-[#E8EAF2] bg-[#ECEDF5]">
<img alt="Batidos e sucos naturais com frutas frescas" className="w-full h-80 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDynl4mSATRPfJTp1LWskAGTGRQYHjbMY-XbkEiUY9v6kwqOinIM2rnug21NVoVsqGStYRcyppwJ9Fm3VQ4sXoUoOeVTDVI0eqsdeEHxkfGxkvKqtA9PMLZEEcLoqUb4x-eB04DVDIuXwjeX3-X37vMjBedyKRqAMwTeSjirylV2rFLVALd7Yi0g8I0khw27rCPY4RIEjER5hI9TRclLy4we8DzNe5vpSrHyWC2O_E7hlbDjoOE__kO0A" />
</div>
{/* Social Reactions Bar */}
<div className="flex items-center justify-between pt-1 border-t border-[#E8EAF2] text-neutral-muted">
<div className="flex items-center gap-6">
{/* Like / Heart Button */}
<button className="flex items-center gap-1.5 text-xs font-semibold hover:text-red-500 transition group py-1">
<svg className="w-5 h-5 text-neutral-muted group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<span className="text-[#12161C]">128</span>
</button>
{/* Comments Button */}
<button className="flex items-center gap-1.5 text-xs font-semibold hover:text-neutral-heading transition py-1">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<span className="text-[#12161C]">24</span>
</button>
{/* Share Button */}
<button className="flex items-center gap-1.5 text-xs font-semibold hover:text-neutral-heading transition py-1">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<span>Compartilhar</span>
</button>
</div>
{/* Bookmark / Save */}
<button className="p-1 hover:text-neutral-heading transition" title="Salvar">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</button>
</div>
{/* Comment Preview Box (#F7F8FC) */}
<div className="mt-3.5 pt-3 border-t border-[#E8EAF2] flex items-start gap-2.5">
<div className="w-6 h-6 rounded-full overflow-hidden shrink-0 mt-0.5">
<img alt="Renata Silva" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnODJyhdMxwP-wsXs878ZBKkqxMwnHADSmCQdXwj5jT5ZZgWIaqYUmFWKOVqNkPOBfNu_PUJptveQZS0_K4zKQGajGBfqIok-KJFXZr8EzThhqAJsKPaccufPQP-8yXs7ekv02cLDr_Bpry9Vh-qsEmw-c82gYBT2AqIrmdCZKV1hEN80ifPGR46gbOu8Kgdf8k2nFDIj3H_9Mk1VFU-HkdssBOY3edZCca5-UATi4Pooae7CD92GTRg" />
</div>
<div className="bg-[#F7F8FC] px-3.5 py-2 rounded-xl text-xs flex-1 border border-[#E8EAF2]">
<span className="font-bold text-[#12161C]">@renata_silva:</span>
<span className="text-[#2A313C] ml-1">Ficou lindo demais! Vou testar a receita amanhã cedo!</span>
</div>
</div>
</article>
{/* Post 2: Tiago Souza */}
<article className="bg-white rounded-xl2 border border-[#D5D8E4] p-5 shadow-sm" data-purpose="feed-post-card">
{/* Header */}
<div className="flex items-center justify-between mb-3.5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-[#D5D8E4] shrink-0">
<img alt="Tiago Souza" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYBLgRqVxtqzK2eLqXLFPDhl799ifAIJP85ZDDLVNyi82L-VMny3iCGdygomlSMGi4_Ra9dkbq8ZdR0qxTpnfMs0Tl9_m_ZUiV8k_OoKYSoFlWDa5qgGnKv_7FZZOQUsYWAmMw_G69NIWEEQGjlFtc9R0mlXht0DnvC62FCqU-1mrIz9zawP04cDD3yM8Ouo05EgwAsLAKroXZyZQr8Hq_VBc-v9DalDGYzbsAYXThoYIHjldPsE7RBg" />
</div>
<div>
<div className="flex items-center gap-1.5 flex-wrap">
<span className="text-sm font-bold text-[#12161C]">Tiago Souza</span>
<span className="text-xs text-neutral-muted">@tiago_souza</span>
<span className="text-[11px] font-medium bg-[#ECEDF5] text-[#2A313C] px-2 py-0.5 rounded-full border border-[#D5D8E4]/60 ml-1">
                      Corrida 5K
                    </span>
<span className="text-xs text-neutral-muted">• há 4 horas</span>
</div>
</div>
</div>
{/* Options */}
<button className="text-neutral-muted hover:text-neutral-heading p-1 rounded-full transition" title="Mais opções">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
{/* Content text */}
<p className="text-sm text-[#12161C] leading-relaxed mb-3">
              5km concluídos antes das 7h da manhã. O grupo puxou o ritmo hoje e o pace foi o melhor do mês! Obrigado pelo suporte galera. 🔥⚡
            </p>
{/* Tags */}
<div className="flex flex-wrap gap-1.5 mb-3.5">
<span className="text-xs font-semibold text-[#546500] hover:underline cursor-pointer">#corrida</span>
<span className="text-xs font-semibold text-[#546500] hover:underline cursor-pointer">#5km</span>
<span className="text-xs font-semibold text-[#546500] hover:underline cursor-pointer">#superacao</span>
<span className="text-xs font-semibold text-[#546500] hover:underline cursor-pointer">#gooday</span>
</div>
{/* Media Image (Runners on sunny track) */}
<div className="rounded-xl overflow-hidden mb-3.5 border border-[#E8EAF2] bg-[#ECEDF5]">
<img alt="Corredores treinando em pista" className="w-full h-80 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPkpccCAcnvW_Ut7nCxgm1BLcbwFBIrs3yGhy037CfGnfFP0GmsrqIpoOqFi4s7KV2pgUt2BUUTjmLcWGCGMvt_oDy45dJ6zsv-ODT3ZmBo0AB9W1GqlcEAF_5U4RKzPTnN1k4hpz-sM08Hb0ygHtIFjVgmmh205CVKnCGVLjL0AvSW6hNZ40bGAHjnaJNIe7qBATtVtapOF9D02DURsTtPF0YyMZRB915Texu1kpcWKhYPpos19P3qA" />
</div>
{/* Social Reactions Bar */}
<div className="flex items-center justify-between pt-1 border-t border-[#E8EAF2] text-neutral-muted">
<div className="flex items-center gap-6">
<button className="flex items-center gap-1.5 text-xs font-semibold hover:text-red-500 transition group py-1">
<svg className="w-5 h-5 text-neutral-muted group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<span className="text-[#12161C]">89</span>
</button>
<button className="flex items-center gap-1.5 text-xs font-semibold hover:text-neutral-heading transition py-1">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<span className="text-[#12161C]">15</span>
</button>
<button className="flex items-center gap-1.5 text-xs font-semibold hover:text-neutral-heading transition py-1">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<span>Compartilhar</span>
</button>
</div>
<button className="p-1 hover:text-neutral-heading transition" title="Salvar">
<svg className="w-5 h-5 text-neutral-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</button>
</div>
</article>
</div>
{/* ==================== END LEFT COLUMN ==================== */}
{/* ==================== RIGHT COLUMN: COMMUNITIES 2-COL GRID (~42%) ==================== */}
{/* Exact replica of the community cards layout seen behind modal in reference images criar.png / notificacao.png */}
<div className="lg:col-span-5 space-y-4" data-purpose="communities-grid-column">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
{/* Card 1: Corrida para Iniciantes */}
<div className="bg-white rounded-xl2 border border-[#D5D8E4] overflow-hidden shadow-sm flex flex-col hover:border-neutral-muted transition group">
<div className="h-32 w-full overflow-hidden bg-[#ECEDF5] relative">
<img alt="Corrida para Iniciantes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_GYbyhNNhiu5FTMqfpPrniJ5sR8Nju2wpc9_5VVErZyny1_2L62fpiqKWH4zhLPaMQUF-8Mhaiotj_fBkaZ2CrcyQlTtY9WcRUKdJ8lM9pNfpJ-39s5SkdFlP9XFFOepqHO7kpkAAptaDKkJOvz9qeFxNnmy7uDXknGvli7kCw6zMWTF-_wMUCOahuHumtcO2fiqVnez8wWHxbrKMnmWN1Jf0SWzlEp_Qesw4Ai1q2EXPSPFvVJLtrQ" />
</div>
<div className="p-3.5 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-sm font-bold text-[#12161C] leading-snug">Corrida para Iniciantes</h3>
<div className="flex items-center gap-1.5 mt-2">
{/* Overlapping avatars */}
<div className="flex -space-x-1.5 overflow-hidden">
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYBLgRqVxtqzK2eLqXLFPDhl799ifAIJP85ZDDLVNyi82L-VMny3iCGdygomlSMGi4_Ra9dkbq8ZdR0qxTpnfMs0Tl9_m_ZUiV8k_OoKYSoFlWDa5qgGnKv_7FZZOQUsYWAmMw_G69NIWEEQGjlFtc9R0mlXht0DnvC62FCqU-1mrIz9zawP04cDD3yM8Ouo05EgwAsLAKroXZyZQr8Hq_VBc-v9DalDGYzbsAYXThoYIHjldPsE7RBg" />
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRkBILKK6h6LkaEdV-QccBIZnP8hGm-HIQ86dkcuHW2bVyVxmoBw1BDndW7e13bxmGjII4vZEae14YzDj6pl2SqMkMd71OgguFRmYH4SuN3_AvfJY70u_qkn-BaOFHm_BiGBhVj-E-jm11H-Zl24rJ0X4vhYsvLZvhl2UTUF3Oy5yQgU4YmM02M1UtLmq1btK_x3p50UR9bKbCypTP8MIgh5nAh68hmIqaOLuFwq9LAYYwfT3oD_DwlA" />
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAybB26m3zRHfQ3JzClgeUruFv2RFbLE51NMBA9Ifms1ILhQTTaJ8dM-ctu91J97Y4Fl2xlonBiMOL7rThBpzqeUoMDiE3GTyOtWGZqvo57yXVMVrGfTNX2abQpjDLRMtJNsJpBxOss00DdGt-sr9JR49BKgUgI-qdDpdayq7tQmmAd_H7KX0TL1o6vEYcSE8r0HCJ1XZec_VRuSVET1DJRkt2dtIsBqpwNCas3ZAnzsPBPN1DJbk_U-Q" />
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E8EAF2]">
<span className="text-[11px] font-medium text-neutral-muted">512 membros</span>
<button className="text-neutral-muted hover:text-neutral-heading p-1" title="Compartilhar">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
{/* Card 2: Ciclismo Urbano */}
<div className="bg-white rounded-xl2 border border-[#D5D8E4] overflow-hidden shadow-sm flex flex-col hover:border-neutral-muted transition group">
<div className="h-32 w-full overflow-hidden bg-[#ECEDF5] relative">
<img alt="Ciclismo Urbano" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfOYfd7xko48sOX1NrKuzSVPA61kbf8X-Rq5-x3b6pDnUeVZCnkeg-Bunckor8ywAsTnbyh9iOkARoAc-zACUmxMZTaes9-Iqvdw0lYrFhM-nPTUvihB4_1ohyj8COCxcwASFVMJw7Nq_W-iiQgetKpCFqEuWPzqJyNtrip-gJm5e3YhvOj_RQzWvEcfmS8DySBRSb3Rl7Zhfq0kbw6q0XRzf2nbyhKTDXTiKYEX73sgrsidZcKlIzrA" />
<span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#12161C]">
                  Público
                </span>
</div>
<div className="p-3.5 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-sm font-bold text-[#12161C] leading-snug">Ciclismo Urbano</h3>
<div className="flex items-center gap-1.5 mt-2">
<div className="flex -space-x-1.5 overflow-hidden">
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnLE48ussCu7ilJ08qy5_jJzjV_KKlJwT8j6XweByOQL4yw7uyPtnQwAwXCvFpOVXq-reneWM-U1kbKP1g1M8ZQZ3g5cl2hPSuxKabgU9khc8nzdYfnMIb5iE9hzn3FrAFt3JxByVIfGMP2huXJ8MIP6gZZxa68p50Ul79zDK2VAnQKI-qxl_Xsc_X9CPHY_fJY4kc62_bG8tnA1y-G38nx7AnGYbuWLCXaWEAA0LOTYQkQS-A4Kbuhw" />
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBero_x5-AOYwAVYfoZZU9APr0uE6DEW9qBvnRyjtgqwLcIwubomOzvgIRuhK8eOM3fW4QPNBUhVPSonbQVZtKvT3SAm6bJnU5vSIVMqPpAB6_q3_-ejp9DXvmyfTSXBBbBLJrCc20EuS11jaIawGgHfRw_s7TarYiBgF0bH_QZ4tD3uQHKMApWSc7RB817j7rVdBwyS7u8AIXmLxm7u-VSbHU1vKA_TuLKD_O-AhLNNlrGSTMZqDzJRA" />
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E8EAF2]">
<span className="text-[11px] font-medium text-neutral-muted">112 grupos • 975 membros</span>
<button className="text-neutral-muted hover:text-neutral-heading p-1" title="Compartilhar">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
{/* Card 3: Nutrição Consciente */}
<div className="bg-white rounded-xl2 border border-[#D5D8E4] overflow-hidden shadow-sm flex flex-col hover:border-neutral-muted transition group">
<div className="h-32 w-full overflow-hidden bg-[#ECEDF5] relative">
<img alt="Nutrição Consciente" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlCpfXPUBtErkEwtnz0S4m3BzYkl95W37ktewLBvN9gYmZrU4NpctN8RCVEKrAcTJe4biqv23B-5yhvzqfSM8cb_LsE-njxcrvzpY1Tw7XM9urpYVikrJBptQbuBTjOiFpA9-y1sHhNKdh-mTc8t_FRFpkd_1TCrFuOTV_xn1OhKtJKoixKWa4FQzdQYY3WUiFvv2qLSnu6Fq5zBlbe8GTH6whyFUNsDv0-W-gICk0Q3n8eZH-z8I06g" />
</div>
<div className="p-3.5 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-sm font-bold text-[#12161C] leading-snug">Nutrição Consciente</h3>
<div className="flex items-center gap-1.5 mt-2">
<div className="flex -space-x-1.5 overflow-hidden">
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiARLItxxkxV41PFsMj45vvFKknGMs25x2chpfdDSPl_5bY_0E0kEoVT8k3kZoR-iMT6SlTNe_RwQZGPcvmHCQ4NdVIaok0qNb1UQR0reMD3tP2JvUeRSaXpgeS2IS5HapVXKSaWy__FBtL5LWZo8O5M3TR1AfEwtKrbvIeitUO0vVv9ic2xFUBGUYXr3Nej6l-B7NgPK-uVc9GzFpx87CqO647gq347d7dr10BHA9h33mbj_wPXaxMQ" />
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnODJyhdMxwP-wsXs878ZBKkqxMwnHADSmCQdXwj5jT5ZZgWIaqYUmFWKOVqNkPOBfNu_PUJptveQZS0_K4zKQGajGBfqIok-KJFXZr8EzThhqAJsKPaccufPQP-8yXs7ekv02cLDr_Bpry9Vh-qsEmw-c82gYBT2AqIrmdCZKV1hEN80ifPGR46gbOu8Kgdf8k2nFDIj3H_9Mk1VFU-HkdssBOY3edZCca5-UATi4Pooae7CD92GTRg" />
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E8EAF2]">
<span className="text-[11px] font-medium text-neutral-muted">71 grupos • 396 membros</span>
<button className="text-neutral-muted hover:text-neutral-heading p-1" title="Compartilhar">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
{/* Card 4: Vida Natural */}
<div className="bg-white rounded-xl2 border border-[#D5D8E4] overflow-hidden shadow-sm flex flex-col hover:border-neutral-muted transition group">
<div className="h-32 w-full overflow-hidden bg-[#ECEDF5] relative">
<img alt="Vida Natural" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe2NkXwC3eQyoVQ-m5akD7i_ha7HN04wNjMe5wJTzGTb1GWod7EzejNU7yS6MxmeRK5djnorI9sUDW1VnoHHUPMAzzDZJZDO4wSExa-MQaCqxtSLWowSffb5UW9zGORFPuQOppiR2NTEupyiYXnOs5BGedTZTDQVyYl6v-UoBBuj79dWTr7uDvqkyvP-ju6GB-mSv_yJFwbkotCl7m-AU7Cwfc0p9q0M67dLyDh-P3WiWqNlklYoFDeQ" />
<span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#12161C]">
                  Público
                </span>
</div>
<div className="p-3.5 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-sm font-bold text-[#12161C] leading-snug">Vida Natural</h3>
<div className="flex items-center gap-1.5 mt-2">
<div className="flex -space-x-1.5 overflow-hidden">
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJb-ydMK5nge19R40ew1U5w3bsL78s4GOih8uDR5FjGyF8rKivFO2rQtRoJOk2t2RkN2RjhGyyEVNqzS9QjkFqk-RB-myV2HxpZnO922x0Wj5azfkL4lJnWH61zgLfImI30Hv32e1P_6z61yZ3qSk1slzwN3TbBfUIqhaEXCEzMWmL30SE1Eb0yg9ITdlTQ__fIT8DZXRGKV_la1Ky2m6zD92uwSYJCr78-yoLzdHY8feXuwbM7nKTrA" />
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRkBILKK6h6LkaEdV-QccBIZnP8hGm-HIQ86dkcuHW2bVyVxmoBw1BDndW7e13bxmGjII4vZEae14YzDj6pl2SqMkMd71OgguFRmYH4SuN3_AvfJY70u_qkn-BaOFHm_BiGBhVj-E-jm11H-Zl24rJ0X4vhYsvLZvhl2UTUF3Oy5yQgU4YmM02M1UtLmq1btK_x3p50UR9bKbCypTP8MIgh5nAh68hmIqaOLuFwq9LAYYwfT3oD_DwlA" />
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E8EAF2]">
<span className="text-[11px] font-medium text-neutral-muted">304 membros</span>
<button className="px-2.5 py-1 rounded-full bg-brand-lima text-xs font-bold text-[#12161C] hover:bg-brand-lima-hover transition">
                    Entrar
                  </button>
</div>
</div>
</div>
{/* Card 5: Treino Funcional */}
<div className="bg-white rounded-xl2 border border-[#D5D8E4] overflow-hidden shadow-sm flex flex-col hover:border-neutral-muted transition group">
<div className="h-32 w-full overflow-hidden bg-[#ECEDF5] relative">
<img alt="Treino Funcional" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAty2qV_7Esul_nzJDfC83G2mgoR7ZT6uh2CKCqC1NsC-f4bpLTp8rfwQvxGNhDrxzD4W4srvBD5L9yljLV4SP3DNOIigq4nMbr4W5KGXphNTcJyVeBJ6ioEOu-68n9uG3MvVz_L4U_0YALjTRKc9cilbg8dWHWrHIb7JkWe-5H5lMq85TJcimum7yQUKW_cYxJxqPh9enRO1rYkZdWB9vsUuT0s1dWUNexyb-K2YmUR6lCbaddgPhgKQ" />
<span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-brand-lima text-[10px] font-bold text-[#12161C]">
                  Participando
                </span>
</div>
<div className="p-3.5 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-sm font-bold text-[#12161C] leading-snug">Treino Funcional</h3>
<div className="flex items-center gap-1.5 mt-2">
<div className="flex -space-x-1.5 overflow-hidden">
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYBLgRqVxtqzK2eLqXLFPDhl799ifAIJP85ZDDLVNyi82L-VMny3iCGdygomlSMGi4_Ra9dkbq8ZdR0qxTpnfMs0Tl9_m_ZUiV8k_OoKYSoFlWDa5qgGnKv_7FZZOQUsYWAmMw_G69NIWEEQGjlFtc9R0mlXht0DnvC62FCqU-1mrIz9zawP04cDD3yM8Ouo05EgwAsLAKroXZyZQr8Hq_VBc-v9DalDGYzbsAYXThoYIHjldPsE7RBg" />
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnLE48ussCu7ilJ08qy5_jJzjV_KKlJwT8j6XweByOQL4yw7uyPtnQwAwXCvFpOVXq-reneWM-U1kbKP1g1M8ZQZ3g5cl2hPSuxKabgU9khc8nzdYfnMIb5iE9hzn3FrAFt3JxByVIfGMP2huXJ8MIP6gZZxa68p50Ul79zDK2VAnQKI-qxl_Xsc_X9CPHY_fJY4kc62_bG8tnA1y-G38nx7AnGYbuWLCXaWEAA0LOTYQkQS-A4Kbuhw" />
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E8EAF2]">
<span className="text-[11px] font-medium text-neutral-muted">428 membros</span>
<button className="text-neutral-muted hover:text-neutral-heading p-1" title="Compartilhar">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
{/* Card 6: Alimentação Saudável */}
<div className="bg-white rounded-xl2 border border-[#D5D8E4] overflow-hidden shadow-sm flex flex-col hover:border-neutral-muted transition group">
<div className="h-32 w-full overflow-hidden bg-[#ECEDF5] relative">
<img alt="Alimentação Saudável" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDynl4mSATRPfJTp1LWskAGTGRQYHjbMY-XbkEiUY9v6kwqOinIM2rnug21NVoVsqGStYRcyppwJ9Fm3VQ4sXoUoOeVTDVI0eqsdeEHxkfGxkvKqtA9PMLZEEcLoqUb4x-eB04DVDIuXwjeX3-X37vMjBedyKRqAMwTeSjirylV2rFLVALd7Yi0g8I0khw27rCPY4RIEjER5hI9TRclLy4we8DzNe5vpSrHyWC2O_E7hlbDjoOE__kO0A" />
<span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-neutral-muted">
                  Privado
                </span>
</div>
<div className="p-3.5 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-sm font-bold text-[#12161C] leading-snug">Alimentação Saudável</h3>
<div className="flex items-center gap-1.5 mt-2">
<div className="flex -space-x-1.5 overflow-hidden">
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiARLItxxkxV41PFsMj45vvFKknGMs25x2chpfdDSPl_5bY_0E0kEoVT8k3kZoR-iMT6SlTNe_RwQZGPcvmHCQ4NdVIaok0qNb1UQR0reMD3tP2JvUeRSaXpgeS2IS5HapVXKSaWy__FBtL5LWZo8O5M3TR1AfEwtKrbvIeitUO0vVv9ic2xFUBGUYXr3Nej6l-B7NgPK-uVc9GzFpx87CqO647gq347d7dr10BHA9h33mbj_wPXaxMQ" />
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnODJyhdMxwP-wsXs878ZBKkqxMwnHADSmCQdXwj5jT5ZZgWIaqYUmFWKOVqNkPOBfNu_PUJptveQZS0_K4zKQGajGBfqIok-KJFXZr8EzThhqAJsKPaccufPQP-8yXs7ekv02cLDr_Bpry9Vh-qsEmw-c82gYBT2AqIrmdCZKV1hEN80ifPGR46gbOu8Kgdf8k2nFDIj3H_9Mk1VFU-HkdssBOY3edZCca5-UATi4Pooae7CD92GTRg" />
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E8EAF2]">
<span className="text-[11px] font-medium text-neutral-muted">267 membros</span>
<button className="px-2.5 py-1 rounded-full bg-[#ECEDF5] border border-[#D5D8E4] text-xs font-bold text-[#12161C] hover:bg-brand-lima transition">
                    Pedir
                  </button>
</div>
</div>
</div>
</div>
</div>
{/* ==================== END RIGHT COLUMN ==================== */}
</div>
{/* END: 2 Columns Content Grid */}
</div>
{/* END: Center & Right Content Area */}
</div>
{/* END: Main Layout */}
{/* BEGIN: Mobile Bottom Bar */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#D5D8E4] px-6 py-2 flex items-center justify-between z-50">
<a className="p-2 text-[#12161C] flex flex-col items-center" href="/home">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
<span className="text-[10px] font-bold mt-0.5">Início</span>
</a>
<a className="p-2 text-neutral-muted hover:text-neutral-heading flex flex-col items-center" href="/buscar">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] mt-0.5">Buscar</span>
</a>
<a className="p-2 text-neutral-heading bg-brand-lima rounded-full -mt-4 shadow-md border-2 border-white flex items-center justify-center" href="/criar">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="p-2 text-neutral-muted hover:text-neutral-heading flex flex-col items-center" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] mt-0.5">Grupos</span>
</a>
<a className="p-2 text-neutral-muted hover:text-neutral-heading flex flex-col items-center" href="/perfil">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] mt-0.5">Perfil</span>
</a>
</nav>
{/* END: Mobile Bottom Bar */}
    </div>
  )
}
