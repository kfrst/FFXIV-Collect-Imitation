import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { HAIRSTYLES_ENDPOINT, HAIRSTYLES_URL } from "../../../features/constants"
import { getSourceText, filterData, hasLimitedSource, hasPremiumSource } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all", tradeable: "all", isLimited: false, isPremium: false, unknown: false },
  owned: [],
}

export const fetchHairstyles = createAsyncThunk("hairstyles/fetchHairstyles", async (query) => {
  const response = query
    ? await axios.get(`${HAIRSTYLES_ENDPOINT}?${query}`)
    : await axios.get(HAIRSTYLES_ENDPOINT)
  const hairstyles = response.data.results
  return hairstyles
})

export const hairstylesSlice = createSharedCollectableListSlice("hairstyles", initialState, {}, fetchHairstyles)
export default hairstylesSlice.reducer
export const { setFilter, setOwned, clearStatus } = hairstylesSlice.actions
export const selectHairstylesStatus = (state) => state.hairstyles.status
export const selectHairstylesFilters = (state) => state.hairstyles.filters

export const selectHairstylesTableData = (state) => {
  const {
    hairstyles: { data, filters, owned },
  } = state
  const tableData = data.map((hairstyle) => {
    const sourceText = getSourceText(hairstyle)
    return {
      ...hairstyle,
      source: sourceText,
      path: `${HAIRSTYLES_URL}/${hairstyle.id}`,
      unknown: hairstyle.sources.length === 0 ? true : false,
      tradeable: hairstyle.item_id !== null ? "tradeable" : "untradeable",
      isOwned: owned.includes(hairstyle.id) ? "owned" : "missing",
      isLimited: hasLimitedSource(hairstyle.sources),
      isPremium: hasPremiumSource(hairstyle.sources),
    }
  })
  return filterData(tableData, filters)
}