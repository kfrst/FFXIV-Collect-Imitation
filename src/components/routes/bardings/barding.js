import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchBarding, clearStatus, selectBarding, selectBardingStatus } from "./bardingData"
import { MainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { SimpleCard } from "../../cards/simpleCard"

export const Barding = () => {
  const dispatch = useDispatch()
  const barding = useSelector(selectBarding)
  const bardingStatus = useSelector(selectBardingStatus)
  const bardingID = parseInt(useParams().bardingID, 10)

  useTitle(bardingStatus === "succeeded" ? `${barding.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchBarding(bardingID))
    return () => dispatch(clearStatus())
  }, [dispatch, bardingID])
  
  return (
    <>
      {bardingStatus !== "rejected" ? (
        <MainContainer>
          {bardingStatus === "succeeded" ? <SimpleCard cardObject={barding} /> : <Loading />}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}
