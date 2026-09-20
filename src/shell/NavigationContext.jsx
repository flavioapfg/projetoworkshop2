import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const NavigationContext = createContext(null)

export function NavigationProvider({ children }) {
  const [stack, setStack] = useState([])
  const [sheet, setSheet] = useState(null)
  const [story, setStory] = useState(null)
  const [mediaCapture, setMediaCapture] = useState(null)
  const [toast, setToast] = useState(null)
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false)

  const locked = stack.length > 0 || Boolean(sheet) || Boolean(story) || Boolean(mediaCapture)

  useEffect(() => {
    if (!locked) return undefined
    const y = window.scrollY
    const { body } = document
    const prev = body.style.cssText
    body.style.position = 'fixed'
    body.style.top = `-${y}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    return () => {
      body.style.cssText = prev
      window.scrollTo(0, y)
    }
  }, [locked])

  const go = useCallback((view, param = null) => {
    setSheet(null)
    setAvatarMenuOpen(false)
    setStack((s) => [...s, { view, param }])
  }, [])

  const back = useCallback(() => {
    setStack((s) => s.slice(0, -1))
  }, [])

  const resetStack = useCallback(() => {
    setStack([])
    setSheet(null)
    setStory(null)
    setMediaCapture(null)
    setAvatarMenuOpen(false)
  }, [])

  const openSheet = useCallback((type, payload = null) => {
    setAvatarMenuOpen(false)
    setSheet({ type, payload })
  }, [])

  const closeSheet = useCallback(() => setSheet(null), [])

  const openStory = useCallback((payload) => {
    setSheet(null)
    setStory(payload)
  }, [])

  const closeStory = useCallback(() => setStory(null), [])

  const openMediaCapture = useCallback((payload) => {
    setMediaCapture(payload)
  }, [])

  const closeMediaCapture = useCallback(() => setMediaCapture(null), [])

  const showToast = useCallback((message) => {
    setToast({ message, id: Date.now() })
  }, [])

  useEffect(() => {
    if (!toast) return undefined
    const t = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(t)
  }, [toast])

  useEffect(() => {
    function onKey(e) {
      if (e.key !== 'Escape') return
      if (mediaCapture?.busy) return
      if (story) {
        closeStory()
        return
      }
      if (sheet) {
        closeSheet()
        return
      }
      if (avatarMenuOpen) {
        setAvatarMenuOpen(false)
        return
      }
      if (stack.length) back()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [story, sheet, stack, avatarMenuOpen, mediaCapture, back, closeSheet, closeStory])

  const value = useMemo(
    () => ({
      stack,
      current: stack[stack.length - 1] || null,
      sheet,
      story,
      mediaCapture,
      toast,
      avatarMenuOpen,
      go,
      back,
      resetStack,
      openSheet,
      closeSheet,
      openStory,
      closeStory,
      openMediaCapture,
      closeMediaCapture,
      showToast,
      setAvatarMenuOpen,
    }),
    [
      stack,
      sheet,
      story,
      mediaCapture,
      toast,
      avatarMenuOpen,
      go,
      back,
      resetStack,
      openSheet,
      closeSheet,
      openStory,
      closeStory,
      openMediaCapture,
      closeMediaCapture,
      showToast,
    ],
  )

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
}

export function useNav() {
  const ctx = useContext(NavigationContext)
  if (!ctx) throw new Error('useNav must be used within NavigationProvider')
  return ctx
}
