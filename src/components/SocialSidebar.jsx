/** Barra social fija al borde izquierdo (plugin Fuse Social Floating Sidebar). */

const links = [
  {
    title: 'facebook',
    href: 'https://www.facebook.com/tecnicentrodidasa1',
    className: 'facebook-awesome-social',
    path: 'M17.5 8.5h-3v-2c0-.83.67-1 1-1h2V2.5h-2.5C11.9 2.5 11 4.4 11 5.6v2.9H9V12h2v9.5h3.5V12h2.4l.6-3.5z',
  },
  {
    title: 'instagram',
    href: 'https://www.instagram.com/tecnicentro_didasa/',
    className: 'instagram-awesome-social',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 5 5 .06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.15 3.3-1.7 4.8-5 5-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-3.3-.15-4.8-1.7-5-5C2.04 15.6 2 15.2 2 12s0-3.6.07-4.9c.15-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2zm0 3.1A6.7 6.7 0 1 0 12 18.7 6.7 6.7 0 0 0 12 5.3zm0 11a4.35 4.35 0 1 1 0-8.7 4.35 4.35 0 0 1 0 8.7zm6.9-11.2a1.56 1.56 0 1 1-3.13 0 1.56 1.56 0 0 1 3.13 0z',
  },
  {
    title: 'envelope',
    href: 'mailto:tecdidasa@gmail.com',
    className: 'envelope-awesome-social',
    path: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
  },
]

function SocialSidebar() {
  return (
    <div id="icon_wrapper">
      {links.map((link) => (
        <a
          key={link.title}
          className="fuse_social_icons_links"
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.title}
        >
          <i className={`awesome-social ${link.className}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={link.path} />
            </svg>
          </i>
        </a>
      ))}
    </div>
  )
}

export default SocialSidebar
