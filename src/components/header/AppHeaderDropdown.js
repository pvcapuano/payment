import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

import avatar8 from './../../assets/images/avatars/8.png'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Conta</CDropdownHeader>
        <CDropdownItem href="#">Meus Dados</CDropdownItem>
        <CDropdownItem href="#">Alterar Senha</CDropdownItem>
        <CDropdownItem href="#">Planos</CDropdownItem>
        <CDropdownItem href="#">Serviços</CDropdownItem>
        <CDropdownItem href="#">Dúvidas Frequentes</CDropdownItem>
        <CDropdownItem href="#">Contato</CDropdownItem>

        <CDropdownDivider />
        <CDropdownItem href="#">Sair</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
