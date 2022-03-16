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
    moveAll(state, action) {
      if (action.payload === 'left') {
        state.availableOptions = [
          ...state.availableOptions,
          ...state.selectedOptions,
        ];
        state.selectedOptions = [];
      } else if (action.payload === 'right') {
        state.selectedOptions = [
          ...state.selectedOptions,
          ...state.availableOptions,
        ];
        state.availableOptions = [];
      } else if (action.payload === 'reset') {
        state.availableOptions = emojiMenus;
        state.selectedOptions = [];
      }
    },
  },
});

export const { updateLeftSearch, updateRightSearch, setSelection, moveAll } =
  optionSlice.actions;
export default optionSlice.reducer;
