import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { SURVEYS_ENDPOINT, SURVEYS_URL } from "../../../features/constants"
import { filterData } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all" },
  owned: [],
}

export const fetchSurveys = createAsyncThunk("frames/fetchSurveys", async (query) => {
  const response = query ? await axios.get(`${SURVEYS_ENDPOINT}?${query}`) : await axios.get(SURVEYS_ENDPOINT)
  const surveys = response.data.results
  return surveys
})

export const surveysSlice = createSharedCollectableListSlice("frames", initialState, {}, fetchSurveys)
export default surveysSlice.reducer
export const { setFilter, setOwned, clearStatus } = surveysSlice.actions
export const selectStatus = (state) => state.surveys.status

export const selectTableSurveysData = (state) => {
  const {
    surveys: { data, filters, owned },
  } = state
  const tableData = data.map((survey) => {
    return {
      ...survey,
      order: survey.id.toString().padStart(2, "0"),
      path: `${SURVEYS_URL}/${survey.id}`,
      isOwned: owned.includes(survey.id) ? "owned" : "missing",
    }
  })
  return filterData(tableData, filters)
}

export const selectFilters = (state) => state.surveys.filters