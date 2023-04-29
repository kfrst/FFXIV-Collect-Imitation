import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { MINION_ENDPOINT, MINION_URL } from "../../../features/constants"
import { getSourceText, filterData, hasLimitedSource, hasPremiumSource } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all", tradeable: "all", isLimited: false, isPremium: false, unknown: false },
  owned: [],
}

export const fetchMinions = createAsyncThunk("minions/fetchMinions", async (query) => {
  const response = query ? await axios.get(`${MINION_ENDPOINT}?${query}`) : await axios.get(MINION_ENDPOINT)
  const minions = response.data.results
  return minions
})
export const minionsSlice = createSharedCollectableListSlice("minions", initialState, {}, fetchMinions)
export default minionsSlice.reducer
export const { setFilter, setOwned, clearStatus } = minionsSlice.actions
export const selectMinionsStatus = (state) => state.minions.status
export const selectFilters = (state) => state.minions.filters

export const selectTableMinionsData = (state) => {
  const {
    minions: { data, filters, owned },
  } = state
  const tableData = data.map((minion) => {
    const sourceText = getSourceText(minion)
    return {
      ...minion,
      source: sourceText,
      path: `${MINION_URL}/${minion.id}`,
      tradeable: minion.item_id !== null ? "tradeable" : "untradeable",
      unknown: minion.sources.length === 0 ? true : false,
      isOwned: owned.includes(minion.id) ? "owned" : "missing",
      isLimited: hasLimitedSource(minion.sources),
      isPremium: hasPremiumSource(minion.sources),
    }
  })
  return filterData(tableData, filters)
}