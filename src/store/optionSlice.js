import { createSlice } from '@reduxjs/toolkit';
import emojiMenus from '../data/EmojiMock';

const initialState = {
  availableOptions: emojiMenus,
  selectedOptions: [],
};
const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {},
});

// export const {} = optionSlice.actions;
export default optionSlice.reducer;
