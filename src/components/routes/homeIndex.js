import styled from 'styled-components'
import { MainContainer, FlexContainer, MainContentContainer } from '../styled-components/containerElements'
import { IndexText, PersonalText} from '../../features/staticText'
import { useTitle } from '../../features/hooks/useTitle'

const Content = styled.div`
  background-color: #292929;
  padding: 4rem 2rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  h1{
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
  h5{
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  h1 + p{
    font-size: 1.25rem;
    font-weight: 300;
  }
  p{
    margin-top: 0;
    margin-bottom: 1rem;
  }
  hr{
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 0;
    margin-right: 0;
    border: 0;
    border-top: 1px solid rgba(233,233,233,0.1);
    height: 0;
    overflow: visible;
    box-sizing: content-box;
  }
`

const PFoot = styled.p`
  text-align: right;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`
	export const HomeIndex = () =>{
  useTitle('FFXIV Collect')
	return(
    <MainContainer>
    <FlexContainer>
      <MainContentContainer primary>
        <Content>
          <IndexText/>
        </Content>
        <Content>
          <PersonalText/>
        </Content>
        <PFoot> FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. 
          <br/>
            FINAL FANTASY XIV © SQUARE ENIX CO., LTD. 
        </PFoot>
      </MainContentContainer>
    </FlexContainer>
  </MainContainer>
	)
}