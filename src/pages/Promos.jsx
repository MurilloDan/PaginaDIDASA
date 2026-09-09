import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Promos.css'

/** Ajustes del MetaSlider original (itemWidth 500, itemMargin 5, slideshowSpeed 3000). */
const ITEM_WIDTH = 500
const ITEM_MARGIN = 5
const SLIDESHOW_SPEED = 3000

const slides = [
  { id: 230746, image: '/assets/PHOTO-2021-02-07-19-48-05-500x500.jpg', title: 'PHOTO-2021-02-07-19-48-05' },
  { id: 230747, image: '/assets/PHOTO-2021-02-07-19-48-08-1-500x500.jpg', title: 'PHOTO-2021-02-07-19-48-08-1' },
  { id: 230748, image: '/assets/PHOTO-2021-02-07-19-48-08-1-500x500.jpg', title: 'PHOTO-2021-02-07-19-48-08-1' },
  { id: 230749, image: '/assets/PHOTO-2021-02-07-19-48-06-500x500.jpg', title: 'PHOTO-2021-02-07-19-48-06' },
]

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {direction === 'prev' ? (
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      ) : (
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
      )}
    </svg>
  )
}

function Promos() {
  const viewportRef = useRef(null)
  const [itemWidth, setItemWidth] = useState(ITEM_WIDTH)
  const [visible, setVisible] = useState(2)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  // FlexSlider en modo carrusel encoge los items cuando no cabe el ancho nominal.
  useLayoutEffect(() => {
    const measure = () => {
      const width = viewportRef.current?.clientWidth ?? ITEM_WIDTH
      const item = Math.min(ITEM_WIDTH, width)
      setItemWidth(item)
      setVisible(Math.max(1, Math.floor((width + ITEM_MARGIN) / (item + ITEM_MARGIN))))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // controlNav de FlexSlider: una posición por cada desplazamiento posible.
  const pages = Math.max(1, slides.length - visible + 1)

  // Si al redimensionar caben más slides, la posición actual puede quedar fuera de rango.
  const safeIndex = Math.min(index, pages - 1)

  const goTo = useCallback((next) => setIndex(((next % pages) + pages) % pages), [pages])

  useEffect(() => {
    if (paused || pages < 2) return undefined
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % pages), SLIDESHOW_SPEED)
    return () => window.clearInterval(timer)
  }, [paused, pages])

  const step = itemWidth + ITEM_MARGIN

  return (
    <div className="page-promociones">
      <div className="et_pb_section et_pb_section_0 et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0 et-last-child">
            <div className="et_pb_module et_pb_code et_pb_code_0">
              <div className="et_pb_code_inner">
                <div
                  className="metaslider metaslider-flex has-dots-nav has-carousel-mode ms-theme-default"
                  id="metaslider-id-230745"
                  role="region"
                  aria-label="Nueva presentación de diapositivas"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  <div className="metaslider-viewport" ref={viewportRef}>
                    <ul
                      className="slides metaslider-slides"
                      style={{ transform: `translateX(-${safeIndex * step}px)` }}
                    >
                      {slides.map((slide, position) => (
                        <li
                          className={`slide-${slide.id} ms-image`}
                          key={`${slide.id}-${position}`}
                          style={{ width: `${itemWidth}px` }}
                          aria-roledescription="slide"
                        >
                          <img
                            src={slide.image}
                            title={slide.title}
                            alt=""
                            width="500"
                            height="500"
                            loading={position < 2 ? 'eager' : 'lazy'}
                          />
                        </li>
                      ))}
                    </ul>

                    <ul className="flex-direction-nav">
                      <li>
                        <a
                          className="flex-prev"
                          href="#promociones"
                          aria-label="Anterior"
                          onClick={(event) => {
                            event.preventDefault()
                            goTo(safeIndex - 1)
                          }}
                        >
                          <ArrowIcon direction="prev" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex-next"
                          href="#promociones"
                          aria-label="Siguiente"
                          onClick={(event) => {
                            event.preventDefault()
                            goTo(safeIndex + 1)
                          }}
                        >
                          <ArrowIcon direction="next" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <ol className="flex-control-nav flex-control-paging">
                    {Array.from({ length: pages }, (unused, page) => (
                      <li key={page}>
                        <a
                          className={page === safeIndex ? 'flex-active' : undefined}
                          role="button"
                          tabIndex={0}
                          aria-label={`Ir a la promoción ${page + 1}`}
                          onClick={() => goTo(page)}
                          onKeyDown={(event) => event.key === 'Enter' && goTo(page)}
                        >
                          {page + 1}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promos
