import React from 'react'
import { MyContext } from '../../context'


export default class AllComments extends React.Component {

  render() {
    return (
    
        <MyContext.Consumer>
        {context => (
          
          <div className="comments">
            <h1>Comentarios</h1>
          </div>
        )}
      </MyContext.Consumer>
    )
}
}