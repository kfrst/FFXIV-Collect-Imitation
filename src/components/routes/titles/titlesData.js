import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { TITLES_ENDPOINT, ACHIEVEMENTS_URL } from "../../../features/constants"
import { filterData } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all" },
  owned: [],
}

export const fetchTitles = createAsyncThunk("titles/fetchTitles", async (query) => {
  const response = query ? await axios.get(`${TITLES_ENDPOINT}?${query}`) : await axios.get(TITLES_ENDPOINT)
  const titles = response.data.results
  return titles
})

export const titlesSlice = createSharedCollectableListSlice("titles", initialState, {}, fetchTitles)
export default titlesSlice.reducer
export const { setFilter, setOwned, clearStatus } = titlesSlice.actions
export const selectStatus = (state) => state.titles.status

export const selectTableTitlesData = (state) => {
  const {
    titles: { data, filters, owned },
  } = state
  const tableData = data.map((title) => {
    const { achievement } = title
    return {
      id: title.id,
      order: title.order,
      title: title.name,
      femaleName: title.female_name,
      achievement: title.achievement.name,
      achievementPath: `${ACHIEVEMENTS_URL}/${achievement.id}`,
      category: title.achievement.type.name.concat(" / ", title.achievement.category.name),
      isOwned: owned.includes(title.id) ? "owned" : "missing",
      owned: title.owned,
      patch: title.patch,
    }
  })
  return filterData(tableData, filters)
}

export const selectFilters = (state) => state.titles.filters