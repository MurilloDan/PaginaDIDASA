import { useState } from 'react'
import './About.css'
import BottomStrip from '../components/BottomStrip.jsx'
import PhotoCarousel from '../components/PhotoCarousel.jsx'

const galeria = [
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.13-PM-1.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.21-PM.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.13-PM.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.21-PM-1.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.20-PM.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.20-PM-1.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.19-PM.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.19-PM-1.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.18-PM.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.18-PM-1.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.16-PM.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.16-PM-1.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.15-PM.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.15-PM-1.jpeg',
  '/assets/galeria/WhatsApp-Image-2024-04-17-at-1.43.14-PM.jpeg',
]

const valores = ['sERVICIO AL CLIENTE', 'HONESTIDAD', 'INTEGRIDAD', 'COMPETENCIA TÉCNICA', 'PROFESIONALISMO']

const PASO = 360 / valores.length

/** Reparte elementos sobre la circunferencia, empezando arriba. */
function posicionEnRueda(index, radio = 38, desfase = 0) {
  const radianes = ((index * PASO - 90 + desfase) * Math.PI) / 180
  return {
    left: `${50 + radio * Math.cos(radianes)}%`,
    top: `${50 + radio * Math.sin(radianes)}%`,
  }
}

const fotosTaller = [
  ['/assets/mechanic-68.jpg', 1000, 786],
  ['/assets/mechanic-20.jpg', 600, 901],
  ['/assets/mechanic-89.jpg', 1000, 660],
]

/**
 * Muestra la portada del video y sólo carga el iframe de YouTube al hacer clic:
 * así la sección nunca se ve vacía y la página no arrastra el reproductor completo.
 */
function Video({ id, poster, title }) {
  const [reproduciendo, setReproduciendo] = useState(false)

  return (
    <div className="et_pb_module et_pb_video">
      <div className="et_pb_video_box">
        {reproduciendo ? (
          <iframe
            title={title}
            width="1080"
            height="608"
            src={`https://www.youtube.com/embed/${id}?feature=oembed&autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-portada"
            onClick={() => setReproduciendo(true)}
            aria-label={`Reproducir: ${title}`}
          >
            <img src={poster} alt="" width="640" height="360" loading="lazy" />
            <span className="video-play" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            <span className="video-titulo">{title}</span>
          </button>
        )}
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="page-nosotros">
      {/* =============================================== portada */}
      <div className="et_pb_section et_pb_section_0 et_section_specialty">
        <div className="et_pb_row">
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_0">
            <div className="et_pb_module et_pb_image et_pb_image_0 et_pb_section_parallax">
              <span className="et_parallax_bg_wrap">
                <span
                  className="et_parallax_bg"
                  style={{ backgroundImage: 'url(/assets/mechanic-93.jpg)' }}
                />
              </span>
              <span className="et_pb_image_wrap">
                <img src="/assets/mechanic-73.png" alt="" width="1920" height="1100" />
              </span>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_1_2 et_pb_column_1 et-last-child">
            <div className="et_pb_row_inner et_pb_row_inner_0">
              <div className="et_pb_column et_pb_column_4_4 et_pb_column_inner et-last-child">
                <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_dark">
                  <div className="et_pb_text_inner">
                    <h1>tecnicentro didasa</h1>
                  </div>
                </div>

                <div className="et_pb_module et_pb_divider et_pb_divider_0">
                  <div className="et_pb_divider_internal" />
                </div>

                <div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_dark">
                  <div className="et_pb_text_inner">
                    <p>
                      Tecnicentro DIDASA es un centro de servicio automotriz integral, especializado
                      en mantenimiento, reparación e instalación de auto partes.
                    </p>
                    <p>
                      Nos distinguimos por nuestra tecnología avanzada, técnicos profesionales y
                      atención personalizada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============================================== misión */}
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_1_3 et_pb_column_2">
            <div className="et_pb_module et_pb_text seccion-titulo et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>Nuestra misión</h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_divider et_pb_divider_rojo">
              <div className="et_pb_divider_internal" />
            </div>
            <div className="et_pb_module et_pb_text seccion-texto et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Garantizar la seguridad y el rendimiento de los vehículos de nuestros clientes,
                  ofreciendo servicios de mantenimiento y repuestos de calidad, bajo altos estándares
                  de ética y confiabilidad.
                </p>
              </div>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_2_3 et_pb_column_3 et-last-child">
            <div className="et_pb_module et_pb_image logo-strip">
              <span className="et_pb_image_wrap">
                <img src="/assets/mechanic-63.png" alt="" width="1068" height="166" />
              </span>
            </div>
            <Video id="KKZWr16AamM" poster="/assets/video-mision.jpg" title="Atención personalizada" />
          </div>
        </div>
      </div>

      {/* =============================================== visión, fotos y galería */}
      <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_1">
          {fotosTaller.map(([src, width, height], index) => (
            <div
              className={`et_pb_column et_pb_column_1_3${index === 2 ? ' et-last-child' : ''}`}
              key={src}
            >
              <div className="et_pb_module et_pb_image foto-taller">
                <span className="et_pb_image_wrap">
                  <img src={src} alt="" width={width} height={height} loading="lazy" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="et_pb_row et_pb_row_2">
          <div className="et_pb_column et_pb_column_1_3 et_pb_column_7">
            <div className="et_pb_module et_pb_text seccion-titulo et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>Nuestra vISIÓN</h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_divider et_pb_divider_rojo">
              <div className="et_pb_divider_internal" />
            </div>
            <div className="et_pb_module et_pb_text seccion-texto et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Ser el centro de servicio automotriz de referencia en el Distrito Central,
                  destacando por la excelencia, innovación y compromiso con la satisfacción del
                  cliente.
                </p>
              </div>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_2_3 et_pb_column_8 et-last-child">
            <div className="et_pb_module et_pb_image logo-strip">
              <span className="et_pb_image_wrap">
                <img src="/assets/mechanic-63.png" alt="" width="1068" height="166" loading="lazy" />
              </span>
            </div>
            <Video id="3o0R9L6k6OY" poster="/assets/video-vision.jpg" title="Personal altamente calificado" />
          </div>
        </div>

        <div className="et_pb_row et_pb_row_3">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_9 et-last-child">
            <PhotoCarousel images={galeria} />
          </div>
        </div>

        <div className="et_pb_row et_pb_row_4">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_10 et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_6 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>TECNICENTRO DIDASA</h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_divider et_pb_divider_rojo">
              <div className="et_pb_divider_internal" />
            </div>
          </div>
        </div>
      </div>

      {/* =============================================== valores */}
      <div className="et_pb_section et_pb_section_3 et_section_specialty">
        <div className="et_pb_row">
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_11">
            <div className="et_pb_module et_pb_image et_pb_image_6 et_pb_section_parallax">
              <span className="et_parallax_bg_wrap">
                <span
                  className="et_parallax_bg"
                  style={{ backgroundImage: 'url(/assets/mechanic-58.jpg)' }}
                />
              </span>
              <span className="et_pb_image_wrap">
                <img src="/assets/mechanic-84.png" alt="" width="1000" height="1366" loading="lazy" />
              </span>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_1_2 et_pb_column_12 et-last-child">
            <div className="et_pb_row_inner">
              <div className="et_pb_column et_pb_column_4_4 et_pb_column_inner et-last-child">
                <div className="et_pb_module et_pb_text valores-intro et_pb_text_align_left et_pb_bg_layout_dark">
                  <div className="et_pb_text_inner">
                    <p>
                      En nuestro taller de mecánica automotriz, encontrará un equipo comprometido con
                      la excelencia, la integridad y el servicio excepcional. Confíe en nosotros para
                      cuidar de su vehículo como si fuera nuestro propio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="valores-rueda">
              <div className="rueda-aro" aria-hidden="true" />
              {/* Los radios caen entre valor y valor, y las tuercas van sobre ellos. */}
              {valores.map((valor, index) => (
                <span
                  className="rueda-radio"
                  key={`radio-${valor}`}
                  aria-hidden="true"
                  style={{ transform: `rotate(${index * PASO - 90 + PASO / 2}deg)` }}
                />
              ))}
              {valores.map((valor, index) => (
                <span
                  className="rueda-tuerca"
                  key={`tuerca-${valor}`}
                  aria-hidden="true"
                  style={posicionEnRueda(index, 20, PASO / 2)}
                />
              ))}

              <div className="rueda-centro">
                <h2>
                  <strong>VALORES</strong>
                </h2>
              </div>

              <ul className="rueda-valores">
                {valores.map((valor, index) => (
                  <li className="rueda-valor" key={valor} style={posicionEnRueda(index)}>
                    {valor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BottomStrip />
    </div>
  )
}

export default About
