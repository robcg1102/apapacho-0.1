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
`

export default function Home() {
  
  return (
    <StyledHome>
      <>
      <div className="header">
        <div>¡Bienvenido! </div> 
        <img className="logo" src="hands.png" alt="logo"></img> <br></br>
        <img src="https://www.redadultomayor.org/wp-content/uploads/2017/07/adultos-tercera-edad.jpg_594723958.jpg" alt="home"></img>
      </div>
      <br></br>
      <hr width="85%"></hr>
      <div>
        Elige una cuenta 
      <Row  className="subf">
        <Col xs={{ span: 8, offset: 1 }} lg={{ span: 6, offset: 1 }}>
          <h6><strong>Donante</strong></h6>
          <ul>
            <small>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
            </small>
          </ul>
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <h6><strong>Beneficiado</strong></h6>
          <ul>
            <small>
            <li>Solicitar artículos</li>
            <li>Solicitar visitas</li>
            </small>
          </ul>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <h6><strong>Asilo</strong></h6>
          <ul>
            <small>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
            </small>
          </ul>
        </Col>
      </Row>
      </div>
      </>
    </StyledHome>
  )
}