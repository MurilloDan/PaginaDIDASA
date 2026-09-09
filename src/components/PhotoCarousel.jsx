import { useCallback, useEffect, useState } from 'react'

/** Ajustes del carrusel Brain (slick) del original: 3 visibles, autoplay 2s, 700ms. */
const AUTOPLAY_SPEED = 2000

function Chevron({ direction }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {direction === 'prev' ? (
        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      ) : (
        <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      )}
    </svg>
  )
}

function PhotoCarousel({ images, perView = 3 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (next) => setIndex(((next % images.length) + images.length) % images.length),
    [images.length],
  )

  useEffect(() => {
    if (paused) return undefined
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % images.length), AUTOPLAY_SPEED)
    return () => window.clearInterval(timer)
  }, [paused, images.length])

  // Se duplica la lista para que el desplazamiento sea continuo, como el bucle infinito de slick.
  const loop = [...images, ...images.slice(0, perView)]

  return (
    <div
      className="brcr-carousel brcr-image-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="brcr-viewport">
        <div
          className="brcr-track"
          style={{
            transform: `translateX(-${(index * 100) / perView}%)`,
            transition: index === 0 ? 'none' : undefined,
          }}
        >
          {loop.map((image, position) => (
            <div className="brcr-carousel-item" key={`${image}-${position}`}>
              <figure className="brcr-figure">
                <img src={image} alt="" loading={position < perView ? 'eager' : 'lazy'} />
              </figure>
            </div>
          ))}
        </div>
      </div>

      <button type="button" className="slick-arrow slick-prev" aria-label="Anterior" onClick={() => go(index - 1)}>
        <Chevron direction="prev" />
      </button>
      <button type="button" className="slick-arrow slick-next" aria-label="Siguiente" onClick={() => go(index + 1)}>
        <Chevron direction="next" />
      </button>
    </div>
  )
}

export default PhotoCarousel
