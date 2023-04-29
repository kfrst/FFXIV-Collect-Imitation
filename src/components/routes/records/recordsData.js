import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSharedCollectableListSlice } from "../../../store/genericSlice"
import { RECORDS_ENDPOINT, RECORDS_URL } from "../../../features/constants"
import { getSourceText, filterData } from "../../../features/util"
import axios from "axios"

const initialState = {
  data: [],
  status: "idle",
  error: null,
  filters: { isOwned: "all", unknown: false },
  owned: [],
}

export const fetchRecords = createAsyncThunk("records/fetchRecords", async (query) => {
  const response = query ? await axios.get(`${RECORDS_ENDPOINT}?${query}`) : await axios.get(RECORDS_ENDPOINT)
  const records = response.data.results
  return records
})

export const recordsSlice = createSharedCollectableListSlice("records", initialState, {}, fetchRecords)
export default recordsSlice.reducer
export const { setFilter, setOwned, clearStatus } = recordsSlice.actions
export const selectRecordsStatus = (state) => state.records.status
export const selectRecordsFilters = (state) => state.records.filters
export const selectRecordsTableData = (state) => {
  const {
    records: { data, owned, filters },
  } = state
  const tableData = data.map((record) => {
    const sourceText = getSourceText(record)
    return {
      ...record,
      source: sourceText,
      path: `${RECORDS_URL}/${record.id}`,
      order: record.id.toString().padStart(2, "0"),
      rank: record.rarity,
      isOwned: owned.includes(record.id) ? "owned" : "missing",
      unknown: record.sources.length === 0 ? true : false,
    }
  })
  return filterData(tableData, filters)
}