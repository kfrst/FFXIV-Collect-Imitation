import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { HAIRSTYLES_ENDPOINT } from "../../../features/constants"
import { formatText } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchHairstyle = createAsyncThunk("hairstyle/fetchHairstyle", async (hairstyleID) => {
  const response = await axios.get(`${HAIRSTYLES_ENDPOINT}/${hairstyleID}`)
  const hairstyle = response.data
  return hairstyle
})

export const hairstyleSlice = createSharedCollectableSlice("hairstyle", initialState, {}, fetchHairstyle)
export default hairstyleSlice.reducer
export const { clearStatus } = hairstyleSlice.actions
export const selectHairstyleStatus = (state) => state.hairstyle.status

export const selectHairstyle = (state) => {
  const { data } = state.hairstyle
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
    description: formatText(data.description),
    tradeable: data.tradeable ? "Yes" : "No",
    image: data.icon,
  }
  return formData
}