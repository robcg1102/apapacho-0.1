import React from 'react'
import { Form, Input, Icon, Button } from 'antd'
import { MyContext } from '../../context'

export default function CreateVisit(props) {
    return (
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
    )
  }