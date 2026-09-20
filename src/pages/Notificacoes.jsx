import { useNavigate } from 'react-router-dom'

export default function Notificacoes() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#E9ECEF] text-slate-800 relative min-h-screen select-none">
      {/* BEGIN: BlurredBackgroundFeed */}
{/* Contexto do fundo simulando o dashboard do Gooday desfocado e escurecido */}

{/* END: BlurredBackgroundFeed */}
{/* BEGIN: ModalOverlay */}
{/* Overlay escuro/translúcido suave com alinhamento central */}
<div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
{/* BEGIN: NotificationCard */}
<div className="bg-white w-full max-w-[500px] rounded-[24px] shadow-2xl overflow-hidden flex flex-col transition-all duration-300 transform scale-100" data-purpose="notification-modal">
{/* BEGIN: ModalHeader */}
<div className="px-7 pt-6 pb-2 flex items-center justify-between">
<h2 className="text-[19px] font-bold text-gray-900 tracking-tight">Notificações</h2>
{/* Botão Fechar */}
<button aria-label="Fechar" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-colors text-sm font-medium" type="button" onClick={() => navigate('/home')}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
{/* END: ModalHeader */}
{/* BEGIN: ActionHeader */}
<div className="px-7 pt-1 pb-3">
<button className="text-xs font-semibold text-[#68850E] hover:underline focus:outline-none" type="button">
          Marcar todas como lidas
        </button>
</div>
{/* END: ActionHeader */}
{/* BEGIN: ModalContent */}
<div className="overflow-y-auto max-h-[75vh] flex flex-col divide-y divide-transparent">
{/* BEGIN: SectionToday */}
<section aria-labelledby="section-today-title" className="pb-2">
{/* Título da Seção HOJE */}
<div className="px-7 py-2">
<span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase" id="section-today-title">
              HOJE
            </span>
</div>
{/* Bloco com fundo suave verde-limão claro para itens recentes não lidos */}
<div className="bg-[#F6FCE5]/85 space-y-0.5 py-1">
{/* Item 1: Renata Silva */}
<div className="px-7 py-3 flex items-center gap-3.5 hover:bg-[#EEF9D2]/70 transition-colors cursor-pointer">
<div className="relative shrink-0">
<img alt="Renata Silva" className="w-11 h-11 rounded-full object-cover border border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEB53nX1uZvQbTTIPUuB-G2bU6fNKtZkXb8v2QCFXaAQfWeIve2h5uLB92RL2bno6JZCpG6QLReQsuFk3JqmJesgb5CbSLhckq_TIvEt0Ncy_9zc5ewGJr4oFzx_oITfPYyOJ_E8l0wIbAd3r5mL4xFJSSsfRtD4BSMMPcSwnhHlnsrt7Y2vpIYTsUkyF6uEmIhXbKlDYag4ult8u3gWMrFsy89lK8RUNslmECj2o17XTQPofge7aTPQ" />
</div>
<div className="flex-1 min-w-0 pr-2">
<p className="text-[13px] text-gray-800 leading-snug">
<strong className="font-semibold text-gray-900">Renata Silva</strong> curtiu sua publicação sobre suco verde
                </p>
<span className="text-[11px] text-gray-400 font-normal mt-0.5 block">12 min</span>
</div>
</div>
{/* Item 2: Bruno Mendes com Botão Seguir */}
<div className="px-7 py-3 flex items-center justify-between gap-3 hover:bg-[#EEF9D2]/70 transition-colors">
<div className="flex items-center gap-3.5 min-w-0">
<img alt="Bruno Mendes" className="w-11 h-11 rounded-full object-cover shrink-0 border border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjV988x4-eAsk5wL23_jm-67swIPbDnarQ-U-4Szn94jhJFB1O8iqXF3mlL3kwbr3ujHbZWBiNhjId0OXEdIkYt-W8n74aCAbH4N_4AMcdWmoJTMN6h9pqYkryfrRekYxM1wRZ6DDTFnmyTb1icPne2-rsWBaw_e2feFxc6_WhMShM6kMVmEEB21sjlbJhMVI73wDyIb8f6gaGOa0akKuCHO-WOGKp3cQqZAYoO-lWFTqEBjXcLFdnEw" />
<div className="min-w-0 pr-1">
<p className="text-[13px] text-gray-800 leading-snug">
<strong className="font-semibold text-gray-900">Bruno Mendes</strong> começou a seguir você
                  </p>
<span className="text-[11px] text-gray-400 font-normal mt-0.5 block">1 h</span>
</div>
</div>
<button className="shrink-0 bg-[#E7FE8E] hover:bg-[#DCFA70] text-[#243303] text-xs font-semibold px-4 py-2 rounded-full shadow-xs transition active:scale-95 whitespace-nowrap" type="button">
                Seguir de volta
              </button>
</div>
{/* Item 3: Tiago Souza */}
<div className="px-7 py-3 flex items-center gap-3.5 hover:bg-[#EEF9D2]/70 transition-colors cursor-pointer">
<img alt="Tiago Souza" className="w-11 h-11 rounded-full object-cover shrink-0 border border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf341JsykTwUZPs6ocT6-88vJG3ZccVuKQVmvGoIlifnBX1YKlmqW9FUIT5MqPQj_-MCaqgTwlQBrBpJ959vBt8hqxyeINfFl3stVaEWMX5qdnAXv6r8Hzgi8cUdbpkN-xiq2b3o8fL4bWd7FCgzZBYx5lsnu4K1t_2uBspcsIn_ScV--oLeKMGId_dcvY0R6YfwGCMbt4utog7O3Cl6u4NkPJbeFczYlzC2qCfYl312qBnVAbdVuHeA" />
<div className="flex-1 min-w-0">
<p className="text-[13px] text-gray-800 leading-snug">
<strong className="font-semibold text-gray-900">Tiago Souza</strong> mencionou você em um comentário
                </p>
<span className="text-[11px] text-gray-400 font-normal mt-0.5 block">3 h</span>
</div>
</div>
</div>
</section>
{/* END: SectionToday */}
{/* BEGIN: SectionThisWeek */}
<section aria-labelledby="section-week-title" className="pt-2 pb-5">
{/* Título da Seção ESTA SEMANA */}
<div className="px-7 py-2">
<span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase" id="section-week-title">
              ESTA SEMANA
            </span>
</div>
<div className="space-y-1">
{/* Item 4: Júlia Andrade com Botão Ver Grupo */}
<div className="px-7 py-3 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3.5 min-w-0">
<img alt="Júlia Andrade" className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-100 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA1dOt5mT8_z8wPBXHmSH9WevLbZIvD_WRkS3SJxQi0ZuVLkmmyYiSGYOVe7tpY_OE2jkzEnoVH71xMhweofipmjkFmhbQ7wYQOqfhOwIs_JxRn5iNWfJGXuaGnhpxKMMSBR83Oxswxotu-5fdAWGma13SjVzbzRQFZ3BJzuJfORYG5BGZxizYbvHDtyuF2M1vzsPTgTSjr8omImUbKV1cdvuz0kqFSHOG3x2GajoGqQjL2bi68UatEw" />
<div className="min-w-0 pr-1">
<p className="text-[13px] text-gray-800 leading-snug">
<strong className="font-semibold text-gray-900">Júlia Andrade</strong> aprovou sua entrada em Corrida 5K
                  </p>
<span className="text-[11px] text-gray-400 font-normal mt-0.5 block">ter</span>
</div>
</div>
<button className="shrink-0 bg-[#E7FE8E] hover:bg-[#DCFA70] text-[#243303] text-xs font-semibold px-4 py-2 rounded-full shadow-xs transition active:scale-95 whitespace-nowrap" type="button">
                Ver grupo
              </button>
</div>
{/* Item 5: Camila Ferreira */}
<div className="px-7 py-3 flex items-center gap-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
<img alt="Camila Ferreira" className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-100 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHB_o8U1WKbd1NmOpjWFMS--HWprCwoRVGvV-iONKI7M33gbLbHgfH236H6IXzoGMTfLcjLcqiDKyquJwojNhmwkD8SoeJDTE-LejTnwcimwbFJL-E8R0Dw7ESq4i-zVisqsB0jwBeVk8qNdeHmW6D5rvQFCkShtFr6kS59WTRmghYNd6e4RyGM6sAZANVnspMVjbIVM3TLXVgMcvGqzLd8TuPZrWFON-q0HPPnCYF1notbQiYvDys9w" />
<div className="flex-1 min-w-0">
<p className="text-[13px] text-gray-800 leading-snug">
<strong className="font-semibold text-gray-900">Camila Ferreira</strong> comentou: "vamos marcar aquele pedal"
                </p>
<span className="text-[11px] text-gray-400 font-normal mt-0.5 block">seg</span>
</div>
</div>
{/* Item 6: Marina Rocha com Botão Aceitar */}
<div className="px-7 py-3 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3.5 min-w-0">
<img alt="Marina Rocha" className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-100 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwUEDr6YExOiVaFnPBKK9MpTBZ_36njpU_c4rgnj6XckhZtp7LL6Es1WWPnnR5CM9eKDVvagiY5G0EK8PWxyTgpJNS722TqK3O1U5-xaHoNLBX1KAdjHBMDMvR81egodHx8Md6Iuqgx47ky6TVqWW2vBfdImD3sTdAHF47xeRyWuk5Zwq0czcWlRn4uU2qRGBeodVY_AmN9yIgONF_VvOCPLFoe6_WwA98-hWDopC2yj-qxjyT8DxdqQ" />
<div className="min-w-0 pr-1">
<p className="text-[13px] text-gray-800 leading-snug">
<strong className="font-semibold text-gray-900">Marina Rocha</strong> convidou você para Vida Natural
                  </p>
<span className="text-[11px] text-gray-400 font-normal mt-0.5 block">seg</span>
</div>
</div>
<button className="shrink-0 bg-[#E7FE8E] hover:bg-[#DCFA70] text-[#243303] text-xs font-semibold px-5 py-2 rounded-full shadow-xs transition active:scale-95 whitespace-nowrap" type="button">
                Aceitar
              </button>
</div>
</div>
</section>
{/* END: SectionThisWeek */}
</div>
{/* END: ModalContent */}
</div>
{/* END: NotificationCard */}
</div>
{/* END: ModalOverlay */}
    </div>
  )
}
