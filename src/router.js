/** Router mínimo por ruta: navega sin recargar y avisa a React con popstate. */

export function normalizePath(pathname) {
  const clean = pathname.replace(/\/+$/, '')
  return clean === '' ? '/' : clean
}

export function navigate(href) {
  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

/** Intercepta los clics en enlaces internos para no recargar la página. */
export function handleInternalLinks(event) {
  const link = event.target.closest('a')
  if (!link) return
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return

  const href = link.getAttribute('href')
  if (!href || link.target === '_blank') return
  if (!href.startsWith('/') || href.startsWith('//')) return
  if (/\.[a-z0-9]+$/i.test(href)) return // PDFs y demás archivos

  event.preventDefault()
  navigate(href)
  window.scrollTo(0, 0)
}
