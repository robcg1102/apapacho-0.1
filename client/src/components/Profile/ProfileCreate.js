import React from 'react'
import { Form, Input, Icon, Button } from 'antd'
import { MyContext } from '../../context'

export default function ProfileCreate(props) {
    return (
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
    )
  }