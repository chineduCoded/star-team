import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from './assets/Trello.jpg'

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false)

 return(
 <Container>
 <Wrapper>

   <LogoHolder>
      <Logo src={logo} />
   </LogoHolder>
   <Hamburger>
	 <span><AiOutlineMenu /></span>
   </Hamburger>

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


@media screen  (max-width: 768px) {                display: none;                                   }
`
const LogoHolder = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
`

const Logo = styled.img`

width: 130px;
  height: 30px;
  object-fit: contain;

  @media screen (max-width: 768px) {
   width: 100px;
`

const Menu = styled.div`
display: flex;
align-items: center;
margin-right: 10px;
//position: relative;

//@media (max-width: 768px) {
 //overflow: hidden;
 //display: flex;
 //align-items: center;
 //justify-content: center;
// flex-direction: column;
// max-height: ${({ isOpen }) => (isOpen ? "200px" : "0px")};
  


 //transition: max-height 0.3s ease-in;
 //width: 100%;
}
`

const Hamburger = styled.span`
height: 40px;
width: 25px;
display: none;
align-items: center; 
color: #0051cc;
text-align: center
font-size: 40px;
border-radius: 3px;
:hover {
cursor: pointer;
}

@media screen  (max-width: 768px) {
display: flex;
}
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
`

