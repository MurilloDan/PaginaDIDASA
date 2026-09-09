import { useEffect, useState } from 'react'
import { normalizePath } from '../router.js'
import { socialLinks } from '../socialLinks.js'

const menuItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros/' },
  {
    label: 'Servicios',
    href: '#',
    children: [
      { label: 'Repuestos', href: '/repuestos/' },
      { label: 'Cambio de lubricantes, fluidos y filtros', href: '/cambio-de-lubricantes-fluidos-y-filtros/' },
      { label: 'Diagnósticos Mecánicos', href: '/diagnosticos-mecanicos/' },
      { label: 'Frenos, Dirección y Suspensión', href: '/frenos-direccion-y-suspension/' },
      { label: 'Alineamiento y Balanceo', href: '/alineamiento-y-balanceo/' },
      { label: 'Flush y Aditivos', href: '/flush-y-aditivos/' },
      { label: 'Limpieza de Inyectores', href: '/limpieza-de-inyectores/' },
      { label: 'Enderezado y Pintura', href: '/enderezado-y-pintura/' },
    ],
  },
  { label: 'Promociones', href: '/promociones/' },
  { label: 'Cotizar', href: '/cotizar/' },
  { label: 'Contáctenos', href: '/contactenos/' },
  { label: 'Únete al Equipo', href: '/unete-al-equipo/' },
]

function SiteHeader({ path }) {
  const [sticky, setSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isCurrent = (item) => {
    if (normalizePath(item.href) === path) return true
    return Boolean(item.children?.some((child) => normalizePath(child.href) === path))
  }

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="et-l et-l--header">
      <div className="et_pb_section et_pb_section_0_tb_header">
        <div className="et_pb_row et_pb_row_0_tb_header et_pb_gutters1">
          <div className="et_pb_column et_pb_column_1_4 et_pb_column_0_tb_header">
            <div className="et_pb_module et_pb_blurb et_pb_blurb_0_tb_header et_pb_text_align_left et_pb_blurb_position_left">
              <div className="et_pb_blurb_content">
                <div className="et_pb_main_blurb_image">
                  <span className="et_pb_image_wrap">
                    <span className="et-pb-icon">&#xe00b;</span>
                  </span>
                </div>
                <div className="et_pb_blurb_container">
                  <h4 className="et_pb_module_header">Llamanos:</h4>
                  <div className="et_pb_blurb_description">
                    <p>
                      <a href="tel:+50497049138">+504 97049138</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_1_4 et_pb_column_1_tb_header">
            <div className="et_pb_module et_pb_blurb et_pb_blurb_1_tb_header et_pb_text_align_left et_pb_blurb_position_left">
              <div className="et_pb_blurb_content">
                <div className="et_pb_main_blurb_image">
                  <span className="et_pb_image_wrap">
                    <span className="et-pb-icon">&#xe010;</span>
                  </span>
                </div>
                <div className="et_pb_blurb_container">
                  <h4 className="et_pb_module_header">Contactar</h4>
                  <div className="et_pb_blurb_description">
                    <p>tecdidasa@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="et_pb_column et_pb_column_1_2 et_pb_column_2_tb_header et-last-child">
            <div className="header-top-actions">
              <ul className="header-social">
                {socialLinks.map((red) => (
                  <li key={red.title}>
                    <a href={red.href} target="_blank" rel="noreferrer" aria-label={red.title}>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d={red.path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="et_pb_button_module_wrapper et_pb_button_0_tb_header_wrapper et_pb_button_alignment_right et_pb_module">
                <a className="et_pb_button et_pb_button_0_tb_header" href="#calendario">
                  Haz una cita!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`et_pb_section et_pb_section_1_tb_header et_pb_section--with-menu${
          sticky ? ' et_pb_sticky' : ''
        }`}
      >
        <div className="et_pb_row et_pb_row_1_tb_header et_pb_gutters1 et_pb_row--with-menu">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_3_tb_header et-last-child">
            <div className="et_pb_module et_pb_menu et_pb_menu_0_tb_header et_pb_text_align_right">
              <div className="et_pb_menu_inner_container">
                <div className="et_pb_menu__logo-wrap">
                  <div className="et_pb_menu__logo">
                    <a href="/">
                      <img src="/assets/didasa.png" alt="Tecnicentro DIDASA" id="logo" />
                    </a>
                  </div>
                </div>

                <div className="et_pb_menu__wrap">
                  <div className="et_pb_menu__menu">
                    <nav className="nav">
                      <ul>
                        {menuItems.map((item) => (
                          <li
                            key={item.label}
                            className={`menu-item${isCurrent(item) ? ' current-menu-item' : ''}${
                              item.children ? ' menu-item-has-children' : ''
                            }`}
                          >
                            <a href={item.href}>{item.label}</a>
                            {item.children && (
                              <ul className="sub-menu">
                                {item.children.map((child) => (
                                  <li className="menu-item" key={child.label}>
                                    <a href={child.href}>{child.label}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>

                  <div className="et_mobile_nav_menu">
                    <button
                      type="button"
                      className="mobile_menu_bar"
                      aria-label="Abrir menú"
                      aria-expanded={mobileOpen}
                      onClick={() => setMobileOpen((open) => !open)}
                    >
                      {mobileOpen ? '' : 'a'}
                    </button>
                  </div>
                </div>

                {mobileOpen && (
                  <ul className="et_mobile_menu">
                    {menuItems.map((item) => (
                      <li
                        key={item.label}
                        className={`menu-item${isCurrent(item) ? ' current-menu-item' : ''}`}
                      >
                        <a href={item.href} onClick={() => setMobileOpen(false)}>
                          {item.label}
                        </a>
                        {item.children && (
                          <ul className="sub-menu">
                            {item.children.map((child) => (
                              <li className="menu-item" key={child.label}>
                                <a href={child.href} onClick={() => setMobileOpen(false)}>
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
