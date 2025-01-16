import { useState } from 'react'
import { useVideos } from 'context/VideosContext'
import ModalEditarVideo from 'components/ModalEditarVideo'
import styles from './Cards.module.css'
import { Link } from 'react-router-dom'

function Cards({ onVideoSelecionado }) {
  const { videos, removerVideo } = useVideos()
  const [videoEditando, setVideoEditando] = useState(null)

  const videosPorCategoria = videos.reduce((acc, video) => {
    if (!acc[video.categoria]) acc[video.categoria] = []
    acc[video.categoria].push(video)
    return acc
  }, {})

  function obterVideoId(link) {
    const regexes = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
    ]

    for (const regex of regexes) {
      const match = link.match(regex)
      if (match) {
        return match[1]
      }
    }

    return null
  }

  return (
    <div className={styles.cards}>
      {Object.keys(videosPorCategoria).map((categoria) => (
        <div>
          <div
            key={categoria}
            className={`${styles.categoria} ${
              styles[`categoria${categoria.replace(/\s/g, '')}`]
            }`}
          >
            <h2>{categoria}</h2>
          </div>
          <div className={styles.videoRow}>
            {videosPorCategoria[categoria].map((video) => {
              const videoId = obterVideoId(video.link)

              return (
                <div
                  key={video.videoId}
                  className={styles.videoItem}
                  onClick={() => onVideoSelecionado({ ...video, videoId })}
                >
                  <Link
                    to={video.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    ;
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt={`Thumbnail do vídeo ${video.titulo}`}
                      style={{
                        width: '100%',
                        maxWidth: '432px',
                        cursor: 'pointer',
                        height: '319px',
                      }}
                    />
                  </Link>
                  <div className={styles.buttons}>
                    <button
                      className={styles.deleteButton}
                      onClick={(e) => {
                        e.stopPropagation()
                        removerVideo(video.id)
                      }}
                    >
                      Deletar
                    </button>
                    <button
                      className={styles.editButton}
                      onClick={(e) => {
                        e.stopPropagation()
                        setVideoEditando(video)
                      }}
                    >
                      Editar
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
      {videoEditando && (
        <ModalEditarVideo
          video={videoEditando}
          onClose={() => setVideoEditando(null)}
        />
      )}
    </div>
  )
}

export default Cards
