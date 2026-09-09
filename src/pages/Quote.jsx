import { useState } from 'react'
import './Quote.css'

const services = [
  'Mantenimiento Preventivo',
  'Cambio de Lubricantes y Fluídos',
  'Diagnósticos mecánicos',
  'Frenos',
  'Dirección y suspensión',
  'Engrase General',
  'Limpieza de Inyectores',
  'Rectificado de discos y tambores',
  'Alineamiento y balanceo',
  'Mantenimiento Correctivo',
  'Mecánica General',
  'Sistema Hidráulico',
  'Sistema de enfriamiento',
  'Sistema de encendido / Batería',
]

const contactMethods = ['Celular', 'Correo Electronico', 'Whatsapp']

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 1H8a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm-4 21a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4-4H8V4h8v14z" />
    </svg>
  )
}

function PencilIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    </svg>
  )
}

const emptyForm = {
  nombre: '',
  apellido: '',
  tipoCliente: 'Personal',
  empresa: '',
  email: '',
  telefono: '',
  servicios: [],
  otroServicio: false,
  otroServicioTexto: '',
  contacto: '',
  comentario: '',
}

function Quote() {
  const [values, setValues] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  const update = (field) => (event) =>
    setValues((current) => ({ ...current, [field]: event.target.value }))

  const toggleService = (service) =>
    setValues((current) => ({
      ...current,
      servicios: current.servicios.includes(service)
        ? current.servicios.filter((item) => item !== service)
        : [...current.servicios, service],
    }))

  const submit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="page-cotizar">
      <div className="et_pb_section et_pb_section_0 et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0 et-last-child">
            <div className="et_pb_module et_pb_code et_pb_code_0">
              <div className="et_pb_code_inner">
                <div className="ipt_fsqm_form_wrap" id="ipt_fsqm_form_wrap_5">
                  {sent ? (
                    <div className="ipt_fsqm_form_message_success">
                      <h3>Su cotizacion fue enviada...</h3>
                      <p>
                        Gracias por contactarnos, un asesor de ventas lo contactara en las proximas
                        24 horas.
                      </p>
                    </div>
                  ) : (
                    <form className="ipt_fsqm_form" id="ipt_fsqm_form_5" onSubmit={submit}>
                      <div className="ipt_fsqm_form_body">
                        <div className="ipt-form-header">
                          <span className="ipt-form-icon">
                            <MailIcon />
                          </span>
                          <h3>Cotización</h3>
                          <span className="ipt-form-badge">
                            Llene el formulario y un asesor lo contactara en las proximas 24 horas.
                          </span>
                        </div>

                        <div className="ipt-field-row">
                          <div className="ipt-field">
                            <div className="ipt-input-wrap">
                              <PersonIcon />
                              <input
                                type="text"
                                placeholder="Nombre"
                                aria-label="Nombre"
                                value={values.nombre}
                                onChange={update('nombre')}
                              />
                            </div>
                          </div>
                          <div className="ipt-field">
                            <div className="ipt-input-wrap">
                              <PersonIcon />
                              <input
                                type="text"
                                placeholder="Apellido"
                                aria-label="Apellido"
                                value={values.apellido}
                                onChange={update('apellido')}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="ipt-field">
                          <span className="ipt-label">
                            Tipo de Cliente <span className="ipt-required">*</span>
                          </span>
                          <div className="ipt-options">
                            {['Personal', 'Empresa'].map((option) => (
                              <label className="ipt-option" key={option}>
                                <input
                                  type="radio"
                                  name="tipo_cliente"
                                  value={option}
                                  checked={values.tipoCliente === option}
                                  onChange={update('tipoCliente')}
                                />
                                <span className="ipt-mark ipt-mark--radio" />
                                {option}
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* La lógica condicional del original muestra este campo solo para empresas. */}
                        {values.tipoCliente === 'Empresa' && (
                          <div className="ipt-field">
                            <span className="ipt-label">Nombre de Empresa y RTN</span>
                            <span className="ipt-subtitle">miempresa S. de R.L. 0501198587878</span>
                            <div className="ipt-input-wrap">
                              <BuildingIcon />
                              <input
                                type="text"
                                placeholder="Escribe aquí"
                                aria-label="Nombre de Empresa y RTN"
                                value={values.empresa}
                                onChange={update('empresa')}
                              />
                            </div>
                          </div>
                        )}

                        <div className="ipt-field">
                          <div className="ipt-input-wrap">
                            <MailIcon />
                            <input
                              type="email"
                              placeholder="Correo Electronico"
                              aria-label="Correo Electronico"
                              value={values.email}
                              onChange={update('email')}
                            />
                          </div>
                        </div>

                        <div className="ipt-field">
                          <div className="ipt-input-wrap">
                            <PhoneIcon />
                            <input
                              type="tel"
                              placeholder="Teléfono"
                              aria-label="Teléfono"
                              value={values.telefono}
                              onChange={update('telefono')}
                            />
                          </div>
                        </div>

                        <div className="ipt-field">
                          <span className="ipt-label">
                            ¿Que tipo de Servicio necesita? <span className="ipt-required">*</span>
                          </span>
                          <span className="ipt-subtitle">Puede seleccionar varios servicios</span>
                          <div className="ipt-options">
                            {services.map((service) => (
                              <label className="ipt-option" key={service}>
                                <input
                                  type="checkbox"
                                  checked={values.servicios.includes(service)}
                                  onChange={() => toggleService(service)}
                                />
                                <span className="ipt-mark ipt-mark--check" />
                                {service}
                              </label>
                            ))}
                            <label className="ipt-option">
                              <input
                                type="checkbox"
                                checked={values.otroServicio}
                                onChange={() =>
                                  setValues((current) => ({
                                    ...current,
                                    otroServicio: !current.otroServicio,
                                  }))
                                }
                              />
                              <span className="ipt-mark ipt-mark--check" />
                              Otro: Escriba lo que necesita
                            </label>
                            {values.otroServicio && (
                              <div className="ipt-option-other">
                                <div className="ipt-input-wrap">
                                  <PencilIcon />
                                  <input
                                    type="text"
                                    placeholder="Escribe aquí"
                                    aria-label="Otro servicio"
                                    value={values.otroServicioTexto}
                                    onChange={update('otroServicioTexto')}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="ipt-field">
                          <span className="ipt-label">
                            ¿Como desea ser contactado? <span className="ipt-required">*</span>
                          </span>
                          <div className="ipt-options">
                            {contactMethods.map((option) => (
                              <label className="ipt-option" key={option}>
                                <input
                                  type="radio"
                                  name="contacto"
                                  value={option}
                                  checked={values.contacto === option}
                                  onChange={update('contacto')}
                                />
                                <span className="ipt-mark ipt-mark--radio" />
                                {option}
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="ipt-field">
                          <div className="ipt-input-wrap ipt-input-wrap--top">
                            <PencilIcon />
                            <textarea
                              placeholder="¿Desea agregar algo mas?"
                              aria-label="¿Desea agregar algo mas?"
                              value={values.comentario}
                              onChange={update('comentario')}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="ipt_fsqm_form_button_container">
                        <button type="submit" className="ipt-form-submit" id="ipt_fsqm_form_5_button_submit">
                          Confirmar
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote
