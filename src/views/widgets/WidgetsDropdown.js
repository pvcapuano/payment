import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CCard,
  CCardBody,
  CCardSubtitle,
  CCardTitle,
  CCardText,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import {
  cilArrowBottom,
  cilArrowTop,
  cilOptions,
  cilCart,
  cilDollar,
  cilLoop,
  cilUser,
} from '@coreui/icons'

const WidgetsDropdown = () => {
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CCard className="mb-4">
          <CCardBody>
            <CCardTitle>
              <CIcon style={{ color: 'blue' }} size="lg" icon={cilCart} /> Vendas
            </CCardTitle>
            <CCardText className="text-center mb-4 fs-2 fw-bold">245</CCardText>
            <CCardSubtitle className="text-center">
              <CIcon style={{ color: 'green' }} icon={cilArrowTop} />
              12,67%
            </CCardSubtitle>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={6} lg={3}>
        <CCard className="mb-4">
          <CCardBody>
            <CCardTitle>
              <CIcon style={{ color: 'green' }} size="lg" icon={cilDollar} /> Faturamento
            </CCardTitle>
            <CCardText className="text-center mb-4 fs-2 fw-bold">
              <span className="fs-6 fw-bold">R$</span>
              12.167.943
            </CCardText>
            <CCardSubtitle className="text-center">
              <CIcon style={{ color: 'green' }} icon={cilArrowTop} />
              4,67%
            </CCardSubtitle>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm={6} lg={3}>
        <CCard className="mb-4">
          <CCardBody>
            <CCardTitle>
              <CIcon style={{ color: '#f9b115' }} size="lg" icon={cilLoop} /> Conversão
            </CCardTitle>
            <CCardText className="text-center mb-4 fs-2 fw-bold">12%</CCardText>
            <CCardSubtitle className="text-center">
              <CIcon style={{ color: 'red' }} icon={cilArrowBottom} />
              21,67%
            </CCardSubtitle>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm={6} lg={3}>
        <CCard className="mb-4">
          <CCardBody>
            <CCardTitle>
              <CIcon style={{ color: 'purple' }} size="lg" icon={cilUser} /> Leads
            </CCardTitle>
            <CCardText className="text-center mb-4 fs-2 fw-bold">432</CCardText>
            <CCardSubtitle className="text-center">
              <CIcon style={{ color: 'green' }} icon={cilArrowTop} />
              11,34%
            </CCardSubtitle>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
