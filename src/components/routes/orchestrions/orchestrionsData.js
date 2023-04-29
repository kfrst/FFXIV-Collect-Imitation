import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { ORCHESTRION_ENDPOINT, ORCHESTRION_URL } from "../../../features/constants"
import { filterData, hasLimitedCategory, hasPremiumCategory } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all", tradeable: "all", isLimited: false, isPremium: false },
  owned: [],
}

export const fetchOrchestrions = createAsyncThunk("orchestrions/fetchOrchestrions", async (query) => {
  const response = query
    ? await axios.get(`${ORCHESTRION_ENDPOINT}?${query}`)
    : await axios.get(ORCHESTRION_ENDPOINT)
  const orchestrions = response.data.results
  return orchestrions
})

export const orchestrionsSlice = createSharedCollectableListSlice(
  "orchestrions",
  initialState,
  {},
  fetchOrchestrions
)
export default orchestrionsSlice.reducer
export const { setFilter, setOwned, clearStatus } = orchestrionsSlice.actions

export const selectOrchestrionsStatus = (state) => state.orchestrions.status
export const selectFilters = (state) => state.orchestrions.filters
export const selectTableOrchestrionsData = (state) => {
  const {
    orchestrions: { data, filters, owned },
  } = state

  const tableData = data.map((orchestrion) => {
    const categoryText = orchestrion.category.name
    return {
      ...orchestrion,
      path: `${ORCHESTRION_URL}/${orchestrion.id}`,
      category: categoryText,
      tradeable: orchestrion.item_id !== null ? "tradeable" : "untradeable",
      isOwned: owned.includes(orchestrion.id) ? "owned" : "missing",
      isLimited: hasLimitedCategory(categoryText),
      isPremium: hasPremiumCategory(categoryText),
    }
  })
  return filterData(tableData, filters)
}