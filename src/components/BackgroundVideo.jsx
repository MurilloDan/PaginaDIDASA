import { useEffect, useRef, useState } from 'react'

/** Video de YouTube en silencio y en bucle que cubre el contenedor sin deformarse (16:9). */
function BackgroundVideo({ id, className = '', children }) {
  const boxRef = useRef(null)
  const [frame, setFrame] = useState({ width: 0, height: 0, left: 0, top: 0 })

  useEffect(() => {
    const box = boxRef.current

    const measure = () => {
      const boxWidth = box.clientWidth
      const boxHeight = box.clientHeight
      const scale = Math.max(boxWidth / 16, boxHeight / 9)
      const width = 16 * scale
      const height = 9 * scale
      setFrame({ width, height, left: (boxWidth - width) / 2, top: (boxHeight - height) / 2 })
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(box)
    return () => observer.disconnect()
  }, [])

  const src =
    `https://www.youtube-nocookie.com/embed/${id}` +
    `?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`

  return (
    <div className={`bg-video ${className}`.trim()} ref={boxRef}>
      <iframe
        className="bg-video-frame"
        src={src}
        title="Video de fondo"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        aria-hidden="true"
        style={{ width: frame.width, height: frame.height, left: frame.left, top: frame.top }}
      />
      <div className="bg-video-overlay" />
      <div className="bg-video-content">{children}</div>
    </div>
  )
}

export default BackgroundVideo
