import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useModal } from "../../../features/hooks/useModal"
import { useTitle } from "../../../features/hooks/useTitle"
import {
  fetchSurveys,
  clearStatus,
  setFilter,
  setOwned,
  selectTableSurveysData,
  selectStatus,
  selectFilters,
} from "./surveysData"
import { searchQueryMaker } from "../../../features/util"
import { MainContainer, CenterContainer, FlexColumnContainer } from "../../styled-components/containerElements"
import { SurveysTable } from "../../tables/surveysTable"
import { FilterModal } from "../../filterModal"
import { NormalFilter } from "../../filters/normalFilter"
import { SearchFilter } from "../../filters/searchFilter"
import { OwnedBar } from "../../bars"
import { Loading } from "../../loading"

export const Surveys = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const dispatch = useDispatch()
  const [surveysTable, totalOwned, totalElements] = useSelector(selectTableSurveysData)
  const surveysStatus = useSelector(selectStatus)
  const filters = useSelector(selectFilters)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchQueryMaker(searchParams.entries())

  const filtersSubmit = (values) => {
    dispatch(setFilter(values))
  }
  const searchSubmit = (query) => {
    setSearchParams({ name_en_cont: query })
  }
  const checkCollectable = (surveyID) => {
    dispatch(setOwned(surveyID))
  }

  useTitle('Survey Records - FFXIV Collect')
  useEffect(() => {
    dispatch(fetchSurveys(searchQuery))
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
          {surveysTable.length > 0 && <OwnedBar totalOwned={totalOwned} totalElements={totalElements} />}
          {surveysStatus === "succeeded" ? (
            <SurveysTable
              tableData={surveysTable}
              checkCollectable={checkCollectable}
            />
          ) : (
            <Loading />
          )}
        </FlexColumnContainer>
      </CenterContainer>
    </MainContainer>
  )
}