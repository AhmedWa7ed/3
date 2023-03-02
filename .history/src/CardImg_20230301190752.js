import React from 'react'
import { Card ,  } from 'react-bootstrap'

const CardImg = () => {
  return (
    <div>
    <CRow>
  <CCol sm={6}>
    <CCar>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>
          With supporting text below as a natural lead-in to additional content.
        </CCardText>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCar>
  </CCol>
  <CCol sm={6}>
    <CCard>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>
          With supporting text below as a natural lead-in to additional content.
        </CCardText>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>
      
    </div>
  )
}
export default Cardimg