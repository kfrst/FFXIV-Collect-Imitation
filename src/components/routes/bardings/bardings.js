import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useModal } from "../../../features/hooks/useModal"
import { useTitle } from "../../../features/hooks/useTitle"
import {
  fetchBardings,
  clearStatus,
  setFilter,
  setOwned,
  selectBardingsStatus,
  selectBardingsTableData,
  selectBardingsFilters,
} from "./bardingsData"
import { bardingsHeaderList, searchQueryMaker } from "../../../features/util"
import { MainContainer, CenterContainer, FlexColumnContainer } from "../../styled-components/containerElements"
import { SharedTable } from "../../tables/sharedTable"
import { SearchFilter } from "../../filters/searchFilter"
import { FilterModal } from "../../filterModal"
import { NormalFilter } from "../../filters/normalFilter"
import { OwnedBar } from "../../bars"
import { Loading } from "../../loading"

export const Bardings = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const dispatch = useDispatch()
  const [bardingsTable, totalOwned, totalElements] = useSelector(selectBardingsTableData)
  const bardingsStatus = useSelector(selectBardingsStatus)
  const filters = useSelector(selectBardingsFilters)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchQueryMaker(searchParams.entries())

  const filtersSubmit = (values) => {
    dispatch(setFilter(values))
  }
  const searchSubmit = (query) => {
    setSearchParams({ name_en_cont: query })
  }
  const checkCollectable = (elementID) => {
    dispatch(setOwned(elementID))
  }
  
  useTitle('Bardings - FFXIV Collect')
  useEffect(() => {
    dispatch(fetchBardings(searchQuery))
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
          {bardingsTable.length > 0 && <OwnedBar totalOwned={totalOwned} totalElements={totalElements} />}
          {bardingsStatus === "succeeded" ? (
            <SharedTable
              tableHeaders={bardingsHeaderList}
              tableData={bardingsTable}
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
