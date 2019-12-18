import React from 'react'
import { MyContext } from '../../context'
import { Card, Avatar } from 'antd';
import styled from 'styled-components'

const { Meta } = Card;

const StyledVisits = styled.nav`
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
        <h1>Visítanos</h1>
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
                  <Meta
                    avatar={<Avatar src="hands.png" key={i}/>}
                    title="Card title"
                    description={visit.description}
                    key={i}/>
                    
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