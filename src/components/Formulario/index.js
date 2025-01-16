import Botao from 'components/Botao'
import styles from './Formulario.module.css'
import CampoTexto from 'components/CampoTexto'
import { useVideos } from 'context/VideosContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Formulario() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [imagem, setImagem] = useState('')
  const [categoria, setCategoria] = useState('')
  const [link, setLink] = useState('')
  const { adicionarVideo } = useVideos()
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if (titulo && imagem && categoria && link && descricao) {
      adicionarVideo({ titulo, imagem, categoria, link, descricao })
      navigate('/') // Redireciona para a página Home
    } else {
      alert('Preencha todos os campos!')
    }
  }
  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <h3>Criar Tarjeta</h3>
      <CampoTexto
        label='Titulo'
        placeholder='título do video'
        onChange={(e) => setTitulo(e.target.value)}
      />
      <CampoTexto
        label='Imagem'
        placeholder='imagem do video'
        onChange={(e) => setImagem(e.target.value)}
      />

      <CampoTexto
        label='Categoria'
        placeholder='Categoria do vídeo'
        onChange={(e) => setCategoria(e.target.value)}
      />
      <CampoTexto
        label='Video'
        placeholder='link do vídeo'
        onChange={(e) => setLink(e.target.value)}
      />
      <CampoTexto
        label='Descrição'
        placeholder='Do que se trata o video'
        onChange={(e) => setDescricao(e.target.value)}
      />
      <div className={styles.botoes}>
        <Botao type='submit'>Guardar</Botao>
        <Botao>Limpar</Botao>
      </div>
    </form>
  )
}

export default Formulario
