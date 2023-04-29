import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { FRAMES_ENDPOINT, FRAMES_URL } from "../../../features/constants"
import { filterData } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all", tradeable: "all" },
  owned: [],
}

export const fetchFrames = createAsyncThunk("frames/fetchFrames", async (query) => {
  const response = query ? await axios.get(`${FRAMES_ENDPOINT}?${query}`) : await axios.get(FRAMES_ENDPOINT)
  const frames = response.data.results
  return frames
})

export const framesSlice = createSharedCollectableListSlice("frames", initialState, {}, fetchFrames)
export default framesSlice.reducer
export const { setFilter, setOwned, clearStatus } = framesSlice.actions
export const selectStatus = (state) => state.frames.status

export const selectTableFramesData = (state) => {
  const {
    frames: { data, filters, owned },
  } = state
  const tableData = data.map((frame) => {
    return {
      ...frame,
      path: `${FRAMES_URL}/${frame.id}`,
      tradeable: frame.item_id !== null ? "tradeable" : "untradeable",
      isOwned: owned.includes(frame.id) ? "owned" : "missing",
    }
  })
  return filterData(tableData, filters)
}

export const selectFilters = (state) => state.frames.filters