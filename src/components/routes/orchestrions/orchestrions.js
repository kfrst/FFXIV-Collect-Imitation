import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useModal } from "../../../features/hooks/useModal"
import { useTitle } from "../../../features/hooks/useTitle"
import {
  fetchOrchestrions,
  clearStatus,
  setFilter,
  setOwned,
  selectOrchestrionsStatus,
  selectTableOrchestrionsData,
  selectFilters,
} from "./orchestrionsData"
import { orchestrionHeaderList, searchQueryMaker } from "../../../features/util"
import { MainContainer, CenterContainer, FlexColumnContainer } from "../../styled-components/containerElements"
import { SharedTable } from "../../tables/sharedTable"
import { SearchFilter } from "../../filters/searchFilter"
import { FilterModal } from "../../filterModal"
import { NormalFilter } from "../../filters/normalFilter"
import { OwnedBar } from "../../bars"
import { Loading } from "../../loading"

export const Orchestrions = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const dispatch = useDispatch()
  const [orchestrionsTable, totalOwned, totalElements] = useSelector(selectTableOrchestrionsData)
  const orchestrionsStatus = useSelector(selectOrchestrionsStatus)
  const filters = useSelector(selectFilters)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchQueryMaker(searchParams.entries())

  const filtersSubmit = (values) => {
    dispatch(setFilter(values))
  }
  const searchSubmit = (query) => {
    setSearchParams({ name_en_cont: query })
  }
  const checkCollectable = (orchestrionID) => {
    dispatch(setOwned(orchestrionID))
  }

  useTitle('Orchestrion - FFXIV Collect')
  useEffect(() => {
    dispatch(fetchOrchestrions(searchQuery))
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
          {orchestrionsTable.length > 0 && <OwnedBar totalOwned={totalOwned} totalElements={totalElements} />}
          {orchestrionsStatus === "succeeded" ? (
            <SharedTable
              tableHeaders={orchestrionHeaderList}
              tableData={orchestrionsTable}
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