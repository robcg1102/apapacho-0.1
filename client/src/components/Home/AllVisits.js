import React from 'react'
import { MyContext } from '../../context'
import { Card, Avatar } from 'antd';
import styled from 'styled-components'

const { Meta } = Card;

const StyledVisits = styled.nav`
text-align: center;
  .title{
    font-size: 30px;
    background-color: rgba(0, 51, 77, 0.4);
    border-radius: 0 30px;
    padding: 30px;
  }
  .visits{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

export default class AllVisits extends React.Component {

  render() {
    return (
      <MyContext.Consumer>
      {context => (
      <StyledVisits>
        <div className="title">
            <h2>Visita a nuestros beneficiados</h2>
        </div>
        <div className="visits">
          
          {context.visitData.map((visit, i)=>{
            return (
              <Card
                  style={{ width: 300, margin: 15, borderRadius: 30, border: "double 2px black"}}
                  cover={
                    <img
                      alt="example"
                      src={visit.photoVisit}
                    key={i}
                    style={{ borderRadius: 30}}/>
                  }
                 
                  key={i}>
                    <div><strong>¿Cuándo?</strong></div>
                  <Meta
                    avatar={<Avatar src="hands.png" key={i}/>}
                    title={visit.date}
                    description={visit.description}
                    key={i}/>
                  <div><strong>¿Quién requiere la visita?</strong>{visit.userID.name}</div>
                  <div><strong>Contáctalo:</strong> {visit.userID.email}</div>
              </Card>
            )
          })}
        </div>
      </StyledVisits>
      )}
    </MyContext.Consumer>
    )
}
}