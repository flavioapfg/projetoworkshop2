import { useEffect, useRef, useState } from 'react'
import { FEED_STORIES, ME } from '../data/mock.js'
import { useNav } from '../shell/NavigationContext.jsx'

const SLIDE_MS = 5000
const REACTIONS = ['❤️', '👏', '🔥', '😍']

/** Viewer matching gooday_story_modal.html */
export default function StoryViewer() {
  const { story, closeStory, openStory } = useNav()
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const advancing = useRef(false)

  const slides =
    story?.slides ||
    [
      {
        id: '1',
        imageUrl: story?.imageUrl || ME.coverUrl,
        user: story?.user || ME,
        time: story?.time || 'agora',
      },
    ]
  const queue = story?.queue || FEED_STORIES
  const queueIndex = Math.max(
    0,
    queue.findIndex((s) => s.id === story?.id),
  )

  useEffect(() => {
    if (!story) return undefined
    setIndex(0)
    setProgress(0)
    advancing.current = false
  }, [story?.id])

  useEffect(() => {
    if (!story) return undefined
    advancing.current = false
    const start = Date.now()
    const tick = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / SLIDE_MS)
      setProgress(p)
      if (p >= 1 && !advancing.current) {
        advancing.current = true
        clearInterval(tick)
        advance()
      }
    }, 50)
    return () => clearInterval(tick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [story?.id, index])

  if (!story) return null

  const slide = slides[index] || slides[0]
  const user = slide.user || story.user || ME
  const time = slide.time || story.time || 'há pouco'

  function openQueueAt(i) {
    const next = queue[i]
    if (!next) {
      closeStory()
      return
    }
    openStory({
      id: next.id,
      imageUrl: next.imageUrl,
      time: next.time,
      user: { name: next.name, handle: next.handle, avatarUrl: next.avatarUrl },
      slides: [
        {
          id: `${next.id}-1`,
          imageUrl: next.imageUrl,
          user: { name: next.name, handle: next.handle, avatarUrl: next.avatarUrl },
          time: next.time,
        },
      ],
      queue,
    })
  }

  function advance() {
    if (index < slides.length - 1) {
      setIndex((i) => i + 1)
      setProgress(0)
      return
    }
    if (queueIndex < queue.length - 1) openQueueAt(queueIndex + 1)
    else closeStory()
  }

  function goPrev() {
    if (index > 0) {
      setIndex((i) => i - 1)
      setProgress(0)
      return
    }
    if (queueIndex > 0) openQueueAt(queueIndex - 1)
  }

  function goNext() {
    advance()
  }

  return (
    <div
      className="fixed inset-0 z-[80] bg-[#0a0c10]/80 backdrop-blur-md flex items-center justify-center select-none"
      data-purpose="story-modal-overlay"
    >
      <button type="button" aria-label="Fechar" className="absolute inset-0 cursor-default" onClick={closeStory} />

      <button
        type="button"
        aria-label="Story anterior"
        className="nav-arrow-btn hidden sm:flex absolute left-4 md:left-8 lg:left-16 xl:left-24 z-40 w-11 h-11 rounded-full items-center justify-center text-white/80 hover:text-white shadow-lg"
        data-purpose="nav-previous"
        onClick={(e) => {
          e.stopPropagation()
          goPrev()
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </svg>
      </button>

      <main
        className="relative w-full max-w-[420px] h-[92vh] max-h-[760px] rounded-[30px] overflow-hidden story-card-shadow flex flex-col justify-between mx-auto z-10"
        data-purpose="story-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 z-0 bg-[#1e232c]">
          <img alt="" className="w-full h-full object-cover object-center" src={slide.imageUrl} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none" />
        </div>

        <header className="relative z-20 px-4 pt-3.5 pb-2" data-purpose="story-header">
          <div className="flex items-center gap-1.5 w-full mb-3.5" data-purpose="progress-indicators">
            {slides.map((s, i) => (
              <div key={s.id} className="h-1 flex-1 bg-white/35 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-[width] duration-75"
                  style={{ width: `${i < index ? 100 : i === index ? progress * 100 : 0}%` }}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full ring-2 ring-white/90 overflow-hidden shrink-0 shadow-md">
                <img alt="" className="w-full h-full object-cover" src={user.avatarUrl || ME.avatarUrl} />
              </div>
              <div className="flex flex-col drop-shadow">
                <span className="text-sm font-semibold tracking-wide text-white leading-tight">
                  {user.name || ME.name}
                </span>
                <span className="text-xs text-white/75 font-normal">{time}</span>
              </div>
            </div>
            <button
              type="button"
              aria-label="Fechar Story"
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white/90 hover:text-white flex items-center justify-center transition"
              data-purpose="close-button"
              onClick={closeStory}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </button>
          </div>
        </header>

        <div className="relative z-10 flex-1 flex">
          <button type="button" className="w-1/3 h-full cursor-pointer" aria-label="Anterior" onClick={goPrev} />
          <button type="button" className="w-2/3 h-full cursor-pointer" aria-label="Próximo" onClick={goNext} />
        </div>

        <footer className="relative z-20 px-3.5 pb-4 pt-2" data-purpose="story-footer">
          <div className="flex items-center gap-2">
            <div className="relative flex-1 flex items-center">
              <input
                className="glass-input w-full h-11 pl-4 pr-10 text-xs sm:text-sm text-white placeholder-white/60 rounded-full focus:outline-none focus:ring-1 focus:ring-white/50 border-none"
                placeholder="Responder..."
                type="text"
              />
              <button
                type="button"
                aria-label="Inserir emoji"
                className="absolute right-3 text-base opacity-80 hover:opacity-100 hover:scale-110 transition shrink-0"
              >
                😊
              </button>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {REACTIONS.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  aria-label={`Reagir com ${emoji}`}
                  className="glass-reaction-btn w-9 h-9 rounded-full flex items-center justify-center text-sm shadow-sm active:scale-95"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </main>

      <button
        type="button"
        aria-label="Próximo story"
        className="nav-arrow-btn hidden sm:flex absolute right-4 md:right-8 lg:right-16 xl:right-24 z-40 w-11 h-11 rounded-full items-center justify-center text-white/80 hover:text-white shadow-lg"
        data-purpose="nav-next"
        onClick={(e) => {
          e.stopPropagation()
          goNext()
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </svg>
      </button>

      <style>{`
        .story-card-shadow {
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08);
        }
        .nav-arrow-btn {
          background: rgba(45, 48, 55, 0.65);
          backdrop-filter: blur(8px);
          transition: all 0.2s ease-in-out;
        }
        .nav-arrow-btn:hover {
          background: rgba(65, 70, 80, 0.85);
          transform: scale(1.08);
        }
        .glass-input {
          background: rgba(20, 22, 28, 0.55);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .glass-reaction-btn {
          background: rgba(26, 29, 36, 0.65);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .glass-reaction-btn:hover {
          transform: scale(1.22);
          background: rgba(40, 44, 55, 0.85);
        }
      `}</style>
    </div>
  )
}
