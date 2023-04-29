import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useModal } from "../../../features/hooks/useModal"
import { useTitle } from "../../../features/hooks/useTitle"
import {
  fetchHairstyles,
  clearStatus,
  setFilter,
  setOwned,
  selectHairstylesStatus,
  selectHairstylesTableData,
  selectHairstylesFilters,
} from "./hairstylesData"
import { hairstylesHeaderList, searchQueryMaker } from "../../../features/util"
import { MainContainer, CenterContainer, FlexColumnContainer } from "../../styled-components/containerElements"
import { SharedTable } from "../../tables/sharedTable"
import { SearchFilter } from "../../filters/searchFilter"
import { FilterModal } from "../../filterModal"
import { NormalFilter } from "../../filters/normalFilter"
import { OwnedBar } from "../../bars"
import { Loading } from "../../loading"

export const Hairstyles = () => {
  const dispatch = useDispatch()
  const [isOpen, openModal, closeModal] = useModal()
  const [hairstylesTable, totalOwned, totalElements] = useSelector(selectHairstylesTableData)
  const hairstylesStatus = useSelector(selectHairstylesStatus)
  const filters = useSelector(selectHairstylesFilters)
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
  
  useTitle('Hairstyles - FFXIV Collect')
  useEffect(() => {
    dispatch(fetchHairstyles(searchQuery))
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
          {hairstylesTable.length > 0 && <OwnedBar totalOwned={totalOwned} totalElements={totalElements} />}
          {hairstylesStatus === "succeeded" ? (
            <SharedTable
              tableHeaders={hairstylesHeaderList}
              tableData={hairstylesTable}
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