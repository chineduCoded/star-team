import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Hero } from './Hero'
import { Comp1 } from './Comp1'
import { Comp2 } from './Comp2'
import { Build4 } from './Comp4/Build4'
import { Comp5 } from './Comp5'
import { SliderComponent } from './Slider/SliderComponent'
import { Contact } from './Contact'
import { Footer } from './Footer'
const Trello = () => {
  return(
    <Container>
      <Wrapper>
	  <Navbar />
	  <Hero />
	  <Comp1 />
	  <Comp2 />
	  <Build4 />
	  <Comp5 />
	  <SliderComponent />
	  <Contact />
	  <Footer />
      </Wrapper>
    </Container>
  )
}

export default Trello

const Wrapper = styled.div``

const Container = styled.div``

