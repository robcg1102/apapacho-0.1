import React from 'react'
import styled from 'styled-components'
import { Form, Input, Icon, Button } from 'antd'
import { MyContext } from '../../context'

const StyledLog = styled.div`
font-weight: bolder;
  display: flex;
  justify-content: space-around;
  .login{ 
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
export default class LoginContainer extends React.Component {
  componentDidMount() {
    if (this.context.loggedUser) {
      return this.props.history.push('/profile')
    }
  }

  render() {
    return (
      <StyledLog>
      <MyContext.Consumer>
        {context => (
          <>
          <Form className="login"
            onSubmit={e => {
              context.handleLogin(e, () => {
                this.props.history.push('/profile')
              })
            }}
          >
            <Form.Item>
              <div>Ingresa tu correo: </div>
              <Input
                name="email"
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.40)' }} />
                }
                placeholder="Email"
                type="email"
                value={context.loginForm.email}
                onChange={e => context.handleInput(e, 'loginForm')}
              />
            </Form.Item>

            <Form.Item>
            <div>Ingresa tu contraseña: </div>
              <Input
                name="password"
                type="password"
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.40)' }} />
                }
                placeholder="Password"
                value={context.loginForm.password}
                onChange={e => context.handleInput(e, 'loginForm')}
              />
            </Form.Item>
            
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ background: '#9999ff' }}>
                Login
              </Button>
            </Form.Item>
          </Form>
          <img src="https://cdn2.iconfinder.com/data/icons/miscellaneous-46-line/128/enrollment_nomination_recruitment_registration_agreement_-512.png" alt="login"></img>
          </>
        )}
      </MyContext.Consumer>
      </StyledLog>
    )
  }
}

LoginContainer.contextType = MyContext