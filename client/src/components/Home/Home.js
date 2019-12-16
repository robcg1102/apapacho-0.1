import React from 'react'
import styled from 'styled-components'

const StyledHome = styled.div`
  
  .home{
    background-image: url("https://www.redadultomayor.org/wp-content/uploads/2017/07/adultos-tercera-edad.jpg_594723958.jpg");
    background-position: center;
    height: 500px;
    background-repeat: no-repeat;
    color: white;
    text-align: center;
    vertical-align: center;
    padding: 0;
    margin: 0;
  }
`

export default function Home() {
  return (
    <StyledHome>
      <div className="home">¡Bienvenido! <image src="hands.png" alt="logo"></image> </div>
    </StyledHome>
  )
}