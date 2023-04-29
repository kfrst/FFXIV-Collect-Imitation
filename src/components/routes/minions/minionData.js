import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { MINION_ENDPOINT } from "../../../features/constants"
import { formatText } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

// An array used to determine background-position
const skillAngles = [0, 30, 120, 360]

export const fetchMinion = createAsyncThunk("minion/fetchMinion", async (minionID) => {
  const response = await axios.get(`${MINION_ENDPOINT}/${minionID}`)
  const minion = response.data
  return minion
})

export const minionSlice = createSharedCollectableSlice("minion", initialState, {}, fetchMinion)
export default minionSlice.reducer
export const { clearStatus } = minionSlice.actions
export const selectMinionStatus = (state) => state.minion.status

export const selectMinion = (state) => {
  const { data } = state.minion
  if (data === null) {
    return data
  }
  const { verminion } = data
  const strengths = [
    { type: "Gates", data: verminion.gate },
    { type: "Search Eyes", data: verminion.eye },
    { type: "Shields", data: verminion.shield },
  ]
  const stats = [
    { title: "HP", data: verminion.hp },
    { title: "ATK", data: verminion.attack },
    { title: "DEF", data: verminion.defense },
    { title: "SPD", data: verminion.speed },
    { title: "Cost", data: verminion.cost },
    { title: "Auto-attack", data: verminion.area_attack ? "Multi-target" : "Single-target" },
    { title: "Strengths", data: strengths },
  ]
  const skillsData = [
    { title: "Points", data: verminion.skill_cost },
    { title: "Type", data: verminion.skill_type.name },
  ]
  const verminionData = {
    race: data.race.name,
    raceID: data.race.id,
    stats: stats,
    skillStats: skillsData,
    skill: verminion.skill,
    skillAngle: verminion.skill_angle,
    skillDescription: formatText(verminion.skill_description),
  }
  const commonData = {
    owned: data.owned === null ? "0%" : data.owned,
    patch: data.patch,
  }
  const minionData = {
    id: data.id,
    name: data.name,
    description: formatText(data.description),
    journal: data.enhanced_description,
    tooltip: formatText(data.tooltip),
    sources: data.sources,
    behavior: data.behavior.name,
    tradeable: data.tradeable ? "Yes" : "No",
    commonData: commonData,
    image: data.image,
  }

  const formData = {
    minion: minionData,
    verminion: verminionData,
  }
  return formData
}

export const getSkillIndex = (angle) => {
  return skillAngles.indexOf(angle)
}