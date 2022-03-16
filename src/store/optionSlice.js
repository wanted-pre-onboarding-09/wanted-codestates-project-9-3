/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import emojiMenus from '../data/EmojiMock';

const initialState = {
  leftSearchItem: '',
  rightSearchItem: '',
  availableOptions: emojiMenus,
  selectedOptions: [],
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
  },
});

export const { updateLeftSearch, updateRightSearch } = optionSlice.actions;
export default optionSlice.reducer;
