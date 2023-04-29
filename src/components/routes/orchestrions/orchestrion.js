import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchOrchestrion, clearStatus, selectOrchestrion, selectOrchestrionStatus } from "./orchestrionData"
import { MainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { OrchestrionCard } from "../../cards/orchestrionCard"

export const Orchestrion = () => {
  const dispatch = useDispatch()
  const orchestrion = useSelector(selectOrchestrion)
  const orchestrionStatus = useSelector(selectOrchestrionStatus)
  const orchestrionID = parseInt(useParams().orchestrionID, 10)

  useTitle(orchestrionStatus === "succeeded" ? `${orchestrion.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchOrchestrion(orchestrionID))
    return () => dispatch(clearStatus())
  }, [dispatch, orchestrionID])
  
  return (
    <>
      {orchestrionStatus !== "rejected" ? (
        <MainContainer>
          {orchestrionStatus === "succeeded" ? <OrchestrionCard orchestrion={orchestrion} /> : <Loading />}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}