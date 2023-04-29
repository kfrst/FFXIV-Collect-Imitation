import Card from "../styled-components/card"
import { ImageLarge } from "../styled-components/image"
import { displayDescription, displaySourceList, displayCommonCollectable } from "../../features/display"

export const MountCard = (props) => {
  const { mount } = props
  return (
    <Card.Container>
      <Card>
        <Card.Header>
          <Card.Title>{mount.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Image>
            <ImageLarge alt={mount.name} src={mount.image} />
          </Card.Image>
          <Card.Content>
            <Card.ShortContent>
              <div>
                <dt>Movement</dt>
                <dd>{mount.movement}</dd>
              </div>
              <div>
                <dt>Tradeable</dt>
                <dd>
                  <i className={mount.tradeable === "No" ? "fas fa-times" : "fas fa-check"} />
                  <span>{mount.tradeable}</span>
                </dd>
              </div>
              <div>
                <dt>Seats</dt>
                <dd>
                  <i className="fas fa-couch" />{mount.seats}
                </dd>
              </div>
              {displayCommonCollectable(mount.commonData)}
            </Card.ShortContent>
            <div>
              <dt>Source</dt>
              {displaySourceList(mount.sources, mount.id)}
            </div>
            <div>
              <dt>Description</dt>
              {displayDescription(mount.description)}
            </div>
            <div>
              <dt>Journal</dt>
              <dd>{mount.journal}</dd>
            </div>
            <div>
              <dt>Tooltip</dt>
              <dd>{mount.tooltip}</dd>
            </div>
            {mount.bgm !== null ? (
              <>
                <span>Audio Sample</span>
                <audio key={`${mount.id}-bgm`} controls controlsList="nodownload">
                  <source src={mount.bgm} type="audio/ogg" />
                </audio>
              </>
            ) : null}
          </Card.Content>
        </Card.Body>
      </Card>
    </Card.Container>
  )
}