import React from 'react'
import { Form, Input, Icon, Button } from 'antd'
import { MyContext } from '../../context'

export default class LoginContainer extends React.Component {
  componentDidMount() {
    if (this.context.loggedUser) {
      return this.props.history.push('/profile')
    }
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Form
            onSubmit={e => {
              context.handleLogin(e, () => {
                this.props.history.push('/profile')
              })
            }}
          >
            <Form.Item>
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
        )}
      </MyContext.Consumer>
    )
  }
}

LoginContainer.contextType = MyContext