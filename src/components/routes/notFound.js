import { MainContainer, FlexContainer } from '../styled-components/containerElements'
import Card from '../styled-components/card'
import { NotFoundImg } from '../../assets/images'
import { NotFoundImage } from '../styled-components/image'
import { useTitle } from '../../features/hooks/useTitle'

export const NotFound = () => {
  useTitle('404 NOT FOUND - FFXIV Collect')
  return(
    <MainContainer>
      <FlexContainer>
        <Card.Container primary>
          <Card>
            <Card.Header>
               <i className="fa-solid fa-circle-exclamation"> PAGE NOT FOUND </i>
            </Card.Header>
            <Card.Body>
              <Card.Content>
               <p>The page you are searching for has either been removed, or the designated URL address is incorrect. </p>
                <NotFoundImage alt={"A character from the game doing the emote '??' "} src={NotFoundImg} />
              </Card.Content>
            </Card.Body>
          </Card>
        </Card.Container>
      </FlexContainer>
    </MainContainer>
  )
}