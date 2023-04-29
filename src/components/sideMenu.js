import { listadoMenu } from "../features/constants"
import SidebarNav from "./styled-components/sidebarElements"
import { useVisibility } from "../features/hooks/useVisibility"
import { AchievementMenu } from "./achievementsDropdown"
import { DropdownContainer } from "./styled-components/dropDown"

export const SideMenu = () => {
  const { ref, isVisible, setIsVisible } = useVisibility(false)
  return (
    <SidebarNav>
      <SidebarNav.Sidebar>
        <SidebarNav.Content>
          {listadoMenu.map((item) => {
            if (item.title !== "Triple Triad") {
              if (item.title !== "Achievements") {
                return (
                  <SidebarNav.NavLink to={`${item.url}`} key={item.title}>
                    <i className={item.logo} />
                    <SidebarNav.Title>{item.title}</SidebarNav.Title>
                  </SidebarNav.NavLink>
                )
              }
              return (
                <DropdownContainer key={item.title}>
                  <SidebarNav.Link ref={ref} onClick={() => setIsVisible(!isVisible)} to={`${item.url}`}>
                    <i className={item.logo} />
                    <SidebarNav.Title>{item.title}</SidebarNav.Title>
                    <SidebarNav.Arrow />
                  </SidebarNav.Link>
                  {isVisible && <AchievementMenu />}
                </DropdownContainer>
              )
            }
            return (
              <SidebarNav.ExternalLink href={item.url} target="_blank" rel="noopener noreferrer" key={item.title}>
                <i className={item.logo} />
                <SidebarNav.Title>{item.title}</SidebarNav.Title>
              </SidebarNav.ExternalLink>
            )
          })}
        </SidebarNav.Content>
      </SidebarNav.Sidebar>
    </SidebarNav>
  )
}
