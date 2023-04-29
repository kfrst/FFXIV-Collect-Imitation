import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { ORCHESTRION_ENDPOINT } from "../../../features/constants"
import { formatText } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchOrchestrion = createAsyncThunk("orchestrion/fetchOrchestrion", async (orchestrionID) => {
  const response = await axios.get(`${ORCHESTRION_ENDPOINT}/${orchestrionID}`)
  const orchestrion = response.data
  return orchestrion
})

export const orchestrionSlice = createSharedCollectableSlice("orchestrion", initialState, {}, fetchOrchestrion)
export default orchestrionSlice.reducer
export const { clearStatus } = orchestrionSlice.actions
export const selectOrchestrionStatus = (state) => state.orchestrion.status

export const selectOrchestrion = (state) => {
  const { data } = state.orchestrion
  if (data === null) {
    return data
  }
  const commonData = {
    owned: data.owned === null ? "0%" : data.owned,
    patch: data.patch,
  }
  const formData = {
    id: data.id,
    number: data.number,
    name: data.name,
    category: data.category.name,
    commonData: commonData,
    description: formatText(data.description),
    tradeable: data.tradeable ? "Yes" : "No",
    icon: data.icon,
  }
  return formData
}