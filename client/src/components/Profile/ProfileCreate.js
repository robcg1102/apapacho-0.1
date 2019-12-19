import React from 'react'
import { Form, Input, Icon, Button } from 'antd'
import { MyContext } from '../../context'
import styled from 'styled-components'

const StyledCreate = styled.div`
display: flex;
justify-content: center;
font-weight: bolder;
  .title{
    font-size: 30px;
    background-color: rgba(0, 51, 77, 0.4);
    border-radius: 0 30px;
    padding: 30px;
  }
  .form{
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    background-color: rgba(0,0,0,0.4);
    border-radius: 15px;
    margin: 15px;
    height: 400px;
  }
`


export default function ProfileCreate(props) {
    return (
      <StyledCreate>
      <MyContext.Consumer>
        {context => (
        <div className="form">
        <Form
          onSubmit={e => {
            context.handleComment(e)
            props.history.push('/profile')
          }}
        >
          <Form.Item>
          <div>Escribe aquí lo que requieres: </div>
            <Input
              name="comment"
              prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="¿Qué necesitas?"
              type="text"
              value={context.commentForm.comment}
              onChange={e => context.handleInput(e, 'commentForm')}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Publicar
            </Button>
          </Form.Item>
        </Form>
        </div>
      )}
      </MyContext.Consumer>
      </StyledCreate>
    )
  }