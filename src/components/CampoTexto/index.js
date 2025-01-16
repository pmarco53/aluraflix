import styles from './CampoTexto.module.css'

const CampoTexto = (props) => {
  return (
    <div className={styles.texto}>
      <label>{props.label}</label>
      <input
        type='text'
        value={props.valor}
        onChange={props.onChange}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        className={styles.caixa}
      ></input>
    </div>
  )
}

export default CampoTexto
