import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { SideMenu } from '../sideMenu'
import { Footer } from '../footer'
import { FlexContainer } from '../styled-components/containerElements'

const Container = styled.div`
  width: 100%;
  padding-right: 0.9rem;
  padding-left: 0.9rem;
  margin-right: auto;
  margin-lefT: auto;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
`

export const Home = () =>{
  return(
    <div>
      <Header />
      <Container>
        <FlexContainer>
          <SideMenu />
          <Outlet/>
        </FlexContainer>
      </Container>
      <Footer/>
    </div>
  )
}

