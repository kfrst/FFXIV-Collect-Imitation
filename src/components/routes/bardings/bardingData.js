import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { BARDINGS_ENDPOINT } from "../../../features/constants"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchBarding = createAsyncThunk("barding/fetchBarding", async (bardingID) => {
  const response = await axios.get(`${BARDINGS_ENDPOINT}/${bardingID}`)
  const barding = response.data
  return barding
})

export const bardingSlice = createSharedCollectableSlice("barding", initialState, {}, fetchBarding)
export default bardingSlice.reducer
export const { clearStatus } = bardingSlice.actions
export const selectBardingStatus = (state) => state.barding.status

export const selectBarding = (state) => {
  const { data } = state.barding
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
    commonData: commonData,
    sources: data.sources,
    tradeable: data.tradeable ? "Yes" : "No",
    icon: data.icon,
  }
  return formData
}
