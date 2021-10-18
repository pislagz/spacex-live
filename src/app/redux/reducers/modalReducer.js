import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    type: null,
  },
  reducers: {
    closeModal(state, action) {
      state.isOpen = false;
    },
    openModal(state, action) {
      state.isOpen = true;
      state.type = action.payload.type;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
