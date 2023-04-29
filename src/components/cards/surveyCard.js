import Card from "../styled-components/card"
import { Image } from "../styled-components/image"
import { displayDescription, displayCommonCollectable } from "../../features/display"
import { Spoiler } from "../styled-components/commonElements"
export const SurveyCard = (props) => {
  const { survey } = props
  return (
    <Card.Container>
      <Card>
        <Card.Header>
          <Card.Title>{`${survey.id.toString().padStart(2, "0")}. ${survey.name}`}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Content>
            <Card.ShortContent>
              <div>
                <dt>Dungeon</dt>
                <dd>{survey.dungeon}</dd>
              </div>
              {displayCommonCollectable(survey.commonData)}
            </Card.ShortContent>
            <Card.Image>
              <Image alt={survey.name} src={survey.image} />
            </Card.Image>
            <div>
              <dt>Solution</dt>
              <dd>
                <Spoiler>{survey.solution}</Spoiler>
              </dd>
            </div>
            <div>
              <dt>Description</dt>
              {displayDescription(survey.description)}
            </div>
          </Card.Content>
        </Card.Body>
      </Card>
    </Card.Container>
  )
}