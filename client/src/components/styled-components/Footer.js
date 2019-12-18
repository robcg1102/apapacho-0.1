import React from 'react'
import { Row, Col } from 'antd';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const StyledFooter = styled.nav`
  background-color: #9999ff;
  padding: 30px;
  text-align: center; 
  ul{
    list-style:none;
    padding-left:0;
    text-align: left;
  }

  a{
    color: black;
  }
 
`

function Footer() {
  return (
    <StyledFooter>  
        <Row>
            <Col xs={{ span: 8, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Registro de instituciones de atención a las personas adultas mayores
            <ul>
              <small>
              <a href="https://datos.gob.mx/busca/dataset/registro-de-instituciones-de-atencion-a-las-personas-adultas-mayores" target="_blank">
              <li> RIAPAM </li>
              </a>
              </small>
            </ul>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            INAPAM
            <ul>
              <small>
              <a href="https://www.gob.mx/inapam" target="_blank">
              <li> Ingresa al portal aquí </li>
              </a>
              <li> Módulos de afiliación al Inapam: <a href="https://datos.gob.mx/busca/dataset/modulos-de-afiliacion-al-inapam" target="_blank">Ingresa aquí</a></li>
              </small>
            </ul>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Albergues gratuitos
            <ul>
              <small>
              Teléfonos para información:
              <li> 5536 1145</li>
              <li> 5207 5063</li>
              </small>
            </ul>
            </Col>
        </Row> 

    </StyledFooter>

  )
}

export default withRouter(Footer)