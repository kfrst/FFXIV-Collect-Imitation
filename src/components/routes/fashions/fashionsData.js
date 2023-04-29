import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { FASHIONS_ENDPOINT, FASHIONS_URL } from "../../../features/constants"
import { getSourceText, filterData, hasLimitedSource, hasPremiumSource } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all", tradeable: "all", isLimited: false, isPremium: false, unknown: false },
  owned: [],
}

export const fetchFashions = createAsyncThunk("fashions/fetchFashions", async (query) => {
  const response = query
    ? await axios.get(`${FASHIONS_ENDPOINT}?${query}`)
    : await axios.get(FASHIONS_ENDPOINT)
  const fashions = response.data.results
  return fashions
})

export const fashionsSlice = createSharedCollectableListSlice("fashions", initialState, {}, fetchFashions)
export default fashionsSlice.reducer
export const { setFilter, setOwned, clearStatus } = fashionsSlice.actions
export const selectFashionsStatus = (state) => state.fashions.status
export const selectFashionsFilters = (state) => state.fashions.filters
export const selectFashionsTableData = (state) => {
  const {
    fashions: { data, filters, owned },
  } = state
  const tableData = data.map((fashion) => {
    const sourceText = getSourceText(fashion)
    return {
      ...fashion,
      source: sourceText,
      path: `${FASHIONS_URL}/${fashion.id}`,
      tradeable: fashion.item_id !== null ? "tradeable" : "untradeable",
      unknown: fashion.sources.length === 0 ? true : false,
      isOwned: owned.includes(fashion.id) ? "owned" : "missing",
      isLimited: hasLimitedSource(fashion.sources),
      isPremium: hasPremiumSource(fashion.sources),
    }
  })
  return filterData(tableData, filters)
}