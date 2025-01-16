import { useState } from 'react'
import { useVideos } from 'context/VideosContext'
import styles from './ModalEditarVideo.module.css'

function ModalEditarVideo({ video, onClose }) {
  const { atualizarVideo } = useVideos()
  const [titulo, setTitulo] = useState(video.titulo)
  const [categoria, setCategoria] = useState(video.categoria)
  const [link, setLink] = useState(video.link)
  const [descricao, setDescricao] = useState(video.descricao)
  const [imagem, setImagem] = useState(video.imagem)

  const handleSave = () => {
    const videoAtualizado = { ...video, titulo, categoria, link }
    atualizarVideo(videoAtualizado)
    onClose() // Fechar o modal
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Editar Vídeo</h2>
        <form>
          <div>
            <label>Título</label>
            <input
              type='text'
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div>
            <label>Imagem</label>
            <input
              type='text'
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
            />
          </div>
          <div>
            <label>Categoria</label>
            <input
              type='text'
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>
          <div>
            <label>Link</label>
            <input
              type='text'
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div>
            <label>Descrição</label>
            <input
              type='text'
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
        </form>
        <div className={styles.actions}>
          <button onClick={handleSave}>Salvar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default ModalEditarVideo
