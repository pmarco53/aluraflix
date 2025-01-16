import styles from './Footer.module.css'
import logo from './logo.png'

function Footer() {
  return (
    <footer className={styles.rodape}>
      <img src={logo} alt='logo da alura' />
    </footer>
  )
}

export default Footer
