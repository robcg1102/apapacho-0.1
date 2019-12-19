import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';

const StyledHome = styled.div`

  font-size: 50px;
  margin: 0;
  padding: 0;
  text-align: center;
  .logo{
    width: 100px;
  }
  .header{
    padding: 10px;
  }
  .subf ul{
    font-size: 28px;
  }
  ul{
    list-style-position: inside;
    padding-left:0;
    text-align: left;
  }
  .description{
    font-size: 30px;
  }
`

export default function Home() {
  
  return (
    <StyledHome>
      <>
      <div className="header">
        <div>¡Bienvenido a </div> 
        <img className="logo" src="hands.png" alt="logo"></img> <br></br>
        <div> Apapacho! </div>
        <div className="description"> Un sitio para brindar cariño y compañía a <br/>personas de la tercera edad</div> 
        <img src="https://www.redadultomayor.org/wp-content/uploads/2017/07/adultos-tercera-edad.jpg_594723958.jpg" alt="home"></img>
      </div>
      <br></br>
      <hr width="85%"></hr>
      <div>
        Dependiende de la cuenta que <br/>elijas al registrarte, podrás:  
      <Row  className="subf">
        <Col xs={{ span: 8, offset: 1 }} lg={{ span: 6, offset: 1 }}>
          <h6><strong>Donante</strong></h6>
          <ul>
            
            <li>Verificar los artículos que solicitan nuestros beneficiados</li>
            <li>Ver qué día les gustaría recibir una visita </li>
            
          </ul>
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <h6><strong>Beneficiado</strong></h6>
          <ul>
            
            <li>Solicitar artículos</li>
            <li>Solicitar visitas</li>
            
          </ul>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <h6><strong>Asilo</strong></h6>
          <ul>
            
            <li>Solicitar artículos para tus beneficiados</li>
            <li>Solicitar artículos para tus beneficiados</li>
            
          </ul>
        </Col>
      </Row>
      </div>
      </>
    </StyledHome>
  )
}