import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { SURVEYS_ENDPOINT } from "../../../features/constants"
import { formatText } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchSurvey = createAsyncThunk("frame/fetchSurvey", async (surveyID) => {
  const response = await axios.get(`${SURVEYS_ENDPOINT}/${surveyID}`)
  const survey = response.data
  return survey
})

export const surveySlice = createSharedCollectableSlice("survey", initialState, {}, fetchSurvey)
export default surveySlice.reducer
export const { clearStatus } = surveySlice.actions
export const selectSurveyStatus = (state) => state.survey.status

export const selectSurvey = (state) => {
  const { data } = state.survey
  if (data === null) {
    return data
  }
  const commonData = {
    owned: data.owned === null ? "0%" : data.owned,
    patch: data.patch,
  }
  const formData = {
    id: data.id,
    name: data.name,
    dungeon: data.dungeon,
    commonData: commonData,
    solution: data.solution,
    description: formatText(data.description),
    image: data.image,
  }
  return formData
}