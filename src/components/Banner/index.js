import styles from './Banner.module.css'
import { useVideos } from 'context/VideosContext'

function Banner() {
  const { videos } = useVideos()

  const videoDestaque = videos.length > 0 ? videos[0] : null

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
    videoDestaque && (
      <div
        className={styles.videoDestaque}
        style={{
          backgroundImage: `url(https://img.youtube.com/vi/${obterVideoId(
            videoDestaque.link
          )}/hqdefault.jpg)`,
        }}
      >
        <div className={styles.infoBloco}>
          <div className={styles.categoriaDestaque}>
            {videoDestaque.categoria}
          </div>
          <h1>{videoDestaque.titulo}</h1>
          <p>{videoDestaque.descricao}</p>
        </div>
        {/* Segundo bloco: Thumbnail */}
        <div className={styles.thumbnail}>
          <a
            href={videoDestaque.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={`https://img.youtube.com/vi/${obterVideoId(
                videoDestaque.link
              )}/hqdefault.jpg`}
              alt={`Thumbnail do vídeo ${videoDestaque.titulo}`}
            />
          </a>
        </div>
      </div>
    )
  )
}

export default Banner
