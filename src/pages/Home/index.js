import './Home.module.css'
import Cabecalho from 'components/Cabecalho'
import Footer from 'components/Footer'
import Banner from 'components/Banner'
import Cards from 'components/Cards'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const [videoSelecionado, setVideoSelecionado] = useState(null)
  const location = useLocation()
  //console.log(location)
  return (
    <>
      <Cabecalho location={location} />
      <Banner video={videoSelecionado} />
      <Cards onVideoSelecionado={setVideoSelecionado} />
      <Footer />
    </>
  )
}

export default Home
