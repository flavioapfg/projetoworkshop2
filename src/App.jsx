import { Route, Routes } from 'react-router-dom'
import Cadastro from './pages/Cadastro.jsx'
import AppShell from './shell/AppShell.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<AppShell />} />
      <Route path="*" element={<Cadastro />} />
    </Routes>
  )
}
