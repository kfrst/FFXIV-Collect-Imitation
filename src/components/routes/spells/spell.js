import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchSpell, clearStatus, selectSpell, selectSpellStatus } from "./spellData"
import { MainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { SpellCard } from "../../cards/spellCard"

export const Spell = () => {
  const dispatch = useDispatch()
  const spell = useSelector(selectSpell)
  const spellStatus = useSelector(selectSpellStatus)
  const spellID = parseInt(useParams().spellID, 10)

  useTitle(spellStatus === "succeeded" ? `${spell.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchSpell(spellID))
    return () => dispatch(clearStatus())
  }, [dispatch, spellID])
  
  return (
    <>
      {spellStatus !== "rejected" ? (
        <MainContainer>
          {spellStatus === "succeeded" ? <SpellCard spell={spell} /> : <Loading />}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}