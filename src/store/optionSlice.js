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
      // console.log(index);
      if (type === 'available') {
        state.availableSelection = index;
      } else {
        state.selectedSelection = index;
      }
      // console.log(state.selectedSelection);
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
    moveSelected(state, action) {
      if (action.payload === 'left') {
        const copyData = [...state.selectedOptions];

        const arr = state.selectedSelection.map(
          (el) => copyData.slice(el, el + 1)[0]
        );
        state.availableOptions = [...state.availableOptions, ...arr];

        const filteredData = Object.keys(state.selectedOptions)
          .filter((key) => !state.selectedSelection.includes(Number(key)))
          .reduce((obj, key) => {
            obj[key] = state.selectedOptions[key];
            return obj;
          }, []);

        const newData = filteredData.filter((el) => {
          return el != null;
        });

        state.selectedOptions = newData;

        state.selectedSelection = [];
      } else if (action.payload === 'right') {
        const copyData = [...state.availableOptions];

        const arr = state.availableSelection.map(
          (el) => copyData.slice(el, el + 1)[0]
        );
        state.selectedOptions = [...state.selectedOptions, ...arr];

        const filteredData = Object.keys(state.availableOptions)
          .filter((key) => !state.availableSelection.includes(Number(key)))
          .reduce((obj, key) => {
            obj[key] = state.availableOptions[key];
            return obj;
          }, []);

        const newData = filteredData.filter((el) => {
          return el != null;
        });
        state.availableOptions = newData;

        state.availableSelection = [];
      }
    },
  },
});

export const {
  updateLeftSearch,
  updateRightSearch,
  setSelection,
  moveAll,
  moveSelected,
} = optionSlice.actions;
export default optionSlice.reducer;
