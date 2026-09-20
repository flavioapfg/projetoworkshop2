import { NavigationProvider, useNav } from './NavigationContext.jsx'
import ViewHost from './ViewHost.jsx'
import SheetHost from '../components/sheets/SheetHost.jsx'
import Toast from '../components/ui/Toast.jsx'
import AvatarMenu from '../components/ui/AvatarMenu.jsx'
import StoryViewer from '../overlays/StoryViewer.jsx'
import MediaCaptureOverlay from '../overlays/MediaCaptureOverlay.jsx'
import Home from '../pages/Home.jsx'

function ShellLayers() {
  const { story, mediaCapture } = useNav()

  return (
    <>
      <Home />
      <ViewHost />
      <SheetHost />
      <AvatarMenu />
      {story ? <StoryViewer /> : null}
      {mediaCapture ? <MediaCaptureOverlay /> : null}
      <Toast />
    </>
  )
}

export default function AppShell() {
  return (
    <NavigationProvider>
      <ShellLayers />
    </NavigationProvider>
  )
}
