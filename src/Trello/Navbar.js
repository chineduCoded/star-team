import React, { useState } from 'react'
import styled from 'styled-components'
//import { Bars } from './NavBars/Bars'
import logo from './assets/Trello.jpg'

const Navbar = () => {

 return(
 <Container>
 <Wrapper>

   <LogoHolder>
      <Logo src={logo} />
   </LogoHolder>
   
   <Navigation>
      <MenuLink>Log In</MenuLink>
      <ButtonLink>Sign up</ButtonLink>
   </Navigation>
  </Wrapper>
 </Container>
 )
}

export default Navbar

const MenuLink = styled.a`
  margin: 0 10px;
  border-radius: 4px;
  background-color: transparent;
  color: #0051cc;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  transition: all 300ms ease-in;
  text-decoration: none;
  text-align: center;
  font-weight: 600;

:hover{
  text-decoration: underline;
  cursor: pointer;

`

const ButtonLink = styled.div`
  width: 50px;
  height: 35px;
  padding: 0 10px;
  border-radius: 4px;
  background-color: #0065ff;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in;

  :hover {
    cursor: pointer;
    background-color: #0051cc;
  }
`

const Navigation = styled.div`
display: flex;
align-items: center;
margin-right: 20px;

`

const LogoHolder = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
`

const Logo = styled.img`

width: 130px;
height: 40px;
object-fit: contain;
`

const Wrapper = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 80px;
background-color: #ECE8FF;
color: #fff;
position: fixed;
z-index: 10;
`

