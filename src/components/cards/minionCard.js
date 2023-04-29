import Card from "../styled-components/card"
import { ImageLarge } from "../styled-components/image"
import { displayDescription, displaySourceList, displayCommonCollectable } from "../../features/display"

export const MinionCard = (props) => {
  const { minion } = props
  return (
    <Card.MinionCardContainer>
      <Card>
        <Card.Header>
          <Card.Title>{minion.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Image>
            <ImageLarge alt={minion.name} src={minion.image} />
          </Card.Image>
          <Card.Content>
            <Card.ShortContent>
              <div>
                <dt>Behavior</dt>
                <dd>{minion.behavior}</dd>
              </div>
              <div>
                <dt>Tradeable</dt>
                <dd>
                  <i className={minion.tradeable === "No" ? "fas fa-times" : "fas fa-check"} />
                  <span>{minion.tradeable}</span>
                </dd>
              </div>
              {displayCommonCollectable(minion.commonData)}
            </Card.ShortContent>
            <div>
              <dt>Source</dt>
              {displaySourceList(minion.sources, minion.id)}
            </div>
            <div>
              <dt>Description</dt>
              {displayDescription(minion.description)}
            </div>
            <div>
              <dt>Journal</dt>
              <dd>{minion.journal}</dd>
            </div>
            <div>
              <dt>Tooltip</dt>
              <dd>{minion.tooltip}</dd>
            </div>
          </Card.Content>
        </Card.Body>
      </Card>
    </Card.MinionCardContainer>
  )
}