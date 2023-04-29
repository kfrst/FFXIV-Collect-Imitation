import styled from "styled-components"
import Card from "../styled-components/card"
import { ImageSmall, ImageIcon } from "../styled-components/image"
import { Race, Area, Strengths, Blank } from "../../assets/images"
import { displayStars } from "../../features/display"

const MinionIconImg = styled(ImageIcon)`
  background: url(${(props) => props.backUrl}) no-repeat;
  background-position: ${(props) => props.pos};
`
const MinionAreaImg = styled(ImageSmall)`
  background: url(${Area});
  background-position: ${(props) => props.pos};
`

export const VerminionCard = (props) => {
  const { verminion, minionID, skillIndex } = props
  return (
    <Card.MinionCardContainer primary>
      <Card>
        <Card.Header primary>
          <Card.Title>Lord of Verminion</Card.Title>
          <Card.ShortContent>
            <span>{verminion.race}</span>
            <MinionIconImg backUrl={Race} pos={`${-(24 * (verminion.raceID - 1))}px 0`} src={Blank} />
          </Card.ShortContent>
        </Card.Header>
        <Card.Body>
          <Card.Content>
            <Card.ShortContent>{displayVerminionContent(verminion.stats, minionID)}</Card.ShortContent>
            <hr />
            <Card.ShortContent primary>
              <Card.Content>
                <b>
                  <u>{verminion.skill}</u>
                </b>
                {displayVerminionDescription(verminion.skillDescription)}
              </Card.Content>
              <Card.Image>
                <MinionAreaImg pos={`${-(40 * skillIndex)}px 0`} src={Blank} />
              </Card.Image>
            </Card.ShortContent>
            <Card.ShortContent>{displayVerminionContent(verminion.skillStats, minionID)}</Card.ShortContent>
          </Card.Content>
        </Card.Body>
      </Card>
    </Card.MinionCardContainer>
  )
}

const displayStrengths = (strengths, minionID) => {
  return strengths.map((item, index) => {
    if (item.data) {
      return (
        <MinionIconImg
          backUrl={Strengths}
          key={`${item.type}-${minionID}`}
          pos={`${-(24 * index)}px 0`}
          src={Blank}
        />
      )
    }
    return null
  })
}

const displayVerminionDescription = (description) => {
  if (description.length > 1) {
    return (
      <span>
        {description.map((text, index) => {
          return index % 2 === 0 ? <p key={index}>{text}</p> : <strong key={index}>{text}</strong>
        })}
      </span>
    )
  }
  return <span>{description[0]}</span>
}
const displayVerminionContent = (content, minionID) => {
  return content.map((item) => {
    return (
      <div key={`${minionID}-${item.title}`}>
        <dt>{item.title}</dt>
        <dd>
          {item.title === "Strengths" && displayStrengths(item.data, minionID)}
          {item.title === "SPD" && displayStars(item.data, minionID, item.title)}
          {item.title !== "Strengths" && item.title !== "SPD" && item.data}
        </dd>
      </div>
    )
  })
}