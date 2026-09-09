import { useState } from 'react'
import './Contact.css'

const ARROW = 'E'

const phones = ['2213-0345', '8944-9954 ', '3167-7112', '8953-3373']

const routeVideos = ['6wIO0zFW0R0', 'ZWfotj11aRA', 'MLmB0nyCW8I']

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15481.107225611293!2d-87.1746326!3d14.0608249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fbddd5947db81%3A0x501913109eb69121!2sTecnicentro%20DIDASA!5e0!3m2!1ses-419!2shn!4v1706849624533!5m2!1ses-419!2shn'

/** Dos sumandos nuevos por carga, igual que el captcha de Divi. */
function newCaptcha() {
  return {
    first: Math.floor(Math.random() * 15) + 1,
    second: Math.floor(Math.random() * 15) + 1,
  }
}

const emptyForm = { name: '', email: '', phone: '', asunto: '', message: '', captcha: '' }

function Contact() {
  // El captcha de Divi es una suma con dos dígitos que cambian en cada carga.
  const [captcha] = useState(newCaptcha)

  const [values, setValues] = useState(emptyForm)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => setValues((current) => ({ ...current, [field]: event.target.value }))

  const submit = (event) => {
    event.preventDefault()
    if (Number(values.captcha) !== captcha.first + captcha.second) {
      setError('Has ingresado un número incorrecto en el captcha.')
      return
    }
    setError('')
    setSent(true)
    setValues(emptyForm)
  }

  return (
    <div className="page-contactenos">
      <div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_0">
            <div className="et_pb_module et_pb_divider et_pb_divider_0">
              <div className="et_pb_divider_internal" />
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h1>Contactar</h1>
              </div>
            </div>

            <div className="et_pb_module et_pb_divider et_pb_divider_1">
              <div className="et_pb_divider_internal" />
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  Anillo Periférico, col Villa Nueva antes de la entrada a la Kennedy, 50 metros
                  antes del puente peatonal que conecta la Kennedy y residencial Honduras, frente a
                  la parada de buses.
                </p>
                <p>
                  LUNES A VIERNES
                  <br />
                  8:00 AM- 5:00 PM
                  <br />
                  SABADO
                  <br />
                  8:00 AM- 2:00 PM
                  <br />
                  DOMINGO
                  <br />
                  CERRADO
                </p>
                <p> </p>
              </div>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_1_2 et_pb_column_1 et-last-child">
            <div
              className="et_pb_module et_pb_contact_form_container et_pb_contact_form_0 clearfix"
              id="et_pb_contact_form_0"
            >
              <h2 className="et_pb_contact_main_title">Envíanos un mensaje</h2>

              <div className="et_pb_contact">
                {sent && (
                  <p className="et-pb-contact-message">
                    ¡Gracias por escribirnos! Te contactaremos pronto.
                  </p>
                )}
                {error && <p className="et-pb-contact-message">{error}</p>}

                <form className="et_pb_contact_form clearfix" onSubmit={submit}>
                  <p className="et_pb_contact_field et_pb_contact_field_0 et_pb_contact_field_last">
                    <label className="et_pb_contact_form_label" htmlFor="et_pb_contact_name_0">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="et_pb_contact_name_0"
                      className="input"
                      name="et_pb_contact_name_0"
                      placeholder="Nombre"
                      required
                      value={values.name}
                      onChange={update('name')}
                    />
                  </p>

                  <p className="et_pb_contact_field et_pb_contact_field_1 et_pb_contact_field_half">
                    <label className="et_pb_contact_form_label" htmlFor="et_pb_contact_email_0">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="et_pb_contact_email_0"
                      className="input"
                      name="et_pb_contact_email_0"
                      placeholder="Correo Electrónico"
                      required
                      value={values.email}
                      onChange={update('email')}
                    />
                  </p>

                  <p className="et_pb_contact_field et_pb_contact_field_2 et_pb_contact_field_half et_pb_contact_field_last">
                    <label className="et_pb_contact_form_label" htmlFor="et_pb_contact_phone_0">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      id="et_pb_contact_phone_0"
                      className="input"
                      name="et_pb_contact_phone_0"
                      placeholder="Teléfono"
                      pattern="[0-9\s\-]*"
                      title="Sólo se permiten números."
                      required
                      value={values.phone}
                      onChange={update('phone')}
                    />
                  </p>

                  <p className="et_pb_contact_field et_pb_contact_field_3 et_pb_contact_field_last">
                    <label className="et_pb_contact_form_label" htmlFor="et_pb_contact_asunto_0">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="et_pb_contact_asunto_0"
                      className="input"
                      name="et_pb_contact_asunto_0"
                      placeholder="Asunto"
                      required
                      value={values.asunto}
                      onChange={update('asunto')}
                    />
                  </p>

                  <p className="et_pb_contact_field et_pb_contact_field_4 et_pb_contact_field_last">
                    <label className="et_pb_contact_form_label" htmlFor="et_pb_contact_message_0">
                      Mensaje
                    </label>
                    <textarea
                      id="et_pb_contact_message_0"
                      name="et_pb_contact_message_0"
                      className="et_pb_contact_message input"
                      placeholder="Mensaje"
                      required
                      value={values.message}
                      onChange={update('message')}
                    />
                  </p>

                  <div className="et_contact_bottom_container">
                    <div className="et_pb_contact_right">
                      <p className="clearfix">
                        <span className="et_pb_contact_captcha_question">
                          {captcha.first} + {captcha.second}
                        </span>{' '}
                        ={' '}
                        <input
                          type="text"
                          size="2"
                          className="input et_pb_contact_captcha"
                          name="et_pb_contact_captcha_0"
                          autoComplete="off"
                          required
                          value={values.captcha}
                          onChange={update('captcha')}
                        />
                      </p>
                    </div>
                    <button type="submit" className="et_pb_contact_submit et_pb_button" data-icon={ARROW}>
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="et_pb_row et_pb_row_1">
          {phones.map((phone, index) => (
            <div
              className={`et_pb_column et_pb_column_1_4 et_pb_column_${index + 2}${
                index === 3 ? ' et-last-child' : ''
              }`}
              key={phone}
            >
              <div
                className={`et_pb_module et_pb_blurb et_pb_blurb_${index} et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_light`}
              >
                <div className="et_pb_blurb_content">
                  <div className="et_pb_main_blurb_image">
                    <span className="et_pb_image_wrap">
                      <span className="et-pb-icon">&#xe090;</span>
                    </span>
                  </div>
                  <div className="et_pb_blurb_container">
                    <h3 className="et_pb_module_header">
                      <span>{phone}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {routeVideos.map((videoId, index) => (
          <div className={`et_pb_row et_pb_row_${index + 2}`} key={videoId}>
            <div
              className={`et_pb_column et_pb_column_4_4 et_pb_column_${index + 6} et-last-child`}
            >
              <div className={`et_pb_module et_pb_video et_pb_video_${index}`}>
                <div className="et_pb_video_box">
                  <iframe
                    title={`Como llegar a Tecnicentro DIDASA ruta ${index + 1}`}
                    src={`https://www.youtube.com/embed/${videoId}?feature=oembed`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="et_pb_row et_pb_row_5">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_9 et-last-child">
            <div className="et_pb_module et_pb_code et_pb_code_0" id="map">
              <div className="et_pb_code_inner">
                <iframe
                  title="Ubicación de Tecnicentro DIDASA"
                  src={MAP_SRC}
                  width="1200"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
