import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { RECORDS_ENDPOINT } from "../../../features/constants"
import { formatText } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchRecord = createAsyncThunk("record/fetchRecord", async (recordID) => {
  const response = await axios.get(`${RECORDS_ENDPOINT}/${recordID}`)
  const record = response.data
  return record
})

export const recordSlice = createSharedCollectableSlice("record", initialState, {}, fetchRecord)
export default recordSlice.reducer
export const { clearStatus } = recordSlice.actions
export const selectRecordStatus = (state) => state.record.status

export const selectRecord = (state) => {
  const { data } = state.record
  if (data === null) {
    return data
  }
  const commonData = {
    owned: data.owned === null ? "0%" : data.owned,
    patch: data.patch,
  }
  const formData = {
    ...data,
    name: data.name,
    commonData: commonData,
    description: formatText(data.description),
  }
  return formData
}