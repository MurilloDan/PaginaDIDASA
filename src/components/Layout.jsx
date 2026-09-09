import SiteHeader from './SiteHeader.jsx'
import WhatsAppWidget from './WhatsAppWidget.jsx'
import SocialSidebar from './SocialSidebar.jsx'

function Layout({ children, path }) {
  return (
    <div id="page-container">
      <SiteHeader path={path} />

      <div id="et-main-area">
        <div id="main-content">
          <article className="et_pb_post">
            <div className="entry-content">
              <div className="et-l et-l--post">
                <div className="et_builder_inner_content">{children}</div>
              </div>
            </div>
          </article>
        </div>

        <footer id="main-footer">
          <div id="footer-bottom">
            <div className="container clearfix">
              <ul className="et-social-icons">
                <li className="et-social-icon et-social-facebook">
                  <a
                    href="https://www.facebook.com/tecnicentrodidasa1"
                    className="icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="et-social-icon et-social-instagram">
                  <a
                    href="https://www.instagram.com/tecnicentro_didasa/"
                    className="icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
              <div id="footer-info">
                Copyright © tecdidasa.com{' '}
                <a
                  href="http://www.agenciasims.com/"
                  title="Visit AgenciaSIMS.com Hosting and Pro Web Designs"
                  target="_blank"
                  rel="noreferrer"
                  className="footerc"
                >
                  Designed by SIMS S. de R. L.
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <SocialSidebar />
      <WhatsAppWidget />
    </div>
  )
}

export default Layout
