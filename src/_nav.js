import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCart,
  cilChart,
  cilLayers,
  cilNotes,
  cilPeople,
  cilSettings,
  cilSpreadsheet,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Leads',
    to: '/leads',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Campanhas',
    to: '/campanhas',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendas',
    to: '/vendas',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Clientes',
    to: '/clientes',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Cobrança',
    to: '/cobranca',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Configurações',
    to: '/configuracoes',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
]

export default _nav
