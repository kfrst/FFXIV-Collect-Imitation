import Card from "../styled-components/card"
import { ImageSmall } from "../styled-components/image"
import { displayDescription, displayCommonCollectable } from "../../features/display"

export const FrameCard = (props) => {
  const { frame } = props
  return (
    <Card.Container primary>
      <Card>
        <Card.Header>
          <ImageSmall alt={frame.name} src={frame.icon} />
          <Card.Title>{frame.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Content>
            <Card.ShortContent>
              {frame.item_name && (
                <div>
                  <dt>Item Name</dt>
                  <dd>{frame.item_name}</dd>
                </div>
              )}
              {displayCommonCollectable(frame.commonData)}
            </Card.ShortContent>
            {frame.description && (
              <div>
                <dt>Description</dt>
                {displayDescription(frame.description)}
              </div>
            )}
          </Card.Content>
        </Card.Body>
      </Card>
    </Card.Container>
  )
}