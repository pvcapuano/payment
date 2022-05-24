import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Leads = React.lazy(() => import('./views/leads/Leads'))
const Clientes = React.lazy(() => import('./views/clientes/Clientes'))
const Campanhas = React.lazy(() => import('./views/campanhas/Campanhas'))
const Vendas = React.lazy(() => import('./views/vendas/Vendas'))
const Cobranca = React.lazy(() => import('./views/cobranca/Cobranca'))
const Usuarios = React.lazy(() => import('./views//configuracoes/usuarios/Usuarios'))
const Permissoes = React.lazy(() => import('./views//configuracoes/permissoes/Permissoes'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/leads', name: 'Leads', element: Leads },
  { path: '/clientes', name: 'Clientes', element: Clientes },
  { path: '/campanhas', name: 'Campanhas', element: Campanhas },
  { path: '/vendas', name: 'Vendas', element: Vendas },
  { path: '/cobranca', name: 'Cobranca', element: Cobranca },
  { path: '/configuracoes/usuarios', name: 'Usuarios', element: Usuarios },
  { path: '/configuracoes/permissoes', name: 'Permissoes', element: Permissoes },
]

export default routes
