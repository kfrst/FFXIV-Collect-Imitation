import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { SPELLS_ENDPOINT, SPELLS_URL } from "../../../features/constants"
import { filterData } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all" },
  owned: [],
}

export const fetchSpells = createAsyncThunk("spells/fetchSpells", async (query) => {
  const response = query ? await axios.get(`${SPELLS_ENDPOINT}?${query}`) : await axios.get(SPELLS_ENDPOINT)
  const spells = response.data.results
  return spells
})

export const spellsSlice = createSharedCollectableListSlice("spells", initialState, {}, fetchSpells)
export default spellsSlice.reducer
export const { setFilter, setOwned, clearStatus } = spellsSlice.actions
export const selectSpellsStatus = (state) => state.spells.status
export const selectSpellsFilters = (state) => state.spells.filters

export const selectSpellsTableData = (state) => {
  const {
    spells: { data, filters, owned },
  } = state
  const tableData = data.map((spell) => {
    const { enemy, location } = getLocationEnemyText(spell)
    const aspect = spell.aspect.name
    const type = spell.type.name
    const order = `No. ${spell.order}`
    return {
      ...spell,
      path: `${SPELLS_URL}/${spell.id}`,
      enemy: enemy,
      location: location,
      aspect: aspect,
      type: type,
      order: order,
      isOwned: owned.includes(spell.id) ? "owned" : "missing",
    }
  })
  return filterData(tableData, filters)
}

// If sources have an "/" splits the text on "Enemy" and "Location"
const getLocationEnemyText = (data) => {
  const sourcesLength = data.sources.length - 1
  return data.sources.reduce(
    (text, source, index) => {
      let splitSourceText = source.text.split(" / ")
      if (index < sourcesLength) {
        if (splitSourceText.length === 2) {
          return {
            enemy: text.enemy.concat(`${splitSourceText[0]} \n`),
            location: text.location.concat(`${splitSourceText[1]} \n`),
          }
        }
        return { ...text, location: text.location.concat(`${splitSourceText} \n`) }
      }
      if (splitSourceText.length === 2) {
        return {
          enemy: text.enemy.concat(splitSourceText[0]),
          location: text.location.concat(splitSourceText[1]),
        }
      }
      return { ...text, location: text.location.concat(source.text) }
    },
    { enemy: "", location: "" }
  )
}