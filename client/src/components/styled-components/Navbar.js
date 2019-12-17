import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MyContext } from '../../context'
import { withRouter } from 'react-router-dom'

const StyledNavbar = styled.nav`
  background-color: #9999ff;
  font-weight: bolder;
  width: 100vw;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  box-sizing: border-box;
  & a {
    padding: 5px;
    color: black;
    text-decoration: none;
  }
  & a.navbar-active {
    color: #0f4c81;
  }
  .logo{
    display: flex;
    justify-content: space-around;
  }
`

function Navbar(props) {
  return (
    <MyContext.Consumer>
      {context => {
        return (
          
          <StyledNavbar>
            <NavLink exact to="/" activeClassName="navbar-active">
              <div className="logo">
                <img src="./hands.png" width="30px" alt="logo"/>
              </div>
            </NavLink>
            <NavLink exact to="/comments" activeClassName="navbar-active">
              Necesitan
            </NavLink>
            <NavLink exact to="/visits" activeClassName="navbar-active">
              Visitas
            </NavLink>
            {!context.loggedUser && (
            <NavLink exact to="/signup" activeClassName="navbar-active">
              Regístrate
            </NavLink>
            )}
            {!context.loggedUser && (
              <NavLink exact to="/login" activeClassName="navbar-active">
                Ingresa a tu cuenta
              </NavLink>
            )}
            {context.loggedUser && (
              <NavLink exact to="/profile" activeClassName="navbar-active">
                Perfil
              </NavLink>
            )}
            {context.user.typeUser === "Beneficiado" && (
              <NavLink exact to="/create" activeClassName="navbar-active">
                Necesito
              </NavLink>
            )}
            {context.user.typeUser === "Asilo" && (
              <NavLink exact to="/create" activeClassName="navbar-active">
                Necesitamos
              </NavLink>
            )}
            {context.loggedUser && (
              <span
                onClick={() =>
                  context.handleLogout(() => {
                    props.history.push('/login')
                  })
                }
              >
                Cerrar sesión
              </span>
            )}
          </StyledNavbar>
          
        )
      }}
    </MyContext.Consumer>
  )
}

export default withRouter(Navbar)