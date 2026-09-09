import { useCallback, useEffect, useRef, useState } from 'react'

const slides = [
  { id: 1, image: '/assets/hero-1.jpg', thumb: '/assets/slide-1.jpg', caption: 'Servicio Automotriz' },
  { id: 2, image: '/assets/hero-2.jpg', thumb: '/assets/slide-2.jpg', caption: 'Alineamiento y Balanceo' },
  { id: 3, image: '/assets/hero-3.jpg', thumb: '/assets/slide-3.jpg', caption: 'Frenos, Dirección y Suspensión' },
  { id: 4, image: '/assets/hero-4.jpg', thumb: '/assets/slide-4.jpg', caption: 'Enderazo y Pintura' },
  { id: 5, image: '/assets/hero-5.jpg', thumb: '/assets/slide-5.jpg', caption: 'Diagnóstico Mecanicos' },
  { id: 6, image: '/assets/hero-6.jpg', thumb: '/assets/slide-6.jpg', caption: 'Cambio de Lubricantes, Fluídos y Filtros' },
]

function HeroSlider() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const thumbsRef = useRef(null)

  const go = useCallback((index) => {
    setActive((index + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!playing) return undefined
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 8000)
    return () => window.clearInterval(timer)
  }, [playing])

  return (
    <div className="et_pb_section et_pb_section_0 et_section_regular">
      <div className="et_pb_module et_pb_code et_pb_code_slider">
        <div className="et_pb_code_inner">
          <div className="n2-ss-align">
            <div className="n2-ss-slider" id="n2-ss-4">
              <div className="n2-ss-slider-stage">
                {slides.map((slide, index) => (
                  <div
                    className={`n2-ss-slide${index === active ? ' n2-ss-slide-active' : ''}`}
                    key={slide.id}
                    aria-hidden={index !== active}
                  >
                    <div className="n2-ss-slide-background-image">
                      {/* Los posts cuadrados se ven enteros; el desenfoque rellena los lados. */}
                      {slide.contain && (
                        <img className="n2-ss-blur" src={slide.image} alt="" aria-hidden="true" />
                      )}
                      <img
                        className={slide.contain ? 'n2-ss-contain' : undefined}
                        src={slide.image}
                        alt=""
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                    <div className="n2-ss-layers-container">
                      <div className="n2-ss-item-content n2-ss-text">{slide.caption}</div>
                    </div>
                  </div>
                ))}

                <div className="n2-ss-slider-controls-absolute-right-top">
                  <button
                    type="button"
                    className="n2-ss-widget-autoplay"
                    aria-label={playing ? 'Pausar' : 'Reproducir'}
                    onClick={() => setPlaying((value) => !value)}
                  >
                    {playing ? '❙❙' : '▶'}
                  </button>
                </div>
              </div>

              <div className="n2-ss-slider-controls-below">
                <button
                  type="button"
                  className="nextend-arrow nextend-thumbnail-previous"
                  aria-label="Anterior"
                  onClick={() => go(active - 1)}
                >
                  ‹
                </button>
                <div className="nextend-thumbnail-scroller" ref={thumbsRef}>
                  {slides.map((slide, index) => (
                    <button
                      type="button"
                      className={`n2-thumbnail-dot${index === active ? ' n2-active' : ''}`}
                      key={slide.id}
                      aria-label={slide.caption}
                      onClick={() => go(index)}
                    >
                      <img className={slide.contain ? 'n2-thumb-contain' : undefined} src={slide.thumb} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="nextend-arrow nextend-thumbnail-next"
                  aria-label="Siguiente"
                  onClick={() => go(active + 1)}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSlider
