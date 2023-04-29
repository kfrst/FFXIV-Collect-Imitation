import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { ARMOIRES_ENDPOINT, ARMOIRES_URL } from "../../../features/constants"
import { getSourceText, filterData, hasLimitedSource, hasPremiumSource } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all", isLimited: false, isPremium: false, unknown: false },
  owned: [],
}

export const fetchArmoires = createAsyncThunk("armoires/fetchArmoires", async (query) => {
  const response = query
    ? await axios.get(`${ARMOIRES_ENDPOINT}?${query}`)
    : await axios.get(ARMOIRES_ENDPOINT)
  const armoires = response.data.results
  return armoires
})

export const armoiresSlice = createSharedCollectableListSlice("armoires", initialState, {}, fetchArmoires)
export default armoiresSlice.reducer
export const { setFilter, setOwned, clearStatus } = armoiresSlice.actions
export const selectArmoiresStatus = (state) => state.armoires.status
export const selectArmoiresFilters = (state) => state.armoires.filters

export const selectArmoiresTableData = (state) => {
  const {
    armoires: { data, filters, owned },
  } = state
  const tableData = data.map((armoire) => {
    const sourceText = getSourceText(armoire)
    const categoryText = armoire.category.name
    return {
      ...armoire,
      source: sourceText,
      path: `${ARMOIRES_URL}/${armoire.id}`,
      category: categoryText,
      unknown: armoire.sources.length === 0 ? true : false,
      isOwned: owned.includes(armoire.id) ? "owned" : "missing",
      isLimited: hasLimitedSource(armoire.sources),
      isPremium: hasPremiumSource(armoire.sources),
    }
  })
  return filterData(tableData, filters)
}
