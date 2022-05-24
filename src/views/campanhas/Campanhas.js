import { cibFacebook, cibInstagram, cibLinkedin, cibTwitter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCol, CRow, CWidgetStatsD } from '@coreui/react'
import React from 'react'

const Campanhas = () => {
  return (
    <div>
      <CRow>
        <CCol xs={6}>
          <CWidgetStatsD
            className="mb-3"
            icon={<CIcon className="my-4 text-white" icon={cibFacebook} height={52} />}
            style={{ '--cui-card-cap-bg': '#3b5998' }}
            values={[
              { title: 'friends', value: '27K' },
              { title: 'feeds', value: '2.459' },
            ]}
          />
        </CCol>
        <CCol xs={6}>
          <CWidgetStatsD
            className="mb-3"
            icon={<CIcon className="my-4 text-white" icon={cibTwitter} height={52} />}
            style={{ '--cui-card-cap-bg': '#00aced' }}
            values={[
              { title: 'folowers', value: '97K' },
              { title: 'tweets', value: '7.316' },
            ]}
          />
        </CCol>
        <CCol xs={6}>
          <CWidgetStatsD
            className="mb-3"
            icon={<CIcon className="my-4 text-white" icon={cibLinkedin} height={52} />}
            style={{ '--cui-card-cap-bg': '#4875B4' }}
            values={[
              { title: 'folowers', value: '13K' },
              { title: 'Posts', value: '3.540' },
            ]}
          />
        </CCol>

        <CCol xs={6}>
          <CWidgetStatsD
            className="mb-3"
            icon={<CIcon className="my-4 text-white" icon={cibInstagram} height={52} />}
            style={{ '--cui-card-cap-bg': '#F9B115' }}
            values={[
              { title: 'folowers', value: '37K' },
              { title: 'posts', value: '3.190' },
            ]}
          />
        </CCol>
      </CRow>
    </div>
  )
}

export default Campanhas
