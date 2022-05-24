import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import React, { useState } from 'react'

const Clientes = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CRow className="mb-4 ">
        <CCol sm={12} className="d-flex justify-content-between  align-items-start ">
          <h3>Cadastrar cliente</h3>
        </CCol>
      </CRow>

      <CForm className="row g-3">
        <CCol md={12}>
          <CFormInput type="email" id="inputEmail4" label="Nome" placeholder="Nome" />
        </CCol>
        <CCol md={12}>
          <CFormInput type="password" id="inputPassword4" label="Senha" placeholder="Senha" />
        </CCol>
        <CCol xs={12}>
          <CFormInput id="inputAddress" label="Endereço" placeholder="Endereço" />
        </CCol>

        <CCol md={6}>
          <CFormInput id="inputCity" label="Cidade" />
        </CCol>
        <CCol md={4}>
          <CFormSelect id="inputState" label="Estado">
            <option>...</option>
            <option>Rio de Janeiro</option>
            <option>São Paulo</option>
            <option>Rio Grande do Sul</option>
            <option>Ceará</option>
          </CFormSelect>
        </CCol>
        <CCol md={2}>
          <CFormInput id="inputZip" label="Cep" />
        </CCol>

        <CCol xs={12}>
          <CButton onClick={() => setVisible(!visible)} color="success">
            Salvar
          </CButton>
          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
              <CModalTitle>Cadastrar cliente</CModalTitle>
            </CModalHeader>
            <CModalBody>Você confirma o cadastro do cliente?</CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Fechar
              </CButton>
              <CButton color="primary " onClick={() => setVisible(false)}>
                Salvar alterações
              </CButton>
            </CModalFooter>
          </CModal>
        </CCol>
      </CForm>
    </>
  )
}

export default Clientes
