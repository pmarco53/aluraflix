import logo from './logo.png'
import styles from './Cabecalho.module.css'
import CabecalhoLink from '../../components/CabecalhoLink'
import { Link } from 'react-router-dom'

function Cabecalho(prop) {
  //console.log(prop.location.pathname)
  let rota = prop.location.pathname.substring(1)

  return (
    <header className={styles.cabecalho}>
      <Link to='./'>
        <img src={logo} alt='Logo Alura Flix' />
      </Link>
      <nav className={styles.menu}>
        <CabecalhoLink
          url='/'
          name={rota === 'novo' ? styles.original : styles.novo}
        >
          Home
        </CabecalhoLink>
        <CabecalhoLink
          url='/novo'
          name={rota === 'novo' ? styles.novo : styles.original}
        >
          Novo Vídeo
        </CabecalhoLink>
      </nav>
    </header>
  )
}

export default Cabecalho
