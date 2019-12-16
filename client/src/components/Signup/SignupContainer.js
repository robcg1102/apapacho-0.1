import React from 'react'
import { Form, Input, Icon, Button } from 'antd'
import styled from 'styled-components'
import { MyContext } from '../../context'

const StyledSign = styled.div`
  .form{
    width: 800px;
    display: flex;
    justify-content: center;
    padding: 50px;
  }

  .form select{
    border-radius: 15px;
    padding: 5px;
  }
`
export default function SignupContainer(props) {
  return (
    <StyledSign>
    <MyContext.Consumer>
      {context => (
        <div className="form">
          <Form
          onSubmit={e => {
            context.handleSignup(e)
            props.history.push('/login')
          }}
        >
          <Form.Item>
            <Input
              name="name"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Nombre de usuario"
              type="text"
              value={context.formSignup.name}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="email"
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Correo electrónico"
              type="email"
              value={context.formSignup.email}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="password"
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Contraseña"
              value={context.formSignup.password}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

         <Form.Item>
            <select name="typeUser" value={context.formSignup.typeUser} onChange={e => context.handleInput(e, 'formSignup')}>
              <option>Selecciona</option>
              <option value="Donante">Donante</option>
              <option value="Beneficiado">Beneficiado</option>
              <option value="Asilo">Asilo</option>
            </select>
            </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Registrar usuario
            </Button>
          </Form.Item>
        </Form>
        </div>
      )}
    </MyContext.Consumer>
    </StyledSign>
  )
}