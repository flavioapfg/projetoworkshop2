import { useNavigate } from 'react-router-dom'

export default function Mensagens() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#edf1f8] min-h-screen text-[#0e121b] font-sans antialiased selection:bg-[#d8fc3e] selection:text-black">
      {/* BEGIN: TopHeader */}
<header className="w-full bg-white border-b border-gray-100/80 px-6 sm:px-10 py-4 sticky top-0 z-20" data-purpose="page-header">
<div className="max-w-7xl mx-auto flex items-center">
{/* Back button and Title */}
<button aria-label="Voltar" className="inline-flex items-center gap-4 text-gray-800 hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 rounded-lg p-1" type="button" onClick={() => navigate('/home')}>
<svg aria-hidden="true" className="w-5 h-5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-base sm:text-lg font-bold tracking-tight text-gray-900">Mensagens</span>
</button>
</div>
</header>
{/* END: TopHeader */}
{/* BEGIN: MainContent */}
<main className="w-full py-6 px-4 sm:px-6" data-purpose="messages-list-wrapper">
{/* Messages Container */}
<div className="max-w-2xl mx-auto divide-y divide-gray-200/60" data-purpose="chat-conversations">
{/* Conversation Item: Renata Silva */}
<article className="flex items-center justify-between py-4 group hover:bg-white/40 px-2 rounded-xl transition-colors cursor-pointer" data-purpose="conversation-item">
<div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-4">
{/* Avatar with Online Status */}
<div className="relative flex-shrink-0">
<img alt="Avatar de Renata Silva" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPfMZUzVhc3ML2uKSn6zM2LEcdtuVfW75Y71JKIEk6cgythwu5xq03G4_G3Bx9myLceLK3Y3pEEF8xeTf8aZ8fe2KfspGew8uHj2XJbcRzHOeyfSB7m-sARvpTgrD0YRNyoNwlANaSOhU93INLbNOAMcuTntZa6a0_KBYfCfkTshKVrHzvX4mgqlaouFAzh7lqbgGXWoF-RtRK8ef3_xWaGmkWgHETIx9heja8FoEFAjKkdCesHbdSiw" />
<span className="absolute bottom-0 right-0 w-3 h-3 bg-[#10b981] border-2 border-white rounded-full" title="Online"></span>
</div>
{/* Message text details */}
<div className="min-w-0">
<h2 className="text-sm font-semibold text-gray-900 truncate">Renata Silva</h2>
<p className="text-xs sm:text-sm text-gray-500 font-normal truncate mt-0.5">Combinado então 💪</p>
</div>
</div>
{/* Meta info: Time and Unread Badge */}
<div className="flex flex-col items-end justify-center flex-shrink-0 gap-1.5 pl-2">
<time className="text-xs font-normal text-gray-400">08:16</time>
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#d8fc3e] text-black text-xs font-bold shadow-xs">2</span>
</div>
</article>
{/* Conversation Item: Tiago Souza */}
<article className="flex items-center justify-between py-4 group hover:bg-white/40 px-2 rounded-xl transition-colors cursor-pointer" data-purpose="conversation-item">
<div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-4">
{/* Avatar with Online Status */}
<div className="relative flex-shrink-0">
<img alt="Avatar de Tiago Souza" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW-zgcORSV78CJ2Hy3XJM1X9YDcCdeA113rZc6YicnDhsi9OyHJf4SQndTtyxM3OOpGGUvov0vgA6rfQuqMqrZAjkexx16bVod_xY15K2o0gr_i0Y4oREMoqajx71UoBAeH0RxjFzcovte-QVJl_oPvBH9M6mLP1z4O8rSncGxXhzWrbvbWxNrDOzElRIUgzdwOgFiW3pMueQi-E9zsxiHgv88oq3Y1uX2TcuMScfgy3VM6csAb7Lzvw" />
<span className="absolute bottom-0 right-0 w-3 h-3 bg-[#10b981] border-2 border-white rounded-full" title="Online"></span>
</div>
{/* Message text details */}
<div className="min-w-0">
<h2 className="text-sm font-semibold text-gray-900 truncate">Tiago Souza</h2>
<p className="text-xs sm:text-sm text-gray-500 font-normal truncate mt-0.5">Você: Monstro! Bora domingo?</p>
</div>
</div>
{/* Meta info: Time */}
<div className="flex flex-col items-end justify-center flex-shrink-0 gap-1.5 pl-2">
<time className="text-xs font-normal text-gray-400">07:02</time>
<span aria-hidden="true" className="w-5 h-5 invisible"></span>
</div>
</article>
{/* Conversation Item: Nicole Bueno */}
<article className="flex items-center justify-between py-4 group hover:bg-white/40 px-2 rounded-xl transition-colors cursor-pointer" data-purpose="conversation-item">
<div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-4">
{/* Avatar */}
<div className="relative flex-shrink-0">
<img alt="Avatar de Nicole Bueno" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDROYWlzsoda75popNYEXJMgVmlvZmO1rPOYRt-yxOVdy8Uaxx4s60x61ApUEADh8IMHEpNLKfPWK1bNJicco6gCN2LsUhc23Uo_8Qe2gdG41Mpv_tBL4xS8nGMd-0G0aMz9gI4vx6adnqrKOAtgxRMg6R99DSj4wSv8fdGW1xuwGIfj-SF_pPKD0Sc_8LrcUNBFZ8cHWab5mUXNpxv30mCOPrognR8q9_M1a7QgiK-xdJP-SQDGP5szQ" />
</div>
{/* Message text details */}
<div className="min-w-0">
<h2 className="text-sm font-semibold text-gray-900 truncate">Nicole Bueno</h2>
<p className="text-xs sm:text-sm text-gray-500 font-normal truncate mt-0.5">Você: Recebi, obrigada 🌱</p>
</div>
</div>
{/* Meta info: Time and Unread Badge */}
<div className="flex flex-col items-end justify-center flex-shrink-0 gap-1.5 pl-2">
<time className="text-xs font-normal text-gray-400">ter</time>
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#d8fc3e] text-black text-xs font-bold shadow-xs">1</span>
</div>
</article>
{/* Conversation Item: Bruno Mendes */}
<article className="flex items-center justify-between py-4 group hover:bg-white/40 px-2 rounded-xl transition-colors cursor-pointer" data-purpose="conversation-item">
<div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-4">
{/* Avatar */}
<div className="relative flex-shrink-0">
<img alt="Avatar de Bruno Mendes" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmJ3JwIwYQlAn-wqZlTON3zNHaacI7R8rPzwDrsAVpntndu4_sLnlhgt06luHT2xP5nokMMNxlHW5-XEvzqkUKDD-D6h1QfHXKAXwlEl_DRQt5jTuTA-ey0i6iGkX7XVlE5J7RsS-Yc693iQSVTFywtRFosNjPnZZxacoKFFSyJ5qdvn_9BhxSOX4C2zONAlqIoC0K3KhI-RRgTo_-lATka2TnFiDwq_ZuUC4zSRRfCLOWmGybd-tqkw" />
</div>
{/* Message text details */}
<div className="min-w-0">
<h2 className="text-sm font-semibold text-gray-900 truncate">Bruno Mendes</h2>
<p className="text-xs sm:text-sm text-gray-500 font-normal truncate mt-0.5">7h no ponto de sempre</p>
</div>
</div>
{/* Meta info: Time */}
<div className="flex flex-col items-end justify-center flex-shrink-0 gap-1.5 pl-2">
<time className="text-xs font-normal text-gray-400">seg</time>
<span aria-hidden="true" className="w-5 h-5 invisible"></span>
</div>
</article>
{/* Conversation Item: Júlia Andrade */}
<article className="flex items-center justify-between py-4 group hover:bg-white/40 px-2 rounded-xl transition-colors cursor-pointer" data-purpose="conversation-item">
<div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-4">
{/* Avatar with Online Status */}
<div className="relative flex-shrink-0">
<img alt="Avatar de Júlia Andrade" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ6rwj_fBVZIxFCgcCtQnVckl9LDqI0R-voH9pfP5pTbHL9LyoaUT03v_mCiCyIEh3bgJqwNNc3J0VG9wYpELK3MM4eCJcT4778tPGZ-OXqga-N4dil_UsNzX8Qq_EWK0mUWPrye1CvEKdsonHPrPlERU5mO6iyo8iTvbeaJVH9fHPdBRjUpXWeZlQVXSBYh1oApX0XKKJ8jWujGtIIKvZwTKzNnEzOqVU7XuuvZGKbiom-eEX7qGPkQ" />
<span className="absolute bottom-0 right-0 w-3 h-3 bg-[#10b981] border-2 border-white rounded-full" title="Online"></span>
</div>
{/* Message text details */}
<div className="min-w-0">
<h2 className="text-sm font-semibold text-gray-900 truncate">Júlia Andrade</h2>
<p className="text-xs sm:text-sm text-gray-500 font-normal truncate mt-0.5">Vamos treinar junto essa semana?</p>
</div>
</div>
{/* Meta info: Time and Unread Badge */}
<div className="flex flex-col items-end justify-center flex-shrink-0 gap-1.5 pl-2">
<time className="text-xs font-normal text-gray-400">09:31</time>
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#d8fc3e] text-black text-xs font-bold shadow-xs">3</span>
</div>
</article>
{/* Conversation Item: Lidiane Costa */}
<article className="flex items-center justify-between py-4 group hover:bg-white/40 px-2 rounded-xl transition-colors cursor-pointer" data-purpose="conversation-item">
<div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-4">
{/* Avatar */}
<div className="relative flex-shrink-0">
<img alt="Avatar de Lidiane Costa" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOhk85N11mLcRtFOnq5KUoVRt7D0CQ89w6hE8_Tb6yyk7aN1yyYENvsInGB2EwzEceruRMz7cfzk6Xg8wBzSXsA9b42sktRmlDu4R1BWtmrtfanPKFoKma3FOXqjTNtOhel2SQfn89ZaEikzJq9cRkhuZD_3CNJsgAmkXvIl0lcPTu0OGMKCcETP5Hw9XRZjJJSxWj0kWXvqS_XYDQo5q2-hFhDE4pq57VVGDqwKBaBCQTN4GdjsWlHA" />
</div>
{/* Message text details */}
<div className="min-w-0">
<h2 className="text-sm font-semibold text-gray-900 truncate">Lidiane Costa</h2>
<p className="text-xs sm:text-sm text-gray-500 font-normal truncate mt-0.5">Você: Vou estar lá</p>
</div>
</div>
{/* Meta info: Time */}
<div className="flex flex-col items-end justify-center flex-shrink-0 gap-1.5 pl-2">
<time className="text-xs font-normal text-gray-400">dom</time>
<span aria-hidden="true" className="w-5 h-5 invisible"></span>
</div>
</article>
{/* Conversation Item: Camila Ferreira */}
<article className="flex items-center justify-between py-4 group hover:bg-white/40 px-2 rounded-xl transition-colors cursor-pointer" data-purpose="conversation-item">
<div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-4">
{/* Avatar */}
<div className="relative flex-shrink-0">
<img alt="Avatar de Camila Ferreira" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRePxWYTq30w3Dj1J50trBQ0nmxrdXzDIBtjVrzOVVTZaNDlT5pr12PR1GEV3qfWYADTMkHsvbU40K3HHvydjIY5zkix-oSTiJ_tLEPq2QxkOl226okUnLNgVLAC5nc-gYimVZet7IYTYMJVlLW-flhD4EKuUh4Ug3hNI4f9JM6mvKN5_jetmBs5CHv7nooFe92PHxUQmftsn6oxRRqCdeqlGSCvweImied1tD8qne6ThJezSFq7rMMg" />
</div>
{/* Message text details */}
<div className="min-w-0">
<h2 className="text-sm font-semibold text-gray-900 truncate">Camila Ferreira</h2>
<p className="text-xs sm:text-sm text-gray-500 font-normal truncate mt-0.5">Adorei seu post do suco</p>
</div>
</div>
{/* Meta info: Time */}
<div className="flex flex-col items-end justify-center flex-shrink-0 gap-1.5 pl-2">
<time className="text-xs font-normal text-gray-400">sex</time>
<span aria-hidden="true" className="w-5 h-5 invisible"></span>
</div>
</article>
{/* Conversation Item: Marina Rocha */}
<article className="flex items-center justify-between py-4 group hover:bg-white/40 px-2 rounded-xl transition-colors cursor-pointer" data-purpose="conversation-item">
<div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-4">
{/* Avatar with Online Status */}
<div className="relative flex-shrink-0">
<img alt="Avatar de Marina Rocha" className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADkA7lOXilEoJlWqXB1P_k69dx-8jX-goMPMeKq4I68FqbItNiCIFAyk5nI-6T3YL6itFVj7k4_SefdqKVSgm9yc_7S5C8KRhuFuSQXFG-bDIMPV8YdN9nGKKcb7zoigytSJYrrkXt_bU7yYJFLS5aSUCkywNEq3Ayz_e7Pqmj85IZcLEPlXnGt3Afx5Nh1ZroN4Vuc-Nnl98JgTpcXrLFViZK5lOQTjwRmm9yKwyPz9UXnGEinF8nuA" />
<span className="absolute bottom-0 right-0 w-3 h-3 bg-[#10b981] border-2 border-white rounded-full" title="Online"></span>
</div>
{/* Message text details */}
<div className="min-w-0">
<h2 className="text-sm font-semibold text-gray-900 truncate">Marina Rocha</h2>
<p className="text-xs sm:text-sm text-gray-500 font-normal truncate mt-0.5">Bora! 17h?</p>
</div>
</div>
{/* Meta info: Time */}
<div className="flex flex-col items-end justify-center flex-shrink-0 gap-1.5 pl-2">
<time className="text-xs font-normal text-gray-400">11:12</time>
<span aria-hidden="true" className="w-5 h-5 invisible"></span>
</div>
</article>
</div>
</main>
{/* END: MainContent */}
    </div>
  )
}
