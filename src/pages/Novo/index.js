import Formulario from 'components/Formulario'
import styles from './Novo.module.css'
import Cabecalho from 'components/Cabecalho'
import { useLocation } from 'react-router-dom'

function Novo() {
  const location = useLocation()
  //console.log(location)

  return (
    <>
      <Cabecalho location={location} />
      <div className={styles.novo}>
        <h1>Novo Vídeo</h1>
        <h3>Complete o Formulario para criar novo cartão de video</h3>
        <Formulario />
      </div>
    </>
  )
}

export default Novo
