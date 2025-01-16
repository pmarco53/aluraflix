import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Novo from './pages/Novo'
import { VideosProvider } from './context/VideosContext'

function AppRoutes() {
  return (
    <VideosProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/novo' element={<Novo />}></Route>
        </Routes>
      </BrowserRouter>
    </VideosProvider>
  )
}

export default AppRoutes
