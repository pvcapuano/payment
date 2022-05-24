import React from 'react'

import { CButton, CButtonGroup, CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { cilCircle, cilDollar, cilFilter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <>
      <CRow className="mb-4 ">
        <CCol sm={12} className="d-flex justify-content-between  align-items-start ">
          <h3>Indicadores</h3>

          <CButton color="success" className="float-end btn-sm">
            <CIcon icon={cilFilter} />
            Filtrar
          </CButton>
        </CCol>
      </CRow>

      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h5 id="traffic" className="card-title mb-0">
                <CIcon style={{ color: 'green' }} size="lg" icon={cilDollar} /> Faturamento vs Custo
                Fixo
              </h5>
            </CCol>
            <CCol sm={7} className="d- d-md-block">
              <CButtonGroup className="float-end me-3">
                <h7 className="card-title mb-0">
                  <CIcon style={{ color: 'green' }} size="sm" icon={cilCircle} /> Faturamento
                </h7>
                <h7 className="p-1"> </h7>
                <h7 className="card-title mb-0">
                  <CIcon style={{ color: 'red' }} size="sm" icon={cilCircle} /> Custo Fixo
                </h7>
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-danger'), 10),
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 2,
                  data: [
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                  ],
                  fill: true,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                    random(0, 400),
                  ],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  scales: {
                    min: 0,
                    max: 400,
                    ticks: {
                      // forces step size to be 50 units
                      stepSize: 50,
                    },
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
