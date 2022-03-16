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
      console.log(index);
      if (type === 'available') {
        state.availableSelection = index;
      } else {
        state.selectedSelection = index;
      }
    },
  },
});

export const { updateLeftSearch, updateRightSearch, setSelection } =
  optionSlice.actions;
export default optionSlice.reducer;
