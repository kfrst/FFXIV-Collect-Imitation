import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { EMOTES_ENDPOINT, EMOTES_URL } from "../../../features/constants"
import { getSourceText, filterData, hasLimitedSource, hasPremiumSource } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all", tradeable: "all", isLimited: false, isPremium: false, unknown: false },
  owned: [],
}
export const fetchEmotes = createAsyncThunk("emotes/fetchEmotes", async (query) => {
  const response = query ? await axios.get(`${EMOTES_ENDPOINT}?${query}`) : await axios.get(EMOTES_ENDPOINT)
  const emotes = response.data.results
  return emotes
})

export const emotesSlice = createSharedCollectableListSlice("emotes", initialState, {}, fetchEmotes)
export default emotesSlice.reducer
export const { setFilter, setOwned, clearStatus } = emotesSlice.actions
export const selectEmotesStatus = (state) => state.emotes.status
export const selectEmotesFilters = (state) => state.emotes.filters

export const selectEmotesTableData = (state) => {
  const {
    emotes: { data, filters, owned },
  } = state
  const tableData = data.map((emote) => {
    const sourceText = getSourceText(emote)
    return {
      ...emote,
      source: sourceText,
      path: `${EMOTES_URL}/${emote.id}`,
      category: emote.category.name,
      tradeable: emote.item_id !== null ? "tradeable" : "untradeable",
      unknown: emote.sources.length === 0 ? true : false,
      isOwned: owned.includes(emote.id) ? "owned" : "missing",
      isLimited: hasLimitedSource(emote.sources),
      isPremium: hasPremiumSource(emote.sources),
    }
  })
  return filterData(tableData, filters)
}
