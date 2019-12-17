import React from 'react'
import styled from 'styled-components'

const StyledHome = styled.div`
  background-image: url("https://www.redadultomayor.org/wp-content/uploads/2017/07/adultos-tercera-edad.jpg_594723958.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;
  font-size: 50px;
  margin: 0;
  padding: 0;
  .home{
    height: 450px;
    color: black;
    text-align: center;
    padding: 10% 0 20% 40%;
    margin: 0;
    font-weight: bolder;
  }

  img{
    width: 100px;
  }
`

export default function Home() {
  return (
    <StyledHome>
      <>
      <div className="home"><div>¡Bienvenido! </div> 
      <img src="hands.png" alt="logo"></img>
      </div>
      <br></br>
      <hr width="70%"></hr>
      <div>
        Siguiente fragmento de home
      </div>
      </>
    </StyledHome>
  )
}