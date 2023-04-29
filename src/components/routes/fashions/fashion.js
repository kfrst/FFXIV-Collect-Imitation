import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchFashion, clearStatus, selectFashion, selectFashionStatus } from "./fashionData"
import { MainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { SimpleCard } from "../../cards/simpleCard"

export const Fashion = () => {
  const dispatch = useDispatch()
  const fashion = useSelector(selectFashion)
  const fashionStatus = useSelector(selectFashionStatus)
  const fashionID = parseInt(useParams().fashionID, 10)

  useTitle(fashionStatus === "succeeded" ? `${fashion.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchFashion(fashionID))
    return () => dispatch(clearStatus())
  }, [dispatch, fashionID])
  
  return (
    <>
      {fashionStatus !== "rejected" ? (
        <MainContainer>
          {fashionStatus === "succeeded" ? <SimpleCard cardObject={fashion} /> : <Loading />}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}