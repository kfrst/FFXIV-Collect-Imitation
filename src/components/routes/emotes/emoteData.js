import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableSlice } from "../../../store/genericSlice"
import { EMOTES_ENDPOINT } from "../../../features/constants"
import axios from "axios"

const initialState = {
  data: null,
  status: "idle",
  error: null,
}

export const fetchEmote = createAsyncThunk("emote/fetchEmote", async (emoteID) => {
  const response = await axios.get(`${EMOTES_ENDPOINT}/${emoteID}`)
  const emote = response.data
  return emote
})

export const emoteSlice = createSharedCollectableSlice("emote", initialState, {}, fetchEmote)
export default emoteSlice.reducer
export const { clearStatus } = emoteSlice.actions
export const selectEmoteStatus = (state) => state.emote.status

export const selectEmote = (state) => {
  const { data } = state.emote
  if (data === null) {
    return data
  }
  const commonData = {
    owned: data.owned === null ? "0%" : data.owned,
    patch: data.patch,
  }
  const formData = {
    ...data,
    commonData: commonData,
    command: data.command.split(", "),
    tradeable: data.tradeable ? "Yes" : "No",
  }
  return formData
}
