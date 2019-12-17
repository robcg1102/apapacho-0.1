import React from 'react'
import { MyContext } from '../../context'


export default class AllVisits extends React.Component {

  render() {
    return (
    
        <MyContext.Consumer>
        {context => (
          
          <div className="comments">
            <h1>Visita</h1>
          </div>
        )}
      </MyContext.Consumer>
    )
}
}