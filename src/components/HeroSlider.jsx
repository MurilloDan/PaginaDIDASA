import { useCallback, useEffect, useRef, useState } from 'react'

const slides = [
  { id: 1, image: '/assets/hero-1.jpg', caption: 'Servicio Automotriz' },
  { id: 2, image: '/assets/hero-2.jpg', caption: 'Alineamiento y Balanceo' },
  { id: 3, image: '/assets/hero-3.jpg', caption: 'Frenos, Dirección y Suspensión' },
  { id: 4, image: '/assets/hero-4.jpg', caption: 'Enderazo y Pintura' },
  { id: 5, image: '/assets/hero-5.jpg', caption: 'Diagnóstico Mecanicos' },
  { id: 6, image: '/assets/hero-6.jpg', caption: 'Cambio de Lubricantes, Fluídos y Filtros' },
]

function HeroSlider() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [offset, setOffset] = useState(0)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)

  const go = useCallback((index) => {
    setActive((index + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!playing || hovered) return undefined
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 4000)
    return () => window.clearInterval(timer)
  }, [playing, hovered])

  // Desplaza la pista hasta la foto activa, sin pasarse del final para no dejar espacio vacío.
  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current
      const track = trackRef.current
      const item = track?.children[active]
      if (!item) return
      const maxOffset = track.scrollWidth - viewport.clientWidth
      setOffset(Math.max(0, Math.min(item.offsetLeft, maxOffset)))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  return (
    <div className="et_pb_section et_pb_section_0 et_section_regular">
      <div
        className="hero-carousel"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="hero-carousel-viewport" ref={viewportRef}>
          <div
            className="hero-carousel-track"
            ref={trackRef}
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {slides.map((slide, index) => (
              <figure className="hero-carousel-item" key={slide.id}>
                <img src={slide.image} alt="" loading={index < 3 ? 'eager' : 'lazy'} />
                <figcaption className="hero-carousel-caption">{slide.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hero-carousel-arrow hero-carousel-prev"
          aria-label="Anterior"
          onClick={() => go(active - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="hero-carousel-arrow hero-carousel-next"
          aria-label="Siguiente"
          onClick={() => go(active + 1)}
        >
          ›
        </button>

        <div className="hero-carousel-controls">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={`hero-carousel-dot${index === active ? ' hero-carousel-dot-active' : ''}`}
              key={slide.id}
              aria-label={slide.caption}
              onClick={() => go(index)}
            />
          ))}
          <button
            type="button"
            className="hero-carousel-autoplay"
            aria-label={playing ? 'Pausar' : 'Reproducir'}
            onClick={() => setPlaying((value) => !value)}
          >
            {playing ? '❙❙' : '▶'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSlider
