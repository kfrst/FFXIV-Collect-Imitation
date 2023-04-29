import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchAchievement, clearStatus, selectAchievement, selectAchievementStatus } from "./achievementData"
import { MainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { AchievementCard } from "../../cards/achievementCard"

export const Achievement = () => {
  const dispatch = useDispatch()
  const achievement = useSelector(selectAchievement)
  const achievementStatus = useSelector(selectAchievementStatus)
  const achievementID = parseInt(useParams().achievementID, 10)
  useTitle(achievementStatus === 'succeeded' ? `${achievement.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchAchievement(achievementID))
    return () => dispatch(clearStatus())
  }, [dispatch, achievementID])
  
  return (
    <>
      {achievementStatus !== "rejected" ? (
        <MainContainer>
          {achievementStatus === "succeeded" ? <AchievementCard achievement={achievement} /> : <Loading />}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}
