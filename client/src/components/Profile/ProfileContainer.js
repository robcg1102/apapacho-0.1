import React from 'react'
import { MyContext } from '../../context'
import styled from 'styled-components'

const StyledProfile = styled.div`
  .profile{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    font-weight: bolder;
    margin: 0 0 300px 0; 
    padding: 15px;
    border-radius: 0 0 15px 15px;
  }
`
export default function ProfileContainer(props) {
    return (
      <StyledProfile>
      <MyContext.Consumer>

        {context => (
          <div className="profile">
            <h1>Perfil</h1>
            <img src={context.user.photoURL} width="100px" alt="photoUser"/> <br></br>
            Nombre: {context.user.name} <br></br>
            Tipo de usuario: {context.user.typeUser} <br></br>
            Cuenta creada el: {context.user.createdAt}
          </div>
        )}
      </MyContext.Consumer>
      </StyledProfile>
    )
  }