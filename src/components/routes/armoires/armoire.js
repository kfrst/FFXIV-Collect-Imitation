import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchArmoire, clearStatus, selectArmoire, selectArmoireStatus } from "./armoireData"
import { MainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { SimpleCard } from "../../cards/simpleCard"

export const Armoire = () => {
  const dispatch = useDispatch()
  const armoire = useSelector(selectArmoire)
  const armoireStatus = useSelector(selectArmoireStatus)
  const armoireID = parseInt(useParams().armoireID, 10)

  useTitle(armoireStatus === "succeeded" ? `${armoire.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchArmoire(armoireID))
    return () => dispatch(clearStatus())
  }, [dispatch, armoireID])
  
  return (
    <>
      {armoireStatus !== "rejected" ? (
        <MainContainer>
          {armoireStatus === "succeeded" ? <SimpleCard cardObject={armoire} /> : <Loading />}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}
