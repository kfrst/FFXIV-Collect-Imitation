import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { ARMOIRES_ENDPOINT } from "../../../features/constants"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchArmoire = createAsyncThunk("armoire/fetchArmoire", async (armoireID) => {
  const response = await axios.get(`${ARMOIRES_ENDPOINT}/${armoireID}`)
  const armoire = response.data
  return armoire
})

export const armoireSlice = createSharedCollectableSlice("armoire", initialState, {}, fetchArmoire)
export default armoireSlice.reducer
export const { clearStatus } = armoireSlice.actions
export const selectArmoireStatus = (state) => state.armoire.status

export const selectArmoire = (state) => {
  const { data } = state.armoire
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
    commonData: commonData,
    sources: data.sources,
    tradeable: data.tradeable ? "Yes" : "No",
    icon: data.icon,
  }
  return formData
}
