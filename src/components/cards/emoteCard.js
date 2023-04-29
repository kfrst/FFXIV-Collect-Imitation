import Card from "../styled-components/card"
import { ImageSmall } from "../styled-components/image"
import { displaySourceList, displayCommonCollectable } from "../../features/display"
export const EmoteCard = (props) => {
  const { emote } = props
  return (
    <Card.Container primary>
      <Card>
        <Card.Header>
          <ImageSmall alt={emote.name} src={emote.icon} />
          <Card.Title>{emote.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Content>
            <Card.ShortContent>
              <div>
                <dt> Command </dt>
                {displayCommand(emote.command)}
              </div>
              <div>
                <dt> Tradeable </dt>
                <dd>
                  <i className={emote.tradeable === "No" ? "fas fa-times" : "fas fa-check"} />
                  <span>{emote.tradeable}</span>
                </dd>
              </div>
              {displayCommonCollectable(emote.commonData)}
            </Card.ShortContent>
            <div>
              <dt> Source </dt>
              {displaySourceList(emote.sources, emote.id)}
            </div>
          </Card.Content>
        </Card.Body>
      </Card>
    </Card.Container>
  )
}

const displayCommand = (data) => {
  return (
    <dd>
      <ul>
        {data.map((text, index) => {
          return <li key={`Command-${index}`}>{text}</li>
        })}
      </ul>
    </dd>
  )
}