import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchSurvey, clearStatus, selectSurvey, selectSurveyStatus } from "./surveyData"
import { MainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { SurveyCard } from "../../cards/surveyCard"

export const Survey = () => {
  const dispatch = useDispatch()
  const surveyStatus = useSelector(selectSurveyStatus)
  const survey = useSelector(selectSurvey)
  const surveyID = parseInt(useParams().surveyID, 10)

  useTitle(surveyStatus === "succeeded" ? `${survey.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchSurvey(surveyID))
    return () => dispatch(clearStatus())
  }, [dispatch, surveyID])
  
  return (
    <>
      {surveyStatus !== "rejected" ? (
        <MainContainer>
          {surveyStatus === "succeeded" ? <SurveyCard survey={survey} /> : <Loading />}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}