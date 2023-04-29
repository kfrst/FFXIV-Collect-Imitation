import Card from "../styled-components/card"
import { ImageSmall } from "../styled-components/image"
import {
  displayCommonCollectable,
  displayDescription,
  displayStars,
  displaySourceList,
} from "../../features/display"
export const SpellCard = (props) => {
  const { spell } = props
  return (
    <Card.Container primary>
      <Card>
        <Card.Header primary>
          <Card.HeaderContent>
            <ImageSmall alt={spell.name} src={spell.icon} />
            <Card.Title>{spell.name}</Card.Title>
          </Card.HeaderContent>
          <Card.MiniSpan>{`No. ${spell.order}`}</Card.MiniSpan>
        </Card.Header>
        <Card.Body>
          <Card.Content>
            <Card.ShortContent>
              <div>
                <dt>Type</dt>
                <dd>{spell.type}</dd>
              </div>
              <div>
                <dt>Aspect</dt>
                <dd>{spell.aspect}</dd>
              </div>
              <div>
                <dt>Rank</dt>
                <dd>{displayStars(spell.rank, spell.id, "rank")}</dd>
              </div>
              {displayCommonCollectable(spell.commonData)}
            </Card.ShortContent>
            <div>
              <dt>
                <u>Tooltip</u>
              </dt>
              <dd>{spell.tooltip}</dd>
            </div>
            <div>
              <dt>
                <u>Description</u>
              </dt>
              {displayDescription(spell.description)}
            </div>
            <div>
              <dt>
                <u>How to Learn</u>
              </dt>
              {displaySourceList(spell.sources, spell.id)}
            </div>
          </Card.Content>
        </Card.Body>
      </Card>
    </Card.Container>
  )
}