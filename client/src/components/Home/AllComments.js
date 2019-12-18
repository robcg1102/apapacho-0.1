import React from 'react'
import { MyContext } from '../../context'
import { Card, Avatar } from 'antd';
import styled from 'styled-components'

const { Meta } = Card;

const StyledComments = styled.nav`
  .comments{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

export default class AllComments extends React.Component {

  render() {
    return (
    
        <MyContext.Consumer>
        {context => (
        <StyledComments>
          <h1>Necesitamos</h1>
          <div className="comments">
            
            {context.commentData.map((info, i)=>{
              return (
                <Card
                    style={{ width: 300, margin: 15, borderRadius: 30, border: "double 2px black"}}
                    cover={
                      <img
                        alt="example"
                        src={info.photoComment}
                      key={i}
                      style={{ borderRadius: 30}}/>
                    }
                   
                    key={i}>
                    <Meta
                      avatar={<Avatar src="hands.png" key={i}/>}
                      title="Card title"
                      description={info.comment}
                      key={i}/>
                      
                </Card>
              )
            })}
          </div>
        </StyledComments>
        )}
      </MyContext.Consumer>
    )
}
}