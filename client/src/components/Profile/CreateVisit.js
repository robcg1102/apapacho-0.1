import React from 'react'
import { Form, Input, Icon, Button } from 'antd'
import { MyContext } from '../../context'
import styled from 'styled-components'

const StyledVisit = styled.div`
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


export default function CreateVisit(props) {
    return (
      <StyledVisit>
      <MyContext.Consumer>
        {context => (
        <div className="form">
        <Form
          onSubmit={e => {
            context.handleVisit(e)
            props.history.push('/profile')
          }}
        >
          <Form.Item>
            <div>Describe aquí un poco del por qué requieres visita</div>
            <Input
              name="description"
              prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Describe la visita que requieres"
              type="text"
              value={context.visitForm.description}
              onChange={e => context.handleInput(e, 'visitForm')}
              required
            />
          </Form.Item>

          <div>
            <label>Selecciona la fecha en la que requieres la visita</label> <br></br>
            <input name="date" type="date" min="2019-12-19" value={context.visitForm.date} onChange={e => context.handleInput(e, 'visitForm')} required placeholder=""/>
          </div>


          <Form.Item>
            <Button type="primary" htmlType="submit">
              Publicar
            </Button>
          </Form.Item>
        </Form>
        </div>
      )}
      </MyContext.Consumer>
      </StyledVisit>
    )
  }