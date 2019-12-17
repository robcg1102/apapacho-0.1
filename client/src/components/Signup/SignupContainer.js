import React from 'react'
import { Form, Input, Icon, Button } from 'antd'
import styled from 'styled-components'
import { MyContext } from '../../context'

const StyledSign = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bolder;
  background-image: url("https://www.pandasecurity.com/mediacenter/src/uploads/2015/10/grandparents-computer-1024x576.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  margin: 0;
  padding: 0;
  height: 570px;
  .form{
    width: 500px;
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: rgba(0,0,0,0.4);
    border-radius: 15px;
    margin: 15px;
  }

  .form select{
    border-radius: 15px;
    padding: 5px;
  }

  .welcome{
    padding: 20px;
    margin: 15px;
    font-size: 50px;
  }

`
export default function SignupContainer(props) {
  return (
    <StyledSign>
    <MyContext.Consumer>
      {context => (
        <>
        <div className="form">
          <Form
          onSubmit={e => {
            context.handleSignup(e)
            props.history.push('/login')
          }}
        >
          <Form.Item>
          Nombre de usuario <br></br>
            <Input
              name="name"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Nombre de usuario"
              type="text"
              value={context.formSignup.name}
              onChange={e => context.handleInput(e, 'formSignup')}
              required
            />
          </Form.Item>

          <Form.Item>
          Correo electrónico <br></br>
            <Input
              name="email"
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Correo electrónico"
              type="email"
              value={context.formSignup.email}
              onChange={e => context.handleInput(e, 'formSignup')}
              required
            />
          </Form.Item>

          <Form.Item>
            Contraseña <br></br>
            <Input
              name="password"
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Contraseña"
              value={context.formSignup.password}
              onChange={e => context.handleInput(e, 'formSignup')}
              required
            />
          </Form.Item>

         <Form.Item>
           Selecciona tu tipo de usuario: 
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
        <div className="welcome">
          Crea tu cuenta llenando unos sencillos campos.
        </div>
        </>
      )}
    </MyContext.Consumer>
    </StyledSign>
  )
}