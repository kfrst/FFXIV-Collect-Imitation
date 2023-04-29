import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useModal } from "../../../features/hooks/useModal"
import { useTitle } from "../../../features/hooks/useTitle"
import { AchievementsTable } from "../../tables/achievementsTable"
import {
  fetchAchievements,
  clearStatus,
  setFilter,
  setOwned,
  selectTableAchievementsData,
  selectStatus,
  selectFilters,
} from "./achievementsData"
import { searchQueryMaker } from "../../../features/util"
import { MainContainer, CenterContainer, FlexColumnContainer } from "../../styled-components/containerElements"
import { FilterModal } from "../../filterModal"
import { NormalFilter } from "../../filters/normalFilter"
import { SearchFilter } from "../../filters/searchFilter"
import { OwnedBar, PointsBar } from "../../bars"
import { Loading } from "../../loading"

export const Achievements = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const dispatch = useDispatch()
  const [achievementsTable, totalOwned, totalElements, pointsOwned, totalPoints] =
    useSelector(selectTableAchievementsData)
  const achievementsStatus = useSelector(selectStatus)
  const filters = useSelector(selectFilters)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchQueryMaker(searchParams.entries())

  const filtersSubmit = (values) => {
    dispatch(setFilter(values))
  }
  const searchSubmit = (query) => {
    setSearchParams({ name_en_cont: query })
  }
  const checkCollectable = (achievementID) => {
    dispatch(setOwned(achievementID))
  }
  
  useTitle("Achievements - Search - FFXIV Collect")
  useEffect(() => {
    dispatch(fetchAchievements(searchQuery))
    return () => dispatch(clearStatus())
  }, [dispatch, searchQuery])

  return (
    <MainContainer>
      <CenterContainer mb={"0.5rem"} mt={"0.5rem"}>
        <SearchFilter openModal={openModal} onSubmit={searchSubmit} />
      </CenterContainer>
      <FilterModal isOpen={isOpen} closeModal={closeModal}>
        <NormalFilter closeModal={closeModal} filters={filters} onSubmit={filtersSubmit} />
      </FilterModal>
      <CenterContainer>
        <FlexColumnContainer>
          {achievementsTable.length > 0 && (
            <>
              <OwnedBar totalOwned={totalOwned} totalElements={totalElements} />
              <PointsBar pointsOwned={pointsOwned} totalPoints={totalPoints} />
            </>
          )}
          {achievementsStatus === "succeeded" ? (
            <AchievementsTable tableData={achievementsTable} checkCollectable={checkCollectable} />
          ) : (
            <Loading />
          )}
        </FlexColumnContainer>
      </CenterContainer>
    </MainContainer>
  )
}
