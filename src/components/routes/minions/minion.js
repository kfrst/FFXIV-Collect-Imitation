import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchMinion, clearStatus, selectMinion, selectMinionStatus, getSkillIndex } from "./minionData"
import { MainContainer, FlexMainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { MinionCard } from "../../cards/minionCard"
import { VerminionCard } from "../../cards/verminionCard"

export const Minion = () => {
  const dispatch = useDispatch()
  const { minion, verminion } = { ...useSelector(selectMinion) }
  const minionStatus = useSelector(selectMinionStatus)
  const minionID = parseInt(useParams().minionID)

  useTitle(minionStatus === "succeeded" ? `${minion.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchMinion(minionID))
    return () => dispatch(clearStatus())
  }, [dispatch, minionID])
  
  return (
    <>
      {minionStatus !== "rejected" ? (
        <MainContainer>
          {minionStatus === "succeeded" ? (
            <FlexMainContainer>
              <MinionCard minion={minion} />
              <VerminionCard
                verminion={verminion}
                minionID={minion.id}
                skillIndex={getSkillIndex(verminion.skillAngle)}
              />
            </FlexMainContainer>
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