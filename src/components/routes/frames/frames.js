import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useModal } from "../../../features/hooks/useModal"
import { useTitle } from "../../../features/hooks/useTitle"
import {
  fetchFrames,
  clearStatus,
  setFilter,
  setOwned,
  selectTableFramesData,
  selectStatus,
  selectFilters,
} from "./framesData"
import { framesHeaderList, searchQueryMaker } from "../../../features/util"
import { MainContainer, CenterContainer, FlexColumnContainer } from "../../styled-components/containerElements"
import { SharedTable } from "../../tables/sharedTable"
import { FilterModal } from "../../filterModal"
import { NormalFilter } from "../../filters/normalFilter"
import { SearchFilter } from "../../filters/searchFilter"
import { OwnedBar } from "../../bars"
import { Loading } from "../../loading"

export const Frames = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const dispatch = useDispatch()
  const [framesTable, totalOwned, totalElements] = useSelector(selectTableFramesData)
  const framesStatus = useSelector(selectStatus)
  const filters = useSelector(selectFilters)
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchQueryMaker(searchParams.entries())

  const filtersSubmit = (values) => {
    dispatch(setFilter(values))
  }
  const searchSubmit = (query) => {
    setSearchParams({ name_en_cont: query })
  }
  const checkCollectable = (frameID) => {
    dispatch(setOwned(frameID))
  }
  
  useTitle('Framer\'s Kits - FFXIV Collect')
  useEffect(() => {
    dispatch(fetchFrames(searchQuery))
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
          {framesTable.length > 0 && <OwnedBar totalOwned={totalOwned} totalElements={totalElements} />}
          {framesStatus === "succeeded" ? (
            <SharedTable
              tableHeaders={framesHeaderList}
              tableData={framesTable}
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