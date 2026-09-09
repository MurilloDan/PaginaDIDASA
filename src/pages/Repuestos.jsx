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

function PartBlurb({ title }) {
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
            {leftItems.map((item) => (
              <PartBlurb title={item} key={item} />
            ))}
          </div>

          <div className="et_pb_column et_pb_column_1_2 et_pb_column_3 et-last-child">
            {rightItems.map((item) => (
              <PartBlurb title={item} key={item} />
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
