import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchEmote, clearStatus, selectEmote, selectEmoteStatus } from "./emoteData"
import { MainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { EmoteCard } from "../../cards/emoteCard"

export const Emote = () => {
  const dispatch = useDispatch()
  const emote = useSelector(selectEmote)
  const emoteStatus = useSelector(selectEmoteStatus)
  const emoteID = parseInt(useParams().emoteID, 10)

  useTitle(emoteStatus === "succeeded" ? `${emote.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchEmote(emoteID))
    return () => dispatch(clearStatus())
  }, [dispatch, emoteID])
  
  return (
    <>
      {emoteStatus !== "rejected" ? (
        <MainContainer>
          {emoteStatus === "succeeded" ? <EmoteCard emote={emote} /> : <Loading />}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}
