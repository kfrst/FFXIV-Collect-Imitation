import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { BARDINGS_ENDPOINT, BARDINGS_URL } from "../../../features/constants"
import { getSourceText, filterData, hasLimitedSource, hasPremiumSource } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all", tradeable: "all", isLimited: false, isPremium: false, unknown: false },
  owned: [],
}
export const fetchBardings = createAsyncThunk("bardings/fetchBardings", async (query) => {
  const response = query
    ? await axios.get(`${BARDINGS_ENDPOINT}?${query}`)
    : await axios.get(BARDINGS_ENDPOINT)
  const armoires = response.data.results
  return armoires
})

export const bardingsSlice = createSharedCollectableListSlice("bardings", initialState, {}, fetchBardings)
export default bardingsSlice.reducer
export const { setFilter, setOwned, clearStatus } = bardingsSlice.actions
export const selectBardingsStatus = (state) => state.bardings.status
export const selectBardingsFilters = (state) => state.bardings.filters

export const selectBardingsTableData = (state) => {
  const {
    bardings: { data, filters, owned },
  } = state
  const tableData = data.map((barding) => {
    const sourceText = getSourceText(barding)
    return {
      ...barding,
      source: sourceText,
      path: `${BARDINGS_URL}/${barding.id}`,
      tradeable: barding.item_id !== null ? "tradeable" : "untradeable",
      unknown: barding.sources.length === 0 ? true : false,
      isOwned: owned.includes(barding.id) ? "owned" : "missing",
      isLimited: hasLimitedSource(barding.sources),
      isPremium: hasPremiumSource(barding.sources),
    }
  })
  return filterData(tableData, filters)
}
