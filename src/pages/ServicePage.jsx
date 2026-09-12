import './ServicePage.css'
import BottomStrip from '../components/BottomStrip.jsx'
import { services } from './servicesData.js'

function ServicePage({ slug }) {
  const service = services[slug]
  if (!service) return null

  const half = service.split === 'half'
  const textColumn = half ? 'et_pb_column_1_2' : 'et_pb_column_2_5'
  const imageColumn = half ? 'et_pb_column_1_2' : 'et_pb_column_3_5'

  // Cada servicio puede traer su propia foto; si no, se usa la genérica del taller.
  const foto = service.image ?? '/assets/mechanic-78-1.png'
  const fondo = service.parallax ?? '/assets/mechanic-91.jpg'

  return (
    <div className="page-servicio">
      <div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className={`et_pb_column ${textColumn} et_pb_column_0`}>
            <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h2>
                  <strong>{service.title}</strong>
                </h2>
              </div>
            </div>

            <div className="et_pb_module et_pb_divider et_pb_divider_0">
              <div className="et_pb_divider_internal" />
            </div>

            {service.items.map((item) => (
              <div
                className="et_pb_module et_pb_text servicio-item et_pb_text_align_left et_pb_bg_layout_light"
                key={item}
              >
                <div className="et_pb_text_inner">
                  <ul>
                    <li>
                      <h3>
                        <strong>{item}</strong>
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className={`et_pb_column ${imageColumn} et_pb_column_1 et-last-child`}>
            <div className="et_pb_module et_pb_image et_pb_image_0 et_pb_section_parallax">
              <span className="et_parallax_bg_wrap">
                <span className="et_parallax_bg" style={{ backgroundImage: `url(${fondo})` }} />
              </span>
              <span className="et_pb_image_wrap">
                <img src={foto} alt={service.title} width="1000" height="660" loading="lazy" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <BottomStrip />
    </div>
  )
}

export default ServicePage
