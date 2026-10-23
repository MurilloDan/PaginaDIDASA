import './Repuestos.css'
import BottomStrip from '../components/BottomStrip.jsx'

const ARROW = 'E'

const leftItems = [
  'Dirección',
  'llantas',
  'frenos',
  'Partes de Motor',
  'Lubricantes',
  'tracciones',
  'Mangueras',
  'filtros',
  'Sistema de enfriamiento',
  'accesorios',
  'salineras',
]

const rightItems = [
  'Transmisión',
  'Eléctrico',
  'Kits de Embrague',
  'Bandas',
  'Empacadura',
  'Suspención',
]

const ICONOS = {
  Dirección: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 3v6.5M3.7 15.5l5.6-2.8M20.3 15.5l-5.6-2.8" />
    </>
  ),
  llantas: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  frenos: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </>
  ),
  'Partes de Motor': (
    <>
      <path d="M4 9h10v7H4zM14 11h4l2-2v6l-2-2h-4" />
      <path d="M6 9V6h6v3M6 16v3h6v-3" />
    </>
  ),
  Lubricantes: <path d="M12 3c-3 4.5-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-3-6.5-6-11z" />,
  tracciones: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3l1.5 3h-3zM21 12l-3 1.5v-3zM12 21l-1.5-3h3zM3 12l3-1.5v3z" />
    </>
  ),
  Mangueras: <path d="M5 4h4a3 3 0 0 1 3 3v10a3 3 0 0 0 3 3h4M5 4v3M20 20v-3" />,
  filtros: (
    <>
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M9 9h6M9 13h6M9 17h6" />
    </>
  ),
  'Sistema de enfriamiento': (
    <>
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" />
    </>
  ),
  accesorios: <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3.1-5.4 3.1 1.2-6-4.5-4.2 6.1-.7z" />,
  salineras: (
    <>
      <rect x="5" y="7" width="14" height="12" rx="2" />
      <path d="M9 7V5h6v2M9 12h6" />
    </>
  ),
  Transmisión: (
    <>
      <circle cx="8" cy="12" r="4" />
      <circle cx="16" cy="12" r="4" />
    </>
  ),
  Eléctrico: <path d="M13 2L5 14h6l-1 8 8-12h-6z" />,
  'Kits de Embrague': (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v5M12 16v5" />
    </>
  ),
  Bandas: (
    <>
      <circle cx="7" cy="12" r="3" />
      <circle cx="17" cy="12" r="3" />
      <path d="M7 9h10M7 15h10" />
    </>
  ),
  Empacadura: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
    </>
  ),
  'Suspención': <path d="M7 3c3 2 3 4 0 6s-3 4 0 6 3 4 0 6M17 3c-3 2-3 4 0 6s3 4 0 6 -3 4 0 6" />,
}

function PartBlurb({ title, index }) {
  return (
    <div
      className="et_pb_module et_pb_blurb et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_dark repuesto-card"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="et_pb_blurb_content">
        <div className="et_pb_main_blurb_image">
          <span className="et_pb_image_wrap">
            <svg
              className="repuesto-icono"
              viewBox="0 0 24 24"
              width="34"
              height="34"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {ICONOS[title] ?? <circle cx="12" cy="12" r="8" />}
            </svg>
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

function Repuestos() {
  return (
    <div className="page-repuestos">
      <div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_3_5 et_pb_column_0">
            <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner">
                <h2>REPUESTOS</h2>
                <h4>
                  <em>
                    Te brindamos <strong>precios reales</strong> en repuestos
                  </em>
                </h4>
              </div>
            </div>
            <div className="et_pb_module et_pb_divider et_pb_divider_0">
              <div className="et_pb_divider_internal" />
            </div>
          </div>

          <div className="et_pb_column et_pb_column_2_5 et_pb_column_1 et-last-child">
            <div className="et_pb_module et_pb_divider et_pb_divider_1">
              <div className="et_pb_divider_internal" />
            </div>
          </div>
        </div>

        <div className="et_pb_row et_pb_row_1">
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_2">
            {leftItems.map((item, index) => (
              <PartBlurb title={item} index={index} key={item} />
            ))}
          </div>

          <div className="et_pb_column et_pb_column_1_2 et_pb_column_3 et-last-child">
            {rightItems.map((item, index) => (
              <PartBlurb title={item} index={index} key={item} />
            ))}

            <div className="et_pb_module et_pb_cta_0 et_pb_promo et_pb_text_align_center et_pb_bg_layout_dark">
              <div className="et_pb_promo_description">
                <div>
                  <p>ofrecemos una amplia gama de repuestos, cotiza con nosotros:</p>
                </div>
              </div>
              <div className="et_pb_button_wrapper">
                <a className="et_pb_button et_pb_promo_button" href="/cotizar/" data-icon={ARROW}>
                  cotizar repuesto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomStrip />
    </div>
  )
}

export default Repuestos
