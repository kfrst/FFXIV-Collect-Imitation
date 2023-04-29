import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { FRAMES_ENDPOINT } from "../../../features/constants"
import { formatText } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchFrame = createAsyncThunk("frame/fetchFrame", async (frameID) => {
  const response = await axios.get(`${FRAMES_ENDPOINT}/${frameID}`)
  const frame = response.data
  return frame
})

export const frameSlice = createSharedCollectableSlice("frame", initialState, {}, fetchFrame)
export default frameSlice.reducer
export const { clearStatus } = frameSlice.actions
export const selectFrameStatus = (state) => state.frame.status

export const selectFrame = (state) => {
  const { data } = state.frame
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
    item_name: data.item_name,
    commonData: commonData,
    description: data.description ? formatText(data.description) : null,
    icon: data.icon,
    image: data.image,
  }
  return formData
}