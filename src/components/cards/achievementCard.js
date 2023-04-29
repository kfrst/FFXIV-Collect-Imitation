import Card from "../styled-components/card"
import { ImageSmall } from "../styled-components/image"
import { displayDescription, displayCommonCollectable } from "../../features/display"
export const AchievementCard = (props) => {
  const { achievement } = props
  const { reward } = achievement
  return (
    <Card.Container primary>
      <Card>
        <Card.Header primary>
          <Card.HeaderContent>
            <ImageSmall alt={achievement.name} src={achievement.icon} />
            <Card.Title>{achievement.name}</Card.Title>
          </Card.HeaderContent>
          <h4>{achievement.points}</h4>
        </Card.Header>
        <Card.Body>
          <Card.Content>
            <Card.ShortContent>
              <div>
                <dt>Category</dt>
                <dd>{achievement.categoryName}</dd>
              </div>
              {displayCommonCollectable(achievement.commonData)}
            </Card.ShortContent>
            <div>
              <dt>
                <u>How to obtain</u>
              </dt>
              {displayDescription(achievement.description)}
            </div>
            {reward && (
              <>
                <hr />
                <dt>Title Reward</dt>
                <dd>
                  {reward.femaleName !== reward.name ? (
                    <>
                      {reward.name}
                      <br />
                      {reward.femaleName}
                    </>
                  ) : (
                    reward.name
                  )}
                </dd>
              </>
            )}
          </Card.Content>
        </Card.Body>
      </Card>
    </Card.Container>
  )
}