import Card from "../styled-components/card"
import { ImageSmall } from "../styled-components/image"
import { displayDescription, displayCommonCollectable } from "../../features/display"

export const OrchestrionCard = (props) => {
  const { orchestrion } = props
  return (
    <Card.Container primary>
      <Card>
        <Card.Header>
          <ImageSmall alt={orchestrion.name} src={orchestrion.icon} />
          <Card.Title>{`${orchestrion.number} ${orchestrion.name}`}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Content>
            <Card.ShortContent>
              <div>
                <dt>Category</dt>
                <dd>{orchestrion.category}</dd>
              </div>
              <div>
                <dt>Tradeable</dt>
                <dd>
                  <i className={orchestrion.tradeable === "No" ? "fas fa-times" : "fas fa-check"} />
                  <span>{orchestrion.tradeable}</span>
                </dd>
              </div>
              {displayCommonCollectable(orchestrion.commonData)}
            </Card.ShortContent>
            <div>
              <dt>Source</dt>
              {displayDescription(orchestrion.description)}
            </div>
          </Card.Content>
        </Card.Body>
      </Card>
    </Card.Container>
  )
}