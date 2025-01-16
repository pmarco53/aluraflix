import React, { createContext, useState, useContext, useEffect } from 'react'

const VideosContext = createContext()

export function VideosProvider({ children }) {
  const [videos, setVideos] = useState([])

  // Carregar os dados do backend
  useEffect(() => {
    const carregarVideos = async () => {
      try {
        const response = await fetch('http://localhost:3000/videos')
        if (!response.ok) {
          throw new Error('Erro ao carregar os vídeos')
        }
        const data = await response.json()
        setVideos(data)
      } catch (error) {
        console.error('Erro ao buscar os dados do servidor:', error)
      }
    }

    carregarVideos()
  }, [])

  // Adicionar vídeo e enviar para o backend
  const adicionarVideo = async (video) => {
    try {
      const response = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(video),
      })

      if (!response.ok) {
        throw new Error('Erro ao adicionar vídeo')
      }

      const novoVideo = await response.json()
      setVideos((prevVideos) => [...prevVideos, novoVideo])
    } catch (error) {
      console.error('Erro ao adicionar vídeo:', error)
    }
  }

  const removerVideo = async (videoId) => {
    try {
      await fetch(`http://localhost:3000/videos/${videoId}`, {
        method: 'DELETE',
      })

      setVideos((prevVideos) =>
        prevVideos.filter((video) => video.id !== videoId)
      )
    } catch (error) {
      console.error('Erro ao remover vídeo:', error)
    }
  }

  const atualizarVideo = async (videoAtualizado) => {
    console.log(videoAtualizado)
    try {
      const response = await fetch(
        `http://localhost:3000/videos/${videoAtualizado.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(videoAtualizado),
        }
      )

      if (!response.ok) {
        throw new Error('Erro ao atualizar vídeo')
      }

      const videoAtualizadoServidor = await response.json()
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === videoAtualizadoServidor.id
            ? videoAtualizadoServidor
            : video
        )
      )
    } catch (error) {
      console.error('Erro ao atualizar vídeo:', error)
    }
  }

  return (
    <VideosContext.Provider
      value={{ videos, adicionarVideo, removerVideo, atualizarVideo }}
    >
      {children}
    </VideosContext.Provider>
  )
}

export function useVideos() {
  const context = useContext(VideosContext)
  if (!context) {
    throw new Error('useVideos deve ser usado dentro de um VideosProvider')
  }
  return context
}
