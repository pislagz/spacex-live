import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    data: null,
    type: null,
  },
  reducers: {
    closeModal(state, action) {
      state.isOpen = false;
      state.data = action.payload.data;
      state.type = action.payload.type;
    },
    openModal(state, action) {
      state.isOpen = true;
      state.data = action.payload.data;
      state.type = action.payload.type;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
