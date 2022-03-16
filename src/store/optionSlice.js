/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import emojiMenus from '../data/EmojiMock';

const initialState = {
  leftSearchItem: '',
  rightSearchItem: '',
  availableOptions: emojiMenus,
  selectedOptions: [],
  availableSelection: [],
  selectedSelection: [],
};
const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    updateLeftSearch(state, action) {
      state.leftSearchItem = action.payload;
    },

    updateRightSearch(state, action) {
      state.rightSearchItem = action.payload;
    },
    setSelection(state, { payload: { type, index } }) {
      if (type === 'available') {
        state.availableSelection = index;
      } else {
        state.selectedSelection = index;
      }
    },
    changeAvailableOptions(state, action) {
      state.availableOptions = action.payload;
    },
    changeSelectedOptions(state, action) {
      state.selectedOptions = action.payload;
    },
  },
});

export const {
  updateLeftSearch,
  updateRightSearch,
  changeAvailableOptions,
  changeSelectedOptions,
  setSelection,
} = optionSlice.actions;
export default optionSlice.reducer;
