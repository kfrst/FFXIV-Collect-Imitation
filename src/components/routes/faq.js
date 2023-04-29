import { MainContainer, FlexContainer } from '../styled-components/containerElements'
import Card from '../styled-components/card'
import { FaqText } from '../../features/staticText'
import { useTitle } from '../../features/hooks/useTitle'

export const Faq = () => {
  useTitle('FAQ - FFXIV Collect')
  return(
    <MainContainer>
      <FlexContainer>
        <Card.OptionalContainer >
          <Card>
            <Card.Header>
               <Card.Title>Frequently Asked Questions</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Content>
                <FaqText/>
              </Card.Content>
            </Card.Body>
          </Card>
        </Card.OptionalContainer>
      </FlexContainer>
    </MainContainer>
  )
}