import Card from "../styled-components/card"
import { ImageMedium } from "../styled-components/image"
import {
  displayCommonCollectable,
  displaySourceList,
  displayStars,
  displayDescription,
} from "../../features/display"

export const RecordCard = (props) => {
  const { record } = props
  return (
    <Card.Container>
      <Card>
        <Card.Header>
          <Card.Title>{`${record.id.toString().padStart(2, "0")}. ${record.name}`}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Image>
            <ImageMedium alt={record.name} src={record.image} />
          </Card.Image>
          <Card.Content>
            <Card.ShortContent>
              <div>
                <dt>Rarity</dt>
                <dd>{displayStars(record.rarity, record.id, "rarity")}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{record.location}</dd>
              </div>
              {displayCommonCollectable(record.commonData)}
            </Card.ShortContent>
            <div>
              <dt>Source</dt>
              {displaySourceList(record.sources, record.id)}
            </div>
            <div>
              <dt>Description</dt>
              {displayDescription(record.description)}
            </div>
          </Card.Content>
        </Card.Body>
      </Card>
    </Card.Container>
  )
}