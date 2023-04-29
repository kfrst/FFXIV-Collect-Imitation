import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { FASHIONS_ENDPOINT } from "../../../features/constants"
import { formatText } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchFashion = createAsyncThunk("fashion/fetchFashion", async (fashionID) => {
  const response = await axios.get(`${FASHIONS_ENDPOINT}/${fashionID}`)
  const fashion = response.data
  return fashion
})

export const fashionSlice = createSharedCollectableSlice("fashion", initialState, {}, fetchFashion)
export default fashionSlice.reducer
export const { clearStatus } = fashionSlice.actions
export const selectFashionStatus = (state) => state.fashion.status

export const selectFashion = (state) => {
  const { data } = state.fashion
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
    image: data.image,
  }
  return formData
}
