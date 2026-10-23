import './Home.css'
import { useEffect, useRef, useState } from 'react'
import HeroSlider from '../components/HeroSlider.jsx'

const ARROW = 'E'

/** Mismos servicios que el menú "Servicios"; cada icono enlaza a su página. */
const iconServices = [
  {
    title: 'Repuestos',
    href: '/repuestos/',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </>
    ),
  },
  {
    title: 'Cambio de lubricantes, fluidos y filtros',
    href: '/cambio-de-lubricantes-fluidos-y-filtros/',
    icon: (
      <>
        <path d="M12 3c-3 4.5-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-3-6.5-6-11z" />
        <path d="M9 15a3 3 0 0 0 3 3" />
      </>
    ),
  },
  {
    title: 'Diagnósticos Mecánicos',
    href: '/diagnosticos-mecanicos/',
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M15.5 15.5L21 21M7 10.5h2l1.5-3 2.5 6 1.5-3h2" />
      </>
    ),
  },
  {
    title: 'Frenos, Dirección y Suspensión',
    href: '/frenos-direccion-y-suspension/',
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="12" cy="7" r="1" />
        <circle cx="12" cy="17" r="1" />
        <circle cx="7" cy="12" r="1" />
        <circle cx="17" cy="12" r="1" />
      </>
    ),
  },
  {
    title: 'Alineamiento y Balanceo',
    href: '/alineamiento-y-balanceo/',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h6M15 12h6M12 12v6" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
  },
  {
    title: 'Flush y Aditivos',
    href: '/flush-y-aditivos/',
    icon: (
      <>
        <rect x="7" y="8" width="8" height="13" rx="1" />
        <path d="M9 8V5h4v3M15 10h3M15 13h3M10 13v5" />
      </>
    ),
  },
  {
    title: 'Limpieza de Inyectores',
    href: '/limpieza-de-inyectores/',
    icon: (
      <>
        <path d="M9 3h6v4H9zM10 7v8l2 3 2-3V7M12 18v3" />
      </>
    ),
  },
  {
    title: 'Enderezado y Pintura',
    href: '/enderezado-y-pintura/',
    icon: (
      <>
        <path d="M3 9h11v4H3zM14 10h5v2h-5M6 13v6h3v-6" />
      </>
    ),
  },
]

const servicesLeft = [
  'Mantenimiento Preventivo',
  'Cambios de lubricantes y fluídos',
  'Diagnósticos mecánicos',
  'frenos',
  'dirección y suspensión',
  'sistema hidráulico',
  'sistema de enfriamiento',
  'limpieza de inyectores',
  'rectificado de discos y tambores',
  'sistema de encendido y bateria',
]

const servicesRight = ['engrase general', 'mantenimiento correctivo', 'mecánica general']

const tickerItems = [...servicesLeft, ...servicesRight]

function IconBlurb({ icon, title, href }) {
  return (
    <a className="et_pb_module et_pb_blurb et_pb_text_align_center service-link" href={href}>
      <div className="et_pb_blurb_content">
        <div className="et_pb_main_blurb_image">
          <span className="et_pb_image_wrap">
            <svg
              className="service-icon"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {icon}
            </svg>
          </span>
        </div>
        <div className="et_pb_blurb_container">
          <h4 className="et_pb_module_header">
            <span>{title}</span>
          </h4>
        </div>
      </div>
    </a>
  )
}

function ServiceBlurb({ title }) {
  return (
    <div className="et_pb_module et_pb_blurb et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_dark">
      <div className="et_pb_blurb_content">
        <div className="et_pb_main_blurb_image">
          <span className="et_pb_image_wrap">
            <span className="et-pb-icon">^</span>
          </span>
        </div>
        <div className="et_pb_blurb_container">
          <h4 className="et_pb_module_header">
            <span>{title}</span>
          </h4>
        </div>
      </div>
    </div>
  )
}

function Home() {
  const iconsRef = useRef(null)
  const [iconsVisible, setIconsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIconsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(iconsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-home">
      <div className="home-title">
        <h1>Repuestos mantenimiento reparación</h1>
      </div>

      <HeroSlider />

      {/* =============================================== Iconos de servicio */}
      <div
        className={`et_pb_section et_pb_section_2 et_section_regular${iconsVisible ? ' is-visible' : ''}`}
        ref={iconsRef}
      >
        <h2 className="services-title">Nuestros servicios</h2>
        <div className="services-split">
          <div className="services-split-text">
            <p>
              En nuestro taller de mecánica automotriz, encontrará un equipo comprometido con la
              excelencia, la integridad y el servicio excepcional. Confíe en nosotros para cuidar de
              su vehículo como si fuera nuestro propio.
            </p>
          </div>
          <div className="services-split-main">
            <div className="et_pb_row et_pb_row_1">
          {iconServices.slice(0, 4).map(({ icon, title, href }, index) => (
            <div
              className={`et_pb_column et_pb_column_1_4${index === 3 ? ' et-last-child' : ''}`}
              key={title}
            >
              <IconBlurb icon={icon} title={title} href={href} />
            </div>
          ))}
        </div>
        <div className="et_pb_row et_pb_row_2">
          {iconServices.slice(4).map(({ icon, title, href }, index) => (
            <div
              className={`et_pb_column et_pb_column_1_4${index === 3 ? ' et-last-child' : ''}`}
              key={title}
            >
              <IconBlurb icon={icon} title={title} href={href} />
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>

      {/* =============================================== Promos / catálogo / ubicación */}
      <div className="et_pb_section et_pb_section_6 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_7 et_pb_equal_columns et_pb_gutters1">
          <div className="et_pb_column et_pb_column_1_3 et_pb_column_17">
            <div className="et_pb_module et_pb_text et_pb_text_6 et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner">
                <h4>Promociones</h4>
                <p>Haz click en “ver promociones” para ver las promociones del mes!</p>
              </div>
            </div>
            <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_button_alignment_left et_pb_module">
              <a className="et_pb_button et_pb_button_1" href="/promociones/" data-icon={ARROW}>
                ver promociones
              </a>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_1_3 et_pb_column_18">
            <div className="et_pb_module et_pb_text et_pb_text_7 et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner">
                <h4>catálogo de servicios</h4>
                <p>Descarga nuestro catálogo de servicios completo en PDF.</p>
              </div>
            </div>
            <div className="et_pb_button_module_wrapper et_pb_button_2_wrapper et_pb_button_alignment_center et_pb_module">
              <a
                className="et_pb_button et_pb_button_2"
                href="https://tecdidasa.com/CatalogoProductosyServicios2024.pdf"
                data-icon={ARROW}
              >
                Descargar catálogo
              </a>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_1_3 et_pb_column_19 et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_8 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h4>ubicación</h4>
              </div>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_9 et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner">
                <p>
                  En el Anillo Periférico, col Villa Nueva antes de la entrada a la Kennedy,
                  50 metros antes del puente peatonal que conecta la Kennedy y residencial
                  Honduras. Frente a la parada de buses.
                </p>
              </div>
            </div>
            <div className="et_pb_button_module_wrapper et_pb_button_3_wrapper et_pb_button_alignment_center et_pb_module">
              <a className="et_pb_button et_pb_button_3" href="/contactenos/#map" data-icon={ARROW}>
                ver mapa
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* =============================================== Hero / titular */}
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_2_5 et_pb_column_0">
            <div className="et_pb_module et_pb_divider et_pb_divider_0">
              <div className="et_pb_divider_internal" />
            </div>

          </div>

        </div>
      </div>

      {/* =============================================== Nuestros servicios */}
      <div className="et_pb_section et_pb_section_4 et_pb_with_background et_section_regular">
        <div className="services-ticker" aria-label="Detalle de servicios">
          <div className="services-ticker-track" aria-hidden="true">
            {[...tickerItems, ...tickerItems].map((title, index) => (
              <span key={index}>
                <i className="services-ticker-bullet" />
                {title}
              </span>
            ))}
          </div>
        </div>

      </div>

          {/* =============================================== Referidos */}
      <section className="referidos">
        <div className="referidos-inner">
          <h2 className="referidos-title">Referidos</h2>
          <div className="referidos-divider" />
          <p className="referidos-lead">Refiere a más clientes y obtén beneficios y descuentos.</p>
          <div className="referidos-pasos">
            <article className="referido-paso">
              <span className="referido-numero">01</span>
              <span className="referido-icono-wrap">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="referido-icono">
                  <circle cx="9" cy="8" r="3.5" />
                  <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 8v6M14 11h6" />
                </svg>
              </span>
              <h3>Refiere</h3>
              <p>Comparte tu experiencia con familiares, amigos o compañeros de trabajo.</p>
            </article>
            <article className="referido-paso">
              <span className="referido-numero">02</span>
              <span className="referido-icono-wrap">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="referido-icono">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12.5l2.7 2.7L16 9.5" />
                </svg>
              </span>
              <h3>Ellos se atienden</h3>
              <p>Tu referido agenda su cita o solicita su cotización con nosotros.</p>
            </article>
            <article className="referido-paso">
              <span className="referido-numero">03</span>
              <span className="referido-icono-wrap">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="referido-icono">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7.2l1.4 2.9 3.2.4-2.3 2.2.6 3.2L12 14.4l-2.9 1.5.6-3.2-2.3-2.2 3.2-.4z" />
                </svg>
              </span>
              <h3>Acumula puntos</h3>
              <p>Por cada cliente que nos recomiendes, acumulas puntos que puedes canjear por descuentos.</p>
            </article>
          </div>
          <a className="referidos-boton" href="/contactenos/#calendario">Quiero referir</a>
        </div>
      </section>
    </div>
  )
}

export default Home
