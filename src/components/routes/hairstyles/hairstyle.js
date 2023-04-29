import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchHairstyle, clearStatus, selectHairstyle, selectHairstyleStatus } from "./hairstyleData"
import { MainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { SimpleCard } from "../../cards/simpleCard"

export const Hairstyle = () => {
  const dispatch = useDispatch()
  const hairstyle = useSelector(selectHairstyle)
  const hairstyleStatus = useSelector(selectHairstyleStatus)
  const hairstyleID = parseInt(useParams().hairstyleID, 10)

  useTitle(hairstyleStatus === "succeeded" ? `${hairstyle.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchHairstyle(hairstyleID))
    return () => dispatch(clearStatus())
  }, [dispatch, hairstyleID])
  
  return (
    <>
      {hairstyleStatus !== "rejected" ? (
        <MainContainer>
          {hairstyleStatus === "succeeded" ? <SimpleCard cardObject={hairstyle} /> : <Loading />}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}