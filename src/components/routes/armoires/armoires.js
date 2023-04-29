import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useModal } from "../../../features/hooks/useModal"
import { useTitle } from "../../../features/hooks/useTitle"
import {
  fetchArmoires,
  clearStatus,
  setFilter,
  setOwned,
  selectArmoiresStatus,
  selectArmoiresTableData,
  selectArmoiresFilters,
} from "./armoiresData"
import { armoiresHeaderList, searchQueryMaker } from "../../../features/util"
import { MainContainer, CenterContainer, FlexColumnContainer } from "../../styled-components/containerElements"
import { SharedTable } from "../../tables/sharedTable"
import { SearchFilter } from "../../filters/searchFilter"
import { FilterModal } from "../../filterModal"
import { NormalFilter } from "../../filters/normalFilter"
import { OwnedBar } from "../../bars"
import { Loading } from "../../loading"

export const Armoires = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const dispatch = useDispatch()
  const [armoiresTable, totalOwned, totalElements] = useSelector(selectArmoiresTableData)
  const armoiresStatus = useSelector(selectArmoiresStatus)
  const filters = useSelector(selectArmoiresFilters)
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
  
  useTitle('Armoire - FFXIV Collect')
  useEffect(() => {
    dispatch(fetchArmoires(searchQuery))
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
          {armoiresTable.length > 0 && <OwnedBar totalOwned={totalOwned} totalElements={totalElements} />}
          {armoiresStatus === "succeeded" ? (
            <SharedTable
              tableHeaders={armoiresHeaderList}
              tableData={armoiresTable}
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
