import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'

const inputClass =
  'w-full h-[48px] px-4 rounded-[14px] bg-[#ECEEF6] border-0 text-[#12161C] placeholder-[#8790A0] text-sm focus:ring-2 focus:ring-[#8B5CF6] focus:bg-white transition-all duration-150'

export default function Cadastro() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('signup')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    handle: '',
    email: '',
    password: '',
    terms: false,
  })

  const isLogin = mode === 'login'

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  function switchMode(next) {
    setMode(next)
    setError('')
    setShowPassword(false)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isLogin) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: form.email.trim(),
          password: form.password,
        })
        if (signInError) throw signInError
      } else {
        if (!form.terms) {
          throw new Error('Aceite os Termos de Uso e a Política de Privacidade.')
        }

        const handle = form.handle.replace(/^@/, '').trim().toLowerCase()
        const { error: signUpError } = await supabase.auth.signUp({
          email: form.email.trim(),
          password: form.password,
          options: {
            data: {
              name: form.name.trim(),
              handle,
            },
          },
        })
        if (signUpError) throw signUpError
      }

      navigate('/home')
    } catch (err) {
      setError(err.message || 'Não foi possível continuar. Tente de novo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#ECEDF5] flex items-center justify-center p-4 md:p-8 xl:p-12 text-[#12161C]">
      <main
        className="w-full max-w-[1360px] min-h-[740px] grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        data-purpose="login-wrapper"
      >
        <section
          className="lg:col-span-7 xl:col-span-7 relative rounded-[32px] overflow-hidden min-h-[480px] lg:min-h-[740px] shadow-sm select-none"
          data-purpose="hero-media-card"
        >
          <img
            alt="Mulher jovem sorrindo em um restaurante saboreando uma refeição com hashis"
            className="absolute inset-0 w-full h-full object-cover object-left"
            loading="eager"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChdJRDBkBeOeIN7awRJAOwRzMCfvttjVAWkegd2zUE5zbojgkL995kdnmirf2oJv_WX7UF5HKWK1xDmyYNPdkMlYIKFimn_Vfo2osn2vuEn9G4r-P9gatEK9aoBH_sItdUye7aZ1Y69YrbXbbZukIw1yw9yRPVjh4g4mYyVmIv8OSPBLFitZWTxdVCGJSzUYtkOUFMuhfxXu-o26vmasE-Sfb6z5NNk8gwUToXNroROF5k6qm1BjvbkCgqxc9lwOXx8is"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/10 pointer-events-none" />
          <div
            className="absolute top-6 left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-sm"
            data-purpose="live-indicator"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#B4F000] ring-4 ring-[#B4F000]/30 animate-pulse" />
            <span className="text-xs font-medium tracking-wide">Ao vivo</span>
          </div>
        </section>

        <section
          className="lg:col-span-5 xl:col-span-5 bg-white rounded-[32px] shadow-card flex flex-col justify-between p-8 sm:p-10 md:p-12 relative"
          data-purpose="login-form-card"
        >
          <div className="flex justify-end w-full" data-purpose="card-header-actions">
            <button
              aria-label="Alternar modo escuro"
              className="w-10 h-10 rounded-full border border-[#E2E5EE] flex items-center justify-center text-[#707B8C] hover:text-[#12161C] hover:border-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              type="button"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>

          <div className="w-full max-w-[360px] mx-auto my-auto py-4" data-purpose="auth-content">
            <div className="text-center mb-5">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#12161C] select-none font-sans">
                Gooday
              </h1>
              <p className="text-[14px] leading-relaxed text-[#2A313C] mt-2 max-w-[310px] mx-auto font-normal">
                {isLogin
                  ? 'Bem-vindo de volta. Continue cuidando da sua rotina.'
                  : 'Crie sua conta. Respeite sua mente e trate seu corpo bem.'}
              </p>
            </div>

            <form className="space-y-3" data-purpose={isLogin ? 'login-form' : 'signup-form'} onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <div>
                    <label className="sr-only" htmlFor="fullname">
                      Como quer ser chamado?
                    </label>
                    <input
                      autoComplete="name"
                      className={inputClass}
                      id="fullname"
                      name="name"
                      placeholder="Como quer ser chamado?"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => updateField('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="username">
                      Nome de usuário
                    </label>
                    <input
                      autoComplete="username"
                      className={inputClass}
                      id="username"
                      name="handle"
                      placeholder="@seu_usuario"
                      required
                      type="text"
                      value={form.handle}
                      onChange={(e) => updateField('handle', e.target.value)}
                    />
                  </div>
                </>
              )}

              <div>
                <label className="sr-only" htmlFor="email">
                  E-mail
                </label>
                <input
                  autoComplete="email"
                  className={inputClass}
                  id="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </div>

              <div className="relative">
                <label className="sr-only" htmlFor="password">
                  {isLogin ? 'Senha' : 'Crie uma senha segura'}
                </label>
                <input
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  className={`${inputClass} pr-11 tracking-wider`}
                  id="password"
                  name="password"
                  placeholder={isLogin ? 'Sua senha' : 'Crie uma senha segura'}
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => updateField('password', e.target.value)}
                />
                <button
                  aria-label="Alternar visibilidade da senha"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#707B8C] hover:text-[#12161C] transition-colors p-1 focus:outline-none"
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.77 21.77 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.8 21.8 0 0 1-2.16 3.19" />
                      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" x2="23" y1="1" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              {!isLogin && (
                <div className="pt-1 pb-1">
                  <label className="inline-flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      checked={form.terms}
                      className="w-4 h-4 mt-0.5 rounded-[4px] border-0 bg-[#ECEEF6] text-[#7C3AED] focus:ring-[#8B5CF6] focus:ring-offset-0 transition-colors"
                      name="terms"
                      required
                      type="checkbox"
                      onChange={(e) => updateField('terms', e.target.checked)}
                    />
                    <span className="text-[12.5px] leading-snug text-[#424A56]">
                      Li e concordo com os{' '}
                      <a className="text-[#12161C] font-medium hover:underline" href="#terms">
                        Termos de Uso
                      </a>{' '}
                      e a{' '}
                      <a className="text-[#12161C] font-medium hover:underline" href="#privacy">
                        Política de Privacidade
                      </a>
                      .
                    </span>
                  </label>
                </div>
              )}

              {error && (
                <p className="text-[12.5px] text-red-600 bg-red-50 rounded-xl px-3 py-2" role="alert">
                  {error}
                </p>
              )}

              <div className="pt-2">
                <button
                  className="w-full h-[50px] rounded-full bg-[#E7FE8E] text-[#12161C] font-semibold text-[15px] hover:brightness-95 active:scale-[0.99] transition-all duration-150 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#12161C]/20 shadow-sm disabled:opacity-60"
                  disabled={loading}
                  type="submit"
                >
                  {loading
                    ? 'Aguarde…'
                    : isLogin
                      ? 'Entrar no Gooday'
                      : 'Criar conta no Gooday'}
                </button>
              </div>

              <div className="text-center pt-2">
                {isLogin ? (
                  <>
                    <span className="text-[13px] text-[#5C6675]">Ainda não tem conta? </span>
                    <button
                      className="text-[13px] font-semibold text-[#12161C] hover:text-[#7C3AED] hover:underline transition-colors"
                      type="button"
                      onClick={() => switchMode('signup')}
                    >
                      Criar conta
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-[13px] text-[#5C6675]">Já tem uma conta? </span>
                    <button
                      className="text-[13px] font-semibold text-[#12161C] hover:text-[#7C3AED] hover:underline transition-colors"
                      type="button"
                      onClick={() => switchMode('login')}
                    >
                      Entrar
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>

          <footer className="w-full pt-6 border-t border-[#EEF0F5] mt-8" data-purpose="card-footer">
            <p className="text-[12px] leading-relaxed text-[#6B7584] text-center max-w-[340px] mx-auto">
              Uma rede social onde viver bem vira conversa, comunidade e constância.
            </p>
            <p className="text-[11px] text-center text-[#9AA3B2] mt-3">
              Demo:{' '}
              <Link className="underline hover:text-[#5C6675]" to="/home">
                ir ao feed
              </Link>
            </p>
          </footer>
        </section>
      </main>
    </div>
  )
}
