import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useModal } from "../../../features/hooks/useModal"
import { useTitle } from "../../../features/hooks/useTitle"
import {
  fetchMinions,
  clearStatus,
  setFilter,
  setOwned,
  selectTableMinionsData,
  selectMinionsStatus,
  selectFilters,
} from "./minionsData"
import { minionHeaderList, searchQueryMaker } from "../../../features/util"
import { MainContainer, CenterContainer, FlexColumnContainer } from "../../styled-components/containerElements"
import { SharedTable } from "../../tables/sharedTable"
import { SearchFilter } from "../../filters/searchFilter"
import { FilterModal } from "../../filterModal"
import { NormalFilter } from "../../filters/normalFilter"
import { OwnedBar } from "../../bars"
import { Loading } from "../../loading"

export const Minions = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const dispatch = useDispatch()
  const [minionsTable, totalOwned, totalElements] = useSelector(selectTableMinionsData)
  const minionsStatus = useSelector(selectMinionsStatus)
  const filters = useSelector(selectFilters)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchQueryMaker(searchParams.entries())

  const filtersSubmit = (values) => {
    dispatch(setFilter(values))
  }
  const searchSubmit = (query) => {
    setSearchParams({ name_en_cont: query })
  }
  const checkCollectable = (minionID) => {
    dispatch(setOwned(minionID))
  }

  useTitle('Minions - FFXIV Collect')
  useEffect(() => {
    dispatch(fetchMinions(searchQuery))
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
          {minionsTable.length > 0 && <OwnedBar totalOwned={totalOwned} totalElements={totalElements} />}
          {minionsStatus === "succeeded" ? (
            <SharedTable
              tableHeaders={minionHeaderList}
              tableData={minionsTable}
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