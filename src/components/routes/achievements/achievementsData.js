import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { ACHIEVEMENTS_ENDPOINT, ACHIEVEMENTS_URL } from "../../../features/constants"
import { filterAchievementsData } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all" },
  owned: [],
}

export const fetchAchievements = createAsyncThunk("achievements/fetchAchievements", async (query) => {
  const response = query
    ? await axios.get(`${ACHIEVEMENTS_ENDPOINT}?${query}`)
    : await axios.get(ACHIEVEMENTS_ENDPOINT)
  const achievements = response.data.results
  return achievements
})

export const achievementsSlice = createSharedCollectableListSlice(
  "achievements",
  initialState,
  {},
  fetchAchievements
)
export default achievementsSlice.reducer
export const { setFilter, setOwned, clearStatus } = achievementsSlice.actions
export const selectStatus = (state) => state.achievements.status

export const selectTableAchievementsData = (state) => {
  const {
    achievements: { data, filters, owned },
  } = state
  const tableData = data.map((achievement) => {
    return {
      id: achievement.id,
      name: achievement.name,
      path: `${ACHIEVEMENTS_URL}/${achievement.id}`,
      description: achievement.description,
      points: achievement.points,
      patch: achievement.patch,
      icon: achievement.icon,
      owned: achievement.owned === null ? "0%" : achievement.owned,
      category: achievement.type.name.concat(" / ", achievement.category.name),
      isOwned: owned.includes(achievement.id) ? "owned" : "missing",
    }
  })
  return filterAchievementsData(tableData, filters)
}

export const selectFilters = (state) => state.achievements.filters
