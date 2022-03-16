import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: true,
  singleMove: true,
  showItemCnt: true,
  itemSize: 'XS',

  dashboardSize: {
    width: '250',
    height: '300',
  },
  title: true,
  titleInput: { available: 'available options', selected: 'selected options' },
};
const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    changeBoolean(state, action) {
      // eslint-disable-next-line no-param-reassign
      state[action.payload] = !state[action.payload];
    },
    changeItemSize(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.itemSize = action.payload;
    },
    changeTitle(state, action) {
      console.log(action.payload);
      // eslint-disable-next-line no-param-reassign
      state.titleInput[action.payload.titleType] = action.payload.value;
    },
    changeDashboardSize(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.dashboardSize[action.payload.size] = action.payload.value;
    },
  },
});

export const {
  changeBoolean,
  changeItemSize,
  changeTitle,
  changeDashboardSize,
} = settingSlice.actions;
export default settingSlice.reducer;
