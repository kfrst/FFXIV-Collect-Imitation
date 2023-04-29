import { createSlice } from "@reduxjs/toolkit"

export const createSharedCollectableListSlice = (name, initialState, reducers, fetchFunction) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      setFilter(state, action) {
        state.filters = action.payload
      },
      setOwned(state, action) {
        const elementID = action.payload
        const ownedElementIndex = state.owned.findIndex((ownedID) => ownedID === elementID)
        ownedElementIndex === -1 ? state.owned.push(elementID) : state.owned.splice(ownedElementIndex, 1)
      },
      clearStatus(state) {
        state.status = "idle"
      },
      ...reducers,
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchFunction.pending, (state, action) => {
          state.status = "loading"
        })
        .addCase(fetchFunction.fulfilled, (state, action) => {
          state.status = "succeeded"
          state.data = action.payload
        })
        .addCase(fetchFunction.rejected, (state, action) => {
          state.status = "rejected"
          state.error = action.error.message
        })
    },
  })
}

export const createSharedCollectableSlice = (name, initialState, reducers, fetchFunction) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      clearStatus(state){
        state.status = "idle"
      },
      ...reducers,
    },
    extraReducers(builder) {
      builder
        .addCase(fetchFunction.pending, (state) => {
          state.status = "loading"
        })
        .addCase(fetchFunction.fulfilled, (state, action) => {
          state.status = "succeeded"
          state.data = action.payload
        })
        .addCase(fetchFunction.rejected, (state, action) => {
          state.status = "rejected"
          state.error = action.error.message
        })
    },
  })
}