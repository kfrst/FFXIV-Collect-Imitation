import { achievementList } from "../features/constants"
import Dropdown from "./styled-components/dropDown"

export const AchievementMenu = (props) => {
  return (
    <Dropdown>
      {achievementList.map((item) => {
        return (
          <Dropdown.Link to={item.url} key={item.title}>
            <i className={item.logo} />
            <Dropdown.Title>{item.title}</Dropdown.Title>
          </Dropdown.Link>
        )
      })}
    </Dropdown>
  )
}