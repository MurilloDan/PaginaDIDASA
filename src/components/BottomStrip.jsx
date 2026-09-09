import './BottomStrip.css'

const ARROW = 'E'

const CATALOGO_PDF = 'https://tecdidasa.com/CatalogoProductosyServicios2024.pdf'

function BottomStrip() {
  return (
    <div className="et_pb_section didasa-strip et_pb_with_background et_section_regular">
      <div className="et_pb_row et_pb_equal_columns et_pb_gutters1">
        <div className="et_pb_column et_pb_column_1_3 strip-col-red">
          <div className="et_pb_module et_pb_text et_pb_text_align_left et_pb_bg_layout_dark">
            <div className="et_pb_text_inner">
              <h4>HAZ TU RESERVACIÓN</h4>
              <p>
                <strong>
                  Problemas con tu vehículo o flota de vehículos, reserva una fecha y hora para
                  revision por manos expertas:
                </strong>
              </p>
            </div>
          </div>
          <div className="et_pb_button_module_wrapper et_pb_button_alignment_left et_pb_module">
            <a className="et_pb_button strip-button-outline" href="/#calendario" data-icon={ARROW}>
              reservar fecha y hora
            </a>
          </div>
        </div>

        <div className="et_pb_column et_pb_column_1_3 strip-col-dark">
          <div className="et_pb_module et_pb_text et_pb_text_align_left et_pb_bg_layout_dark">
            <div className="et_pb_text_inner">
              <h4>catÁlogo de servicios</h4>
              <p>Descarga nuestro catálogo de servicios completo en PDF.</p>
            </div>
          </div>
          <div className="et_pb_button_module_wrapper et_pb_button_alignment_center et_pb_module">
            <a className="et_pb_button strip-button-outline" href={CATALOGO_PDF} data-icon={ARROW}>
              Descargar catálogo
            </a>
          </div>
        </div>

        <div className="et_pb_column et_pb_column_1_3 strip-col-light et-last-child">
          <div className="et_pb_module et_pb_text et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h4>ubicación</h4>
            </div>
          </div>
          <div className="et_pb_module et_pb_text strip-address et_pb_text_align_left">
            <div className="et_pb_text_inner">
              <p>
                <span style={{ color: '#000000' }}>
                  En el Anillo Periférico, col Villa Nueva antes de la entrada a la Kennedy, 50
                  metros antes del puente peatonal que conecta la Kennedy y residencial Honduras,
                  frente a la parada de buses.
                </span>
              </p>
            </div>
          </div>
          <div className="et_pb_button_module_wrapper strip-map-wrapper et_pb_button_alignment_center et_pb_module">
            <a className="et_pb_button strip-button-map" href="/contactenos/#map" data-icon={ARROW}>
              ver mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomStrip
