import { useState } from 'react'
import SiteHeader from './components/SiteHeader.jsx'
import WhatsAppWidget from './components/WhatsAppWidget.jsx'
import { socialLinks } from './socialLinks.js'

function JoinTeam({ path }) {
  const [fileName, setFileName] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div id="page-container" className="join-team-page">
      <SiteHeader path={path} />
      <main className="join-team-main">
        <section className="join-team-hero">
          <div className="join-team-hero-inner">
            <span className="join-team-kicker">Oportunidades DIDASA</span>
            <h1>Únete a nuestro equipo</h1>
            <p>Sé parte de nuestra familia. Ponte en contacto con nosotros llenando el siguiente formulario.</p>
          </div>
        </section>

        <section className="join-team-section">
          <div className="join-team-content">
            <div className="join-team-intro">
              <span className="join-team-line" />
              <h2>Construye tu futuro<br /><em>con nosotros.</em></h2>
              <p>Buscamos personas comprometidas, responsables y apasionadas por el servicio automotriz. Cuéntanos sobre ti y el puesto que te interesa.</p>
            </div>

            <form className="join-team-form" onSubmit={handleSubmit}>
              {sent ? (
                <div className="join-team-success" role="status">
                  <span className="join-team-check">✓</span>
                  <h3>¡Gracias por contactarnos!</h3>
                  <p>Recibimos tu información y revisaremos tu perfil.</p>
                  <button type="button" onClick={() => setSent(false)}>Enviar otra solicitud</button>
                </div>
              ) : (
                <>
                  <div className="join-team-form-heading"><h3>Únete a nuestro equipo</h3><span>* Campos obligatorios</span></div>
                  <div className="join-team-fields">
                    <label>Nombre*<input required name="nombre" type="text" placeholder="Escribe aquí" /></label>
                    <label>Apellido*<input required name="apellido" type="text" placeholder="Escribe aquí" /></label>
                    <label>Correo electrónico*<input required name="correo" type="email" placeholder="Escribe aquí" /></label>
                    <label>Teléfono*<input required name="telefono" type="tel" placeholder="Escribe aquí" /></label>
                    <label>Ciudad*<input required name="ciudad" type="text" placeholder="Escribe aquí" /></label>
                    <label>Número de DNI*<input required name="dni" type="text" placeholder="Escribe aquí" /></label>
                    <label className="join-team-full">¿Por qué quiere trabajar con nosotros?*<textarea required name="motivo" placeholder="Escribe aquí" rows="4" /></label>
                    <label>Dirección*<input required name="direccion" type="text" placeholder="Escribe aquí" /></label>
                    <label>Seleccione el puesto que está optando*<select required name="puesto" defaultValue=""><option value="" disabled>Seleccionar</option><option>Mecánico automotriz</option><option>Asesor de servicio</option><option>Auxiliar de taller</option><option>Otro puesto</option></select></label>
                  </div>
                  <div className="join-team-upload"><h3>Subir Curriculum</h3><label className="join-team-dropzone"><input required type="file" accept=".gif,.jpeg,.png,.jpg,.doc,.docx,.pdf" onChange={(event) => setFileName(event.target.files?.[0]?.name || '')} /><span className="join-team-upload-icon">↑</span><strong>{fileName || 'Arrastrá el archivo hasta acá'}</strong><small>Tamaño máximo: 4.77 MB · Archivos permitidos: gif, jpeg, png, jpg, doc, docx, pdf</small><span className="join-team-file-button">Seleccionar archivo</span></label></div>
                  <button className="join-team-submit" type="submit">Enviar solicitud <span>→</span></button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <footer className="join-team-footer"><div className="join-team-footer-inner"><img src="/assets/didasa.png" alt="Tecnicentro DIDASA" /><div>{socialLinks.map((red) => (<a key={red.title} href={red.href} target="_blank" rel="noreferrer" aria-label={red.title}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={red.path} /></svg></a>))}</div><p>Copyright © tecdidasa.com</p></div></footer>
      <WhatsAppWidget />
    </div>
  )
}

export default JoinTeam
