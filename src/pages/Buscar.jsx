import { useNavigate } from 'react-router-dom'

export default function Buscar() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#edf2f7] min-h-screen text-slate-800 antialiased flex flex-col">
      {/* BEGIN: TopHeader */}
<header className="w-full bg-white border-b border-[#edf2f7] px-8 py-4 flex items-center shadow-sm" data-purpose="page-header">
<div className="flex items-center gap-4 cursor-pointer group">
{/* Back arrow icon */}
<button aria-label="Voltar" className="text-slate-800 hover:text-slate-600 transition-colors focus:outline-none" type="button" onClick={() => navigate('/home')}>
<svg className="h-5 w-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
{/* Page Title */}
<h1 className="text-lg font-bold text-slate-900 tracking-tight">Buscar</h1>
</div>
</header>
{/* END: TopHeader */}
{/* BEGIN: MainContent */}
<main className="flex-1 w-full max-w-2xl mx-auto px-4 pt-8 pb-16" data-purpose="search-container">
{/* BEGIN: SearchBarSection */}
<section className="w-full" data-purpose="search-input-area">
<div className="relative w-full">
{/* Search input field */}
<div className="relative flex items-center">
<span className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-slate-500">
<svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<input className="w-full pl-12 pr-6 py-3.5 bg-white rounded-full border border-transparent shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all" id="main-search-input" placeholder="Pessoas, grupos e interesses" type="text" />
</div>
</div>
{/* Quick filter tags / chips */}
<div className="flex flex-wrap items-center gap-2 mt-4" data-purpose="quick-filter-chips">
<button className="px-5 py-1.5 bg-white rounded-full text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 border border-slate-100 transition-colors" type="button">
          corrida
        </button>
<button className="px-5 py-1.5 bg-white rounded-full text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 border border-slate-100 transition-colors" type="button">
          nutrição
        </button>
<button className="px-5 py-1.5 bg-white rounded-full text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 border border-slate-100 transition-colors" type="button">
          ciclismo urbano
        </button>
<button className="px-5 py-1.5 bg-white rounded-full text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 border border-slate-100 transition-colors" type="button">
          yoga
        </button>
</div>
</section>
{/* END: SearchBarSection */}
{/* BEGIN: PeopleResultsSection */}
<section className="mt-8" data-purpose="people-results">
{/* Section Title */}
<h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-1">
        PESSOAS
      </h2>
{/* People list items */}
<div className="space-y-4">
{/* Person 1: Bruna Carla */}
<div className="flex items-center gap-3.5 p-1 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer" data-purpose="person-item">
<img alt="Avatar de Bruna Carla" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3bwpT_3LwHzas1KzmtEILf9b2rx9NFo-j-xVdQEZ-8OkA2ERzElzyRwQsxNpYgx_56AlDdBe-M7yoMPolk4PFjXRVwwvtMSE9TyXXgalihP9ahJukAacgt0-x2-B6y8fAfz1ODmWp1yWiJosupq-xWxK15BbNcwHcz19HdzSTs6nmxJnFvQyHxM0KDeTxhPE_g9TiL_t-YJMMuIkkySL7nJfWmkH5AuecP2Xdx7UbBcurfi7gea2_Jg" />
<div>
<p className="text-sm font-semibold text-slate-900 leading-tight">Bruna Carla</p>
<p className="text-xs text-slate-500 mt-0.5">@bruna_carla · 3 interesses em comum</p>
</div>
</div>
{/* Person 2: Renata Silva */}
<div className="flex items-center gap-3.5 p-1 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer" data-purpose="person-item">
<img alt="Avatar de Renata Silva" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDncbtgMvsJIRvzayGBJX-1_b_PpdlZEAJ913CcHV4frR0x6Pmo5nL9RcroDiGj2gG87az-ttFno7vZkD-x5NHdOMgUiiNi5P6p_Dl44uOdjem682XUPQNtvYInWFy11_YKZzoeTqxnT4Ges5R-JWPfrtmKCyKaEIcic9FL8f8mzJm2hdg3fd7H76XuAUPqMUZk9rnHHgOR738CX2Dz6toPG0Z5yWW4XW5NWiNtIShaEnnNf8tU7dfezg" />
<div>
<p className="text-sm font-semibold text-slate-900 leading-tight">Renata Silva</p>
<p className="text-xs text-slate-500 mt-0.5">@renata_silva · 3 interesses em comum</p>
</div>
</div>
{/* Person 3: Lucas Marte */}
<div className="flex items-center gap-3.5 p-1 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer" data-purpose="person-item">
<img alt="Avatar de Lucas Marte" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoEYqXeIeK97nk8-3J9h7q-Tn4LFfF4vJws9NaHJCFlsy-1AXljjHpQCvNYLK6btFBq4cwobECE2pTNl_YpTTDaAYigdXyfYLAY8S2F5wmUDmlUFLhmG5-2sv5htcm-0xFVvxS7NzIpW2zZYcTcPomjeNZ_i0fBUPH350jM8u4IEBhzwlKKfODE7LizijTlaQh_kZSwfdsaiFdBEZW721CqjEHuJ0TEyvLjLuabawxJNHi0pX16MHnzA" />
<div>
<p className="text-sm font-semibold text-slate-900 leading-tight">Lucas Marte</p>
<p className="text-xs text-slate-500 mt-0.5">@lucas_marte · 3 interesses em comum</p>
</div>
</div>
{/* Person 4: Nicole Bueno */}
<div className="flex items-center gap-3.5 p-1 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer" data-purpose="person-item">
<img alt="Avatar de Nicole Bueno" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDherChygv4c7IOyW4xuqW8dXswJxwy77IZ_xSpR-AJMLzEx1gfFu9sjSqWWcX2L1cyiZQMtdAxaUoBmLeGs0j8T5YPT-lqnWfi99g57C9TxGg_kErKMjZnwF8dVh04lmyr8Wqp_jwKsdfIRFaSp1g0xH_ZMRfLA2OQbq_9dQkcZKOpweccKA3IkVO78oA-4LIKodvVRmoDnZyRW62A9DnDyy22e1h4jbmFRevdNmqZrut8lY-97GAUQw" />
<div>
<p className="text-sm font-semibold text-slate-900 leading-tight">Nicole Bueno</p>
<p className="text-xs text-slate-500 mt-0.5">@nicole_bueno · 3 interesses em comum</p>
</div>
</div>
{/* Person 5: Bruno Mendes */}
<div className="flex items-center gap-3.5 p-1 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer" data-purpose="person-item">
<img alt="Avatar de Bruno Mendes" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd6-1-EAw7FnaboBmvxlwe2HUT39glt_Z-3KKpUql7qOaZ3cLCSg9UlzHFEErC9L8oVCJNUyAIrbYXRwgfZeQuHYgkp_6tWNOXP_woLLzb3VE_kwws1R3QbVB85TnRBLC8SsiAYDLa83RM14kdfsJB28BJx37VgQRa6kkkAvyOz58BVq-W-q97xErresy8EZdxNMiQfY5xYZxDT-_GuzlAUk_yd8pmqrzlFUJdQQ4FH8FrY4vmOftXxg" />
<div>
<p className="text-sm font-semibold text-slate-900 leading-tight">Bruno Mendes</p>
<p className="text-xs text-slate-500 mt-0.5">@bruno_mendes · 3 interesses em comum</p>
</div>
</div>
{/* Person 6: Lidiane Costa */}
<div className="flex items-center gap-3.5 p-1 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer" data-purpose="person-item">
<img alt="Avatar de Lidiane Costa" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAygb3Zp_svtSAEXqYiDoZmAx7vzcXw1wwkK_QEB8weoDT8qfhGWhIhY8BQZauGbzcCIvfotgQobvToopLZAWSS64pUa3yhWl57ZCBTFe6soSPs0BJ2ezWagq1PKEnuZBFnwyqrSUt9D5zgDpAUDK5kT0JJAezRCqY2eEqlKQTafpdGDNb1A11nJqT18fjqz_fu9CdPS2KTkNe5VdFTrQBvHDIgQDi5YgTH5WXln-yt7L4GtayoijHFow" />
<div>
<p className="text-sm font-semibold text-slate-900 leading-tight">Lidiane Costa</p>
<p className="text-xs text-slate-500 mt-0.5">@lidiane_costa · 3 interesses em comum</p>
</div>
</div>
{/* Person 7: Tiago Souza */}
<div className="flex items-center gap-3.5 p-1 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer" data-purpose="person-item">
<img alt="Avatar de Tiago Souza" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnhbnmfu7k7vnoOimVHO1CDtalz4l33Ttr3TKRlVGUTvmAixyO9OkHtvHokjW7kM2pMyEJvX4qx9AV-kBWECXAgCrBJk3TNSeFBf2ByS0oh1tkwDHdFcekDpxja1khRQF6RD8UfhjTcDJKOo7EyxNMEF8iUBz8MucMfb5xL_oAZvVOEp1nQAkYblChdpZYdsxH3s94h1JFtfb486XIkSOJt5rBb_2YBiV6F32nEv16IHVqRytmhMD0sQ" />
<div>
<p className="text-sm font-semibold text-slate-900 leading-tight">Tiago Souza</p>
<p className="text-xs text-slate-500 mt-0.5">@tiago_souza · 3 interesses em comum</p>
</div>
</div>
{/* Person 8: Júlia Andrade */}
<div className="flex items-center gap-3.5 p-1 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer" data-purpose="person-item">
<img alt="Avatar de Júlia Andrade" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJG38o4ODZ6rUtt06nuaCLtEe7i3mCrMBXdpHMRu54_ZjZiA9nov-U0t1eS-Unb4woaFgy4BMEZMfEfxr0r5zoNJT9YBO9YFYojOEWGJhgq7SqDiV9uyyo_RQX8_laOgOudFfRJHy0wBe_FulYLNpnCQPpzQwFbama8r-WsrZZpaBU5PTNY2_g-f6HFtVqRCqLqCDN75gSQh4_6fo0QSqBjyy23cfKD_oSNiWE12XhEqhZYnchWMGLmg" />
<div>
<p className="text-sm font-semibold text-slate-900 leading-tight">Júlia Andrade</p>
<p className="text-xs text-slate-500 mt-0.5">@julia_andrade · 3 interesses em comum</p>
</div>
</div>
</div>
</section>
{/* END: PeopleResultsSection */}
{/* BEGIN: GroupsResultsSection */}
<section className="mt-8" data-purpose="groups-results">
{/* Section Title */}
<h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-1">
        GRUPOS
      </h2>
{/* Groups listing placeholder area */}
<div className="space-y-3"></div>
</section>
{/* END: GroupsResultsSection */}
</main>
{/* END: MainContent */}
    </div>
  )
}
