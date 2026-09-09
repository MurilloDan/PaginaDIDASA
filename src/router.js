/** Router mínimo por ruta: navega sin recargar y avisa a React con popstate. */

export function normalizePath(pathname) {
  const clean = pathname.replace(/\/+$/, '')
  return clean === '' ? '/' : clean
}

export function navigate(href) {
  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

/**
 * Lleva la vista al elemento del ancla. La página destino aún no está montada
 * cuando se navega, así que se reintenta unos cuadros antes de rendirse.
 */
function scrollToAnchor(id, attemptsLeft = 20) {
  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView()
    return
  }
  if (attemptsLeft > 0) {
    window.requestAnimationFrame(() => scrollToAnchor(id, attemptsLeft - 1))
    return
  }
  window.scrollTo(0, 0)
}

/** Repite el salto al ancla de la URL una vez que React ya montó la página. */
export function scrollToHashOnLoad() {
  const anchor = window.location.hash.slice(1)
  if (anchor) scrollToAnchor(anchor)
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

  const anchor = href.split('#')[1]
  if (anchor) scrollToAnchor(anchor)
  else window.scrollTo(0, 0)
}
