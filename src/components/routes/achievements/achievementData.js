import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { ACHIEVEMENTS_ENDPOINT } from "../../../features/constants"
import { formatText } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchAchievement = createAsyncThunk("frame/fetchAchievement", async (achievementID) => {
  const response = await axios.get(`${ACHIEVEMENTS_ENDPOINT}/${achievementID}`)
  const achievement = response.data
  return achievement
})

export const achievementSlice = createSharedCollectableSlice("achievement", initialState, {}, fetchAchievement)
export default achievementSlice.reducer
export const { clearStatus } = achievementSlice.actions
export const selectAchievementStatus = (state) => state.achievement.status

export const selectAchievement = (state) => {
  const { data } = state.achievement
  if (data === null) {
    return data
  }
  const commonData = {
    owned: data.owned === null ? "0%" : data.owned,
    patch: data.patch,
  }
  const formData = {
    id: data.id,
    name: data.name,
    description: formatText(data.description),
    categoryName: data.type.name.concat(" / ", data.category.name),
    points: data.points,
    commonData: commonData,
    icon: data.icon,
    image: data.image,
    reward:
      data.reward && data.reward.type === "Title"
        ? { name: data.reward.title.name, femaleName: data.reward.title.female_name }
        : null,
  }
  return formData
}
