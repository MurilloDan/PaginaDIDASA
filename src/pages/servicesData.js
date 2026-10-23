/**
 * Contenido de las 7 páginas de servicio que comparten plantilla en tecdidasa.com.
 * `split` es el reparto de columnas: todas usan 2/5 + 3/5 salvo la de lubricantes,
 * que en el original está a 1/2 + 1/2.
 */
export const services = {
  'cambio-de-lubricantes-fluidos-y-filtros': {
    title: 'Cambio de Lubricantes',
    menuTitle: 'Cambio de lubricantes, fluidos y filtros',
    image: '/assets/servicio-lubricantes.jpg',
    split: 'half',
    items: [
      'Cambio de aceite de motor mineral o sintético según modelo y especificación del fabricante.',
      'Instalación de filtro de aceite, combustible, aire de motor, A/C.',
      'Revisión y rellenado de todos los niveles de fluído.',
      'Cambio de aceite de caja manual (ATF y CVT) y mecánica.',
      'Cambio de aceite de diferencial.',
    ],
  },
  'diagnosticos-mecanicos': {
    title: 'Diagnósticos Mecánicos',
    menuTitle: 'Diagnósticos Mecánicos',
    image: '/assets/servicio-diagnosticos.jpg',
    imagePosition: '50% 20%',
    items: [
      'Inspección de 25 puntos de revisión.',
      'Verificación del sistema de encendido y batería con reporte.',
      'Scanner con reporte en correo electrónico.',
      'Probador de fugas.',
      'Compresión del motor.',
    ],
  },
  'frenos-direccion-y-suspension': {
    title: 'Frenos, Dirección y Suspensión',
    menuTitle: 'Frenos, Dirección y Suspensión',
    image: '/assets/servicio-frenos.jpg',
    items: [
      'Inspección Completa de los componentes del Siste de Freno, Dirección y Suspensión y dictamen sobre vida útil.',
      'Rectificado de Discos y Tambores con Alta Presición.',
      'Limpieza General y regulación de Frenos, componente de dirección y suspensión.',
      'Cambio de Componentes del Sistema de Freno o Sistema de Dirección y Suspensión.',
      'Engrase a presión con máquina especializada.',
      'Revisión y reprogramación de los Sensores de ABS.',
    ],
  },
  'alineamiento-y-balanceo': {
    title: 'Alineamiento y Balanceo',
    menuTitle: 'Alineamiento y Balanceo',
    image: '/assets/servicio-alineamiento.jpg',
    imagePosition: '50% 30%',
    items: [
      'Alineamiento',
      'Balanceo',
      'Rotación de llantas',
      'Corrección de camber y caster',
      'Rectificado de Muñones',
    ],
  },
  'flush-y-aditivos': {
    title: 'FLUSH Y ADITIVOS',
    menuTitle: 'Flush y Aditivos',
    image: '/assets/servicio-flush.jpg',
    imagePosition: '40% 30%',
    items: ['Flush para limpieza de motor Diesel', 'Flush para limpieza de motor Gasolina'],
  },
  'limpieza-de-inyectores': {
    title: 'LIMPIEZA DE INYECTORES CON HERRAMIENTA',
    menuTitle: 'Limpieza de Inyectores',
    image: '/assets/servicio-inyectores.jpg',
    items: ['Limpieza de Inyectores Diesel', 'Limpieza de Inyectores Gasolina'],
  },
  'enderezado-y-pintura': {
    title: 'ENDEREZADO Y PINTURA',
    menuTitle: 'Enderezado y Pintura',
    image: '/assets/servicio-enderezado.jpg',
    imagePosition: '50% 60%',
    items: [
      'Pintura general o específica',
      'Pulido general',
      'Abolladuras',
      'Rayones',
      'Sustitución de partes',
      'Enderezado de chasis',
      'Pulido de focos',
    ],
  },
}
