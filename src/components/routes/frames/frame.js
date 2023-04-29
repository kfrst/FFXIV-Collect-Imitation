import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchFrame, clearStatus, selectFrame, selectFrameStatus } from "./frameData"
import { CenterContainer, MainContainer, FlexMainContainer } from "../../styled-components/containerElements"
import { FrameCard } from "../../cards/frameCard"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { CardContainer } from "../../styled-components/card"
import { Image } from "../../styled-components/image"

export const Frame = () => {
  const dispatch = useDispatch()
  const frameStatus = useSelector(selectFrameStatus)
  const frame = useSelector(selectFrame)
  const frameID = parseInt(useParams().frameID)

  useTitle(frameStatus === "succeeded" ? `${frame.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchFrame(frameID))
    return () => dispatch(clearStatus())
  }, [dispatch, frameID])
  
  return (
    <>
      {frameStatus !== "rejected" ? (
        <MainContainer>
          {frameStatus === "succeeded" ? (
            <>
              <FlexMainContainer>
                <FrameCard frame={frame} />
              </FlexMainContainer>
              <FlexMainContainer>
                <CardContainer primary>
                  <CenterContainer>
                    <Image alt={frame.name} src={frame.image} />
                  </CenterContainer>
                </CardContainer>
              </FlexMainContainer>
            </>
          ) : (
            <Loading />
          )}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}