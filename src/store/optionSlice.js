import { createSlice } from '@reduxjs/toolkit';
import emojiMenus from '../data/EmojiMock';

const initialState = {
  availableOptions: emojiMenus,
  selectedOptions: [],
};

const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
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

export const { moveAll } = optionSlice.actions;
export default optionSlice.reducer;
