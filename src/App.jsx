import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Quote from './pages/Quote.jsx'
import Promos from './pages/Promos.jsx'
import Repuestos from './pages/Repuestos.jsx'
import ServicePage from './pages/ServicePage.jsx'
import { services } from './pages/servicesData.js'
import { handleInternalLinks, normalizePath } from './router.js'

const routes = {
  '/': { component: Home, title: 'Inicio - Tecnicentro DIDASA' },
  '/sobre-nosotros': { component: About, title: 'Sobre Nosotros - Tecnicentro DIDASA' },
  '/contactenos': { component: Contact, title: 'Contáctenos - Tecnicentro DIDASA' },
  '/cotizar': { component: Quote, title: 'Cotizar - Tecnicentro DIDASA' },
  '/promociones': { component: Promos, title: 'Promociones - Tecnicentro DIDASA' },
  '/repuestos': { component: Repuestos, title: 'Repuestos - Tecnicentro DIDASA' },
}

// Las 7 páginas de servicio comparten plantilla y sólo cambian de contenido.
for (const [slug, service] of Object.entries(services)) {
  routes[`/${slug}`] = {
    component: () => <ServicePage slug={slug} />,
    title: `${service.menuTitle} - Tecnicentro DIDASA`,
  }
}

function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    document.addEventListener('click', handleInternalLinks)
    return () => {
      window.removeEventListener('popstate', onPopState)
      document.removeEventListener('click', handleInternalLinks)
    }
  }, [])

  const route = routes[path] ?? routes['/']

  useEffect(() => {
    document.title = route.title
  }, [route])

  const Page = route.component

  return (
    <Layout path={path}>
      <Page />
    </Layout>
  )
}

export default App
