import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchMount, clearStatus, selectMount, selectMountStatus } from "./mountData"
import { MainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { MountCard } from "../../cards/mountCard"

export const Mount = () => {
  const dispatch = useDispatch()
  const mountStatus = useSelector(selectMountStatus)
  const mount = useSelector(selectMount)
  const mountID = parseInt(useParams().mountID)
  
  useTitle(mountStatus === "succeeded" ? `${mount.name} - FFXIV Collect` : 'FFXIV Collect' )
  useEffect(() => {
    dispatch(fetchMount(mountID))
    return () => {
      dispatch(clearStatus())
    }
  }, [dispatch, mountID])
  return (
    <>
      {mountStatus !== "rejected" ? (
        <MainContainer>
          {mountStatus === "succeeded" ? <MountCard mount={mount} /> : <Loading />}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}