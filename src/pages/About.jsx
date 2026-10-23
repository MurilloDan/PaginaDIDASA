import { useState } from 'react'
import './About.css'
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

const pilares = [
  {
    titulo: 'Servicio Integral y Especializado',
    texto:
      'Combinamos tecnicentro automotriz y distribución de repuestos en un solo lugar, ofreciendo a nuestros clientes todo lo necesario para el mantenimiento y reparación de sus vehículos, con garantía de calidad en productos y servicios.',
  },
  {
    titulo: 'Tecnología y Profesionalismo',
    texto:
      'Contamos con equipos de diagnóstico de última generación y un equipo técnico certificado en constante capacitación, asegurando diagnósticos precisos, reparaciones efectivas y tiempos de respuesta competitivos.',
  },
  {
    titulo: 'Transparencia y Confianza',
    texto:
      'En DIDASA, la transparencia es fundamental. Explicamos claramente cada diagnóstico, detallamos los trabajos a realizar y proporcionamos cotizaciones honestas sin costos ocultos. Nuestros clientes toman decisiones informadas y confían en que recibirán exactamente lo que necesitan, sin sorpresas desagradables.',
  },
  {
    titulo: 'Disponibilidad y Rapidez',
    texto:
      'Como importadores directos de autopartes, garantizamos disponibilidad inmediata de repuestos, reduciendo tiempos de espera y asegurando que los vehículos de nuestros clientes vuelvan a la carretera lo más pronto posible. Nuestra eficiencia operativa se traduce en ahorro',
  },
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

/** Banderas a cuadros cruzadas, como en el logo de DIDASA. */
function FlagIcon() {
  return (
    <svg className="about-mv-flag" viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <pattern id="cuadros" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#fff" />
          <rect width="3" height="3" fill="#1a1a1a" />
          <rect x="3" y="3" width="3" height="3" fill="#1a1a1a" />
        </pattern>
      </defs>
      <rect x="6" y="6" width="18" height="14" fill="url(#cuadros)" transform="rotate(-20 15 13)" />
      <rect x="24" y="6" width="18" height="14" fill="url(#cuadros)" transform="rotate(20 33 13)" />
      <path d="M10 44 L14 6" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 44 L34 6" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 24 Q24 18 40 24" stroke="#e22522" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function About() {
  const [pausada, setPausada] = useState(false)

  return (
    <div className="page-nosotros">
      {/* =============================================== galería */}
      <div className="about-gallery">
        <PhotoCarousel images={galeria} />
      </div>

      {/* =============================================== portada */}
      <div className="et_pb_section et_pb_section_0 et_section_specialty">
        <div className="et_pb_row">
          <div className="et_pb_column et_pb_column_1_2 about-hero-photo">
            <img src="/assets/equipo-tecnicentro-grande.jpg" alt="Equipo de Tecnicentro DIDASA" width="1600" height="1226" />
          </div>

          <div className="et_pb_column et_pb_column_1_2 et_pb_column_1 about-hero-text et-last-child">
            <div className="et_pb_row_inner et_pb_row_inner_0">
              <div className="et_pb_column et_pb_column_4_4 et_pb_column_inner et-last-child">
                <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_dark">
                  <div className="et_pb_text_inner">
                    <h1>Qué hacemos</h1>
                  </div>
                </div>

                <div className="et_pb_module et_pb_divider et_pb_divider_0">
                  <div className="et_pb_divider_internal" />
                </div>

                <div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_dark">
                  <div className="et_pb_text_inner">
                    <p>
                      DIDASA ofrece soluciones integrales para el mantenimiento y cuidado de vehículos, combinando dos líneas de negocio complementarias que nos permiten brindar un servicio completo y de excelencia.
                    </p>
                    <p>
                      Tecnicentro Automotriz: nuestro centro de servicio automotriz ofrece mantenimiento preventivo y correctivo especializado para todo tipo de vehículos. Contamos con instalaciones modernas, equipos de diagnóstico de última generación y técnicos certificados que garantizan la máxima calidad en cada intervención.
                    </p>
                    <p>
                      Brindamos desde servicios básicos de mantenimiento hasta reparaciones complejas de motor, transmisión, frenos, suspensión y sistemas eléctricos, incluyendo diagnóstico computarizado. Cada vehículo recibe atención personalizada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============================================== historia */}
      <section className="about-info about-historia">
        <div className="about-info-inner">
          <h2 className="about-info-title">Nuestra historia</h2>
          <div className="about-info-divider" />
          <div className="about-historia-grid">
            <p className="about-lead">
              DIDASA nació con la visión de revolucionar el servicio automotriz en Honduras, ofreciendo
              una alternativa confiable, profesional y tecnológicamente avanzada.
            </p>
            <div className="about-historia-body">
              <p>
                Desde el inicio, invertimos en tecnología de diagnóstico, capacitación continua y
                relaciones con proveedores internacionales, convirtiéndonos en importadores directos y
                garantizando la calidad de cada autoparte.
              </p>
              <p>
                Con el tiempo, hemos crecido, ampliando instalaciones, diversificando servicios y
                consolidando nuestra reputación como un tecnicentro de referencia en Tegucigalpa.
              </p>
              <p>
                Nuestro crecimiento se refleja en la confianza de nuestros clientes. Cada vehículo
                atendido y cada repuesto entregado refuerzan nuestro compromiso con la excelencia y nos
                motivan a mejorar día a día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== misión y visión */}
      <section className="about-info about-mv">
        <div className="about-info-inner about-mv-grid">
          <article className="about-mv-card">
            <FlagIcon />
            <h2>Nuestra misión</h2>
            <p>
              Garantizar la seguridad y el rendimiento de los vehículos de nuestros clientes,
              ofreciendo servicios de mantenimiento y repuestos de calidad, bajo altos estándares de
              ética y confiabilidad.
            </p>
          </article>
          <article className="about-mv-card">
            <FlagIcon />
            <h2>Nuestra visión</h2>
            <p>
              Ser el centro de servicio automotriz de referencia en el Distrito Central, destacando
              por la excelencia, innovación y compromiso con la satisfacción del cliente.
            </p>
          </article>
        </div>
      </section>

      {/* =============================================== propuesta de valor */}
      <section className="about-info about-propuesta">
        <div className="about-info-inner">
          <h2 className="about-info-title">Propuesta de valor</h2>
          <div className="about-info-divider" />
          <p className="about-lead about-propuesta-intro">
            La propuesta de valor de DIDASA se sustenta en tres pilares que nos distinguen en el
            cuidado automotriz en Honduras.
          </p>
          <div className="about-pilares-cinta" onClick={() => setPausada((v) => !v)} role="button" tabIndex={0} aria-pressed={pausada} aria-label={pausada ? 'Reanudar cinta' : 'Detener cinta'} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPausada((v) => !v) } }}>
            <div className={`about-pilares-track${pausada ? ' is-paused' : ''}`}>
              {[...pilares, ...pilares].map((pilar, index) => (
                <article className="about-pilar" key={index} aria-hidden={index >= pilares.length}>
                  <span className="about-pilar-numero">{String((index % pilares.length) + 1).padStart(2, '0')}</span>
                  <h3>{pilar.titulo}</h3>
                  <p>{pilar.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== valores */}
      <div className="et_pb_section et_pb_section_3 et_section_specialty">
        <div className="et_pb_row">
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
              <div className="rueda-girando" aria-hidden="true">
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
              </div>
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

    </div>
  )
}

export default About
