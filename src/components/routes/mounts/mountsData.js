import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { MOUNT_ENDPOINT, MOUNT_URL } from "../../../features/constants"
import { getSourceText, filterData, hasLimitedSource, hasPremiumSource } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all", tradeable: "all", isLimited: false, isPremium: false, unknown: false },
  owned: [],
}

export const fetchMounts = createAsyncThunk("mounts/fetchMounts", async (query) => {
  const response = query ? await axios.get(`${MOUNT_ENDPOINT}?${query}`) : await axios.get(MOUNT_ENDPOINT)
  const mounts = response.data.results
  return mounts
})

export const mountsSlice = createSharedCollectableListSlice("mounts", initialState, {}, fetchMounts)
export default mountsSlice.reducer
export const { setFilter, setOwned, clearStatus } = mountsSlice.actions
export const selectStatus = (state) => state.mounts.status

export const selectTableMountsData = (state) => {
  const {
    mounts: { data, filters, owned },
  } = state
  const tableData = data.map((mount) => {
    const sourceText = getSourceText(mount)
    return {
      ...mount,
      path: `${MOUNT_URL}/${mount.id}`,
      source: sourceText,
      tradeable: mount.item_id !== null ? "tradeable" : "untradeable",
      unknown: mount.sources.length === 0 ? true : false,
      isOwned: owned.includes(mount.id) ? "owned" : "missing",
      isLimited: hasLimitedSource(mount.sources),
      isPremium: hasPremiumSource(mount.sources),
    }
  })
  return filterData(tableData, filters)
}

export const selectFilters = (state) => state.mounts.filters