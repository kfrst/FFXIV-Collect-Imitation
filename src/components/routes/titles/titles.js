import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useModal } from "../../../features/hooks/useModal"
import { useTitle } from "../../../features/hooks/useTitle"
import {
  fetchTitles,
  clearStatus,
  setFilter,
  setOwned,
  selectTableTitlesData,
  selectStatus,
  selectFilters,
} from "./titlesData"
import { searchQueryMaker } from "../../../features/util"
import { MainContainer, CenterContainer, FlexColumnContainer } from "../../styled-components/containerElements"
import { TitlesTable } from "../../tables/titlesTable"
import { FilterModal } from "../../filterModal"
import { NormalFilter } from "../../filters/normalFilter"
import { SearchFilter } from "../../filters/searchFilter"
import { OwnedBar } from "../../bars"
import { Loading } from "../../loading"

export const Titles = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const dispatch = useDispatch()
  const [titlesTable, totalOwned, totalElements] = useSelector(selectTableTitlesData)
  const titlesStatus = useSelector(selectStatus)
  const filters = useSelector(selectFilters)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchQueryMaker(searchParams.entries())

  const filtersSubmit = (values) => {
    dispatch(setFilter(values))
  }
  const searchSubmit = (query) => {
    setSearchParams({ name_en_cont: query })
  }
  const checkCollectable = (titleID) => {
    dispatch(setOwned(titleID))
  }

  useTitle('Titles - FFXIV Collect')
  useEffect(() => {
    dispatch(fetchTitles(searchQuery))
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
          {titlesTable.length > 0 && <OwnedBar totalOwned={totalOwned} totalElements={totalElements} />}
          {titlesStatus === "succeeded" ? (
            <TitlesTable tableData={titlesTable} checkCollectable={checkCollectable} />
          ) : (
            <Loading />
          )}
        </FlexColumnContainer>
      </CenterContainer>
    </MainContainer>
  )
}