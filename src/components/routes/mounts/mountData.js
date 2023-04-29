import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { MOUNT_ENDPOINT } from "../../../features/constants"
import { formatText } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchMount = createAsyncThunk("mount/fetchMount", async (mountID) => {
  const response = await axios.get(`${MOUNT_ENDPOINT}/${mountID}`)
  const mount = response.data
  return mount
})

export const mountSlice = createSharedCollectableSlice("mount", initialState, {}, fetchMount)
export default mountSlice.reducer
export const { clearStatus } = mountSlice.actions
export const selectMountStatus = (state) => state.mount.status

export const selectMount = (state) => {
  const { data } = state.mount
  if (data === null) {
    return data
  }
  const commonData = {
    owned: data.owned === null ? "0%" : data.owned,
    patch: data.patch,
  }
  const formData = {
    ...data,
    owned: data.owned === null ? "0%" : data.owned,
    journal: data.enhanced_description,
    description: formatText(data.description),
    commonData: commonData,
    tooltip: formatText(data.tooltip),
    tradeable: data.tradeable ? "Yes" : "No",
  }
  return formData
}