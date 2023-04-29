import Card from "../styled-components/card"
import { ImageSmall, ImageLarge } from "../styled-components/image"
import { displaySourceList, displayDescription, displayCommonCollectable } from "../../features/display"

export const SimpleCard = (props) => {
  const { cardObject } = props
  return (
    <Card.Container primary>
      <Card>
        <Card.Header>
          {cardObject.icon && <ImageSmall alt={cardObject.name} src={cardObject.icon} />}
          <Card.Title>{cardObject.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          {cardObject.image && (
            <Card.Image>
              <ImageLarge alt={cardObject.name} src={cardObject.image} />
            </Card.Image>
          )}
          <Card.Content>
            <Card.ShortContent>
              <div>
                <dt>Tradeable</dt>
                <dd>
                  <i className={cardObject.tradeable === "No" ? "fas fa-times" : "fas fa-check"} />
                  <span>{cardObject.tradeable}</span>
                </dd>
              </div>
              {displayCommonCollectable(cardObject.commonData)}
            </Card.ShortContent>
            <div>
              <dt>Source</dt>
              {displaySourceList(cardObject.sources, cardObject.id)}
            </div>
            {cardObject.description && (
              <div>
                <dt>Description</dt>
                {displayDescription(cardObject.description)}
              </div>
            )}
          </Card.Content>
        </Card.Body>
      </Card>
    </Card.Container>
  )
}