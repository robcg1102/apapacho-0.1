import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'antd';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const StyledFooter = styled.nav`
  background-color: #9999ff;
  padding: 30px;
  
`

function Footer() {
  return (
    <StyledFooter>  
        <Row>
            <Col xs={{ span: 8, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
            </Col>
        </Row> 
    </StyledFooter>

  )
}

export default withRouter(Footer)