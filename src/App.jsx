import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Buscar from './pages/Buscar.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Configuracoes from './pages/Configuracoes.jsx'
import Criar from './pages/Criar.jsx'
import CriarStory from './pages/CriarStory.jsx'
import Mensagens from './pages/Mensagens.jsx'
import Perfil from './pages/Perfil.jsx'
import Notificacoes from './pages/Notificacoes.jsx'
import NovaPublicacao from './pages/NovaPublicacao.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/buscar" element={<Buscar />} />
      <Route path="/configuracoes" element={<Configuracoes />} />
      <Route path="/criar" element={<Criar />} />
      <Route path="/criar-story" element={<CriarStory />} />
      <Route path="/mensagens" element={<Mensagens />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/notificacoes" element={<Notificacoes />} />
      <Route path="/nova-publicacao" element={<NovaPublicacao />} />
    </Routes>
  )
}
