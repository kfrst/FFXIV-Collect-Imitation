import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { SPELLS_ENDPOINT } from "../../../features/constants"
import { formatText } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchSpell = createAsyncThunk("spell/fetchSpell", async (spellID) => {
  const response = await axios.get(`${SPELLS_ENDPOINT}/${spellID}`)
  const spell = response.data
  return spell
})

export const spellSlice = createSharedCollectableSlice("spell", initialState, {}, fetchSpell)
export default spellSlice.reducer
export const { clearStatus } = spellSlice.actions
export const selectSpellStatus = (state) => state.spell.status

export const selectSpell = (state) => {
  const { data } = state.spell
  if (data === null) {
    return data
  }
  const commonData = {
    owned: data.owned === null ? "0%" : data.owned,
    patch: data.patch,
  }
  const formData = {
    ...data,
    aspect: data.aspect.name,
    type: data.type.name,
    commonData: commonData,
    description: formatText(data.description),
    tooltip: formatText(data.tooltip),
  }
  return formData
}