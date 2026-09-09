import './Home.css'
import HeroSlider from '../components/HeroSlider.jsx'
import BookedCalendar from '../components/BookedCalendar.jsx'

const ARROW = 'E'

const iconServices = [
  ['mechanic-icon-10.png', 'rectificados de discos y tambores'],
  ['mechanic-icon-9.png', 'Cambio de Lubricantes, Fluídos y Filtros'],
  ['mechanic-icon-5.png', 'Mantenimiento preventivo'],
  ['mechanic-icon-7.png', 'Alineamiento y balanceo'],
  ['mechanic-icon-2.png', 'limpieza de inyectores'],
  ['mechanic-icon-11.png', 'sistema de encendido/bateria'],
  ['mechanic-icon-4.png', 'Mantenimiento correctivo'],
  ['mechanic-icon-1.png', 'Frenos'],
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

function IconBlurb({ icon, title }) {
  return (
    <div className="et_pb_module et_pb_blurb et_pb_text_align_center">
      <div className="et_pb_blurb_content">
        <div className="et_pb_main_blurb_image">
          <span className="et_pb_image_wrap">
            <img src={`/assets/${icon}`} alt="" width="32" height="32" loading="lazy" />
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
  return (
    <div className="page-home">
      <HeroSlider />

      {/* =============================================== Hero / titular */}
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_2_5 et_pb_column_0">
            <div className="et_pb_module et_pb_divider et_pb_divider_0">
              <div className="et_pb_divider_internal" />
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h1>
                  Repuestos
                  <br />
                  mantenimiento
                  <br />
                  reparación
                </h1>
              </div>
            </div>

            <div className="et_pb_module et_pb_divider et_pb_divider_1">
              <div className="et_pb_divider_internal" />
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Atendemos todas las marcas de vehículos. Ofrecemos una amplia gama de
                  repuestos y servicios, haz tu cita con nosotros!{' '}
                </p>
              </div>
            </div>

            <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_right et_pb_module">
              <a className="et_pb_button et_pb_button_0" href="#calendario" data-icon={ARROW}>
                Reservar fecha y hora
              </a>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_3_5 et_pb_column_1 et-last-child">
            <div className="et_pb_module et_pb_image et_pb_image_0 et_pb_section_parallax">
              <span className="et_parallax_bg_wrap">
                <span
                  className="et_parallax_bg"
                  style={{ backgroundImage: 'url(/assets/mechanic-86.jpg)' }}
                />
              </span>
              <span className="et_pb_image_wrap">
                <img src="/assets/mechanic-59.png" alt="" width="1000" height="849" />
              </span>
            </div>
            <div className="et_pb_module et_pb_image et_pb_image_1">
              <span className="et_pb_image_wrap">
                <img src="/assets/mechanic-57-1.png" alt="" width="798" height="1052" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =============================================== Iconos de servicio */}
      <div className="et_pb_section et_pb_section_2 et_section_regular">
        <div className="et_pb_row et_pb_row_1">
          {iconServices.slice(0, 4).map(([icon, title], index) => (
            <div
              className={`et_pb_column et_pb_column_1_4${index === 3 ? ' et-last-child' : ''}`}
              key={title}
            >
              <IconBlurb icon={icon} title={title} />
            </div>
          ))}
        </div>
        <div className="et_pb_row et_pb_row_2">
          {iconServices.slice(4).map(([icon, title], index) => (
            <div
              className={`et_pb_column et_pb_column_1_4${index === 3 ? ' et-last-child' : ''}`}
              key={title}
            >
              <IconBlurb icon={icon} title={title} />
            </div>
          ))}
        </div>
      </div>

      {/* =============================================== Quiénes somos */}
      <div className="et_pb_section et_pb_section_3 et_section_regular">
        <div className="et_pb_row et_pb_row_3">
          <div className="et_pb_column et_pb_column_1_3 et_pb_column_10">
            <div className="et_pb_module et_pb_text et_pb_text_2 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>tecnicentro didasa</h2>
              </div>
            </div>

            <div className="et_pb_module et_pb_divider et_pb_divider_2">
              <div className="et_pb_divider_internal" />
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_3 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Contamos con alta experiencia en el giro automotriz, trabajamos con
                  equipos y productos de la más alta calidad en el mercado y nuestros
                  Técnicos están calificados con alta experiencia profesional en Mecánica
                  Automotriz para brindar servicios garantizados qu e superen las
                  expectativas de nuestros clientes al brindar un servicio personalizado,
                  asesoramiento experto y soluciones efectivas para sus necesidades
                  automotrices.
                </p>
                <p>
                  En nuestro taller de mecánica automotriz, encontrará un equipo
                  comprometido con la excelencia, la integridad y el servicio excepcional.
                  Confíe en nosotros para cuidar de su vehículo como si fuera nuestro
                  propio.
                </p>
                <p>.</p>
              </div>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_2_3 et_pb_column_11 et-last-child">
            <div className="et_pb_module et_pb_image et_pb_image_2">
              <span className="et_pb_image_wrap">
                <img src="/assets/mechanic-63.png" alt="" width="1068" height="166" loading="lazy" />
              </span>
            </div>
            <div className="et_pb_module et_pb_video et_pb_video_0">
              <div className="et_pb_video_box">
                <iframe
                  title="el personal mas calificado"
                  src="https://www.youtube.com/embed/_0hkxhe2zuQ?feature=oembed"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============================================== Nuestros servicios */}
      <div className="et_pb_section et_pb_section_4 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_4">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_12 et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_4 et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner">
                <h2>Nuestros servicios</h2>
              </div>
            </div>
            <div className="et_pb_module et_pb_divider et_pb_divider_3">
              <div className="et_pb_divider_internal" />
            </div>
          </div>
        </div>

        <div className="et_pb_row et_pb_row_5">
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_13">
            {servicesLeft.map((title) => (
              <ServiceBlurb title={title} key={title} />
            ))}
          </div>

          <div className="et_pb_column et_pb_column_1_2 et_pb_column_14 et-last-child">
            {servicesRight.map((title) => (
              <ServiceBlurb title={title} key={title} />
            ))}

            <div className="et_pb_module et_pb_cta_0 et_pb_promo et_pb_text_align_center et_pb_bg_layout_dark">
              <div className="et_pb_promo_description">
                <div>
                  <p>
                    Problemas con tu vehÍculo o flota de vehÍculos, reserva una fecha y
                    hora para revisiÓn por manos expertas:
                  </p>
                </div>
              </div>
              <div className="et_pb_button_wrapper">
                <a
                  className="et_pb_button et_pb_promo_button"
                  href="#calendario"
                  data-icon={ARROW}
                >
                  reservar fecha y hora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============================================== Haz tu cita */}
      <div className="et_pb_section et_pb_section_5 et_section_regular">
        <div className="et_pb_row et_pb_row_6">
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_15">
            <div className="et_pb_module et_pb_divider et_pb_divider_4">
              <div className="et_pb_divider_internal" />
            </div>
            <div className="et_pb_module et_pb_image et_pb_image_3 et_pb_section_parallax">
              <span className="et_parallax_bg_wrap">
                <span
                  className="et_parallax_bg"
                  style={{ backgroundImage: 'url(/assets/mechanic-70.jpg)' }}
                />
              </span>
              <span className="et_pb_image_wrap">
                <img src="/assets/mechanic-67.png" alt="" width="1000" height="1453" loading="lazy" />
              </span>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_1_2 et_pb_column_16 et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_5 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>
                  <strong>Haz tu cita</strong>
                </h2>
                <p>
                  <strong>
                    Programa la fecha y hora para recibir una atención personalizada y en
                    tiempo.
                  </strong>
                </p>
              </div>
            </div>

            <div className="et_pb_module et_pb_code et_pb_code_0" id="calendario">
              <div className="et_pb_code_inner">
                <BookedCalendar />
              </div>
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
                  <span style={{ color: '#000000' }}>
                    En el Anillo Periférico, col Villa Nueva antes de la entrada a la
                    Kennedy, 50 metros antes del puente peatonal que conecta la Kennedy y
                    residencial Honduras. Frente a la parada de buses.
                  </span>
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
    </div>
  )
}

export default Home
