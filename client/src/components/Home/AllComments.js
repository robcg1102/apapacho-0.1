import React from 'react'
import { MyContext } from '../../context'
import { Card, Avatar } from 'antd';
import styled from 'styled-components'

const { Meta } = Card;

const StyledComments = styled.nav`
text-align: center;
  .title{
    font-size: 30px;
    background-color: rgba(0, 51, 77, 0.4);
    border-radius: 0 30px;
    padding: 30px;
  }
  .comments{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .card{
    text-align: left;
  }
`

export default class AllComments extends React.Component {

  render() {
    return (
    
        <MyContext.Consumer>
        {context => (
        <StyledComments>
          <div className="title">
            <h2>Nuestros beneficiados requieren</h2>
          </div>
          
          <div className="comments">
            
            {context.commentData.map((info, i)=>{
              return (
                <Card
                    className="card"
                    style={{ width: 300, margin: 15, borderRadius: 30, border: "double 2px black"}}
                    cover={
                      <img
                        alt="example"
                        src={info.photoComment}
                      key={i}
                      style={{ borderRadius: 30}}/>
                    }
                   
                    key={i}>
                      Necesita
                    <Meta
                      avatar={<Avatar src="hands.png" key={i}/>}
                      title= {info.comment}
                      description= ""
                      key={i}/>
                    <div>¿Quíen? {info.userID.name}</div>
                    <div>Tipo de cuenta {info.userID.typeUser}</div>  
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