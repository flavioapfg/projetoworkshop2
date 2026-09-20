import { useNav } from '../shell/NavigationContext.jsx'
import { CREATE_STORY_COVER, FEED_STORIES, ME } from '../data/mock.js'

function activateKey(handler) {
  return (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handler()
    }
  }
}

export default function Home() {
  const { go, openSheet, openStory, resetStack, setAvatarMenuOpen } = useNav()

  function openFeedStory(item) {
    openStory({
      id: item.id,
      imageUrl: item.imageUrl,
      time: item.time,
      user: { name: item.name, handle: item.handle, avatarUrl: item.avatarUrl },
      slides: [
        {
          id: `${item.id}-1`,
          imageUrl: item.imageUrl,
          user: { name: item.name, handle: item.handle, avatarUrl: item.avatarUrl },
          time: item.time,
        },
      ],
      queue: FEED_STORIES,
    })
  }

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
<input className="w-full pl-9 pr-4 py-2 bg-white border border-[#D5D8E4] rounded-full text-xs sm:text-sm text-neutral-heading placeholder-neutral-muted focus:outline-none focus:ring-2 focus:ring-brand-lima focus:border-neutral-heading/40 transition shadow-none" placeholder="O que deseja fazer de bom hoje?" type="text" readOnly onFocus={() => go('search')} onClick={() => go('search')} />
</div>
{/* Highlight circle button next to search */}
<button type="button" className="w-9 h-9 rounded-full bg-brand-lima shrink-0 flex items-center justify-center text-neutral-heading hover:bg-brand-lima-hover transition shadow-sm" title="Explorar" onClick={() => go('search')}>
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
<button type="button" className="p-2 text-neutral-body hover:text-neutral-heading hover:bg-white/60 rounded-full transition" title="Criar" onClick={() => openSheet('create')}>
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
</button>
{/* Notifications */}
<button type="button" className="relative p-2 text-neutral-body hover:text-neutral-heading hover:bg-white/60 rounded-full transition" title="Notificações" onClick={() => openSheet('notifications')}>
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
</svg>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-lima rounded-full ring-2 ring-[#ECEDF5]"></span>
</button>
{/* User Profile Avatar (Marcos Vinícius) */}
<button type="button" className="w-9 h-9 rounded-full overflow-hidden border border-[#D5D8E4] shrink-0 block hover:ring-2 hover:ring-brand-lima transition relative" title={ME.name} onClick={() => setAvatarMenuOpen(true)}>
<img alt="Marcos Vinícius" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-dQQ54Nb_Qnt7FyL4JYshLCxSQk3eFDDas-Dsibf8nrOYh5Dxr5Qe2M5CLH75b_y5eLMpHJNJ_kc4eQMuPVGjhwlAc5WWcRxP3pJ0cg10iYNcn_HdSG_QCuOBmSiDgMj0kW8kMYFroc2lh8lr8bgzTXqdIknd4FC2NNOOMLnFvtdSHnIESZZBibQA5fHnSUFBLQXuCttGka_NFhVqR3uCuq2Z7BIRiVBiwm_9nGdZtcBRlduKO5F3ag" />
</button>
</div>
</div>
</header>
{/* END: Global Header */}
{/* PLACEHOLDER_TRUNCATED_FOR_PAYLOAD — use local file .push-chunks/invoke-01.json for full push */}
    </div>
  )
}
