import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Quote from './pages/Quote.jsx'
import Promos from './pages/Promos.jsx'
import { handleInternalLinks, normalizePath } from './router.js'

const routes = {
  '/': { component: Home, title: 'Inicio - Tecnicentro DIDASA' },
  '/contactenos': { component: Contact, title: 'Contáctenos - Tecnicentro DIDASA' },
  '/cotizar': { component: Quote, title: 'Cotizar - Tecnicentro DIDASA' },
  '/promociones': { component: Promos, title: 'Promociones - Tecnicentro DIDASA' },
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
