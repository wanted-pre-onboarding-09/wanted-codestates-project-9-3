/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';
import emojiMenus from '../data/EmojiMock';

const initialState = {
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
      // 오른쪽 옵션에 아무것도 없는 경우
      if (state.selectedOptions.length === 0) {
        state.availableOptions = [
          ...emojiMenus.filter((option) => {
            return option.name.indexOf(action.payload) !== -1;
          }),
        ];
      } else {
        /* 오른쪽 옵션에 요소가 있는 경우 */
        const newArr = emojiMenus
          .filter((option) => {
            return (
              state.selectedOptions
                .map((el) => {
                  return el.name;
                })
                .indexOf(option.name) === -1
            );
          })
          .filter((option) => {
            return option.name.indexOf(action.payload) !== -1;
          });

        state.availableOptions = [...newArr];
      }
    },
    updateRightSearch(state, action) {
      // 왼쪽 옵션에 아무것도 없는 경우
      if (state.availableOptions.length === 0) {
        state.selectedOptions = [
          ...emojiMenus.filter((option) => {
            return option.name.indexOf(action.payload) !== -1;
          }),
        ];
      } else {
        const newArr = emojiMenus
          .filter((option) => {
            return (
              state.availableOptions
                .map((el) => {
                  return el.name;
                })
                .indexOf(option.name) === -1
            );
          })
          .filter((option) => {
            return option.name.indexOf(action.payload) !== -1;
          });

        state.selectedOptions = [...newArr];
      }
    },
    setSelection(state, { payload: { type, index } }) {
      const set = new Set(index); // 중복 요소 제거
      if (type === 'available') {
        state.availableSelection = [...set].sort((a, b) => a - b);
      } else {
        state.selectedSelection = [...set].sort((a, b) => a - b);
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
    moveSelected(state, action) {
      if (action.payload === 'left') {
        const newData = state.selectedSelection.map(
          (el) => state.selectedOptions.slice(el, el + 1)[0]
        );
        state.availableOptions = [...state.availableOptions, ...newData];

        const filteredData = Object.keys(state.selectedOptions)
          .filter((key) => !state.selectedSelection.includes(Number(key)))
          .reduce((obj, key) => {
            obj[key] = state.selectedOptions[key];
            return obj;
          }, []);

        const updatedData = filteredData.filter((el) => {
          return el != null;
        });

        state.selectedOptions = updatedData;
        state.selectedSelection = [];
      } else if (action.payload === 'right') {
        const newData = state.availableSelection.map(
          (el) => state.availableOptions.slice(el, el + 1)[0]
        );

        state.selectedOptions = [...state.selectedOptions, ...newData];

        const filteredData = Object.keys(state.availableOptions)
          .filter((key) => !state.availableSelection.includes(Number(key)))
          .reduce((obj, key) => {
            obj[key] = state.availableOptions[key];
            return obj;
          }, []);

        const updatedData = filteredData.filter((el) => {
          return el != null;
        });
        state.availableOptions = updatedData;
        state.availableSelection = [];
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
  moveAll,
  moveSelected,
} = optionSlice.actions;
export default optionSlice.reducer;

// availableOptions에서 검색하는 경우

// if(selectedOptions.length>0){
//   const EMOJIMENUS = emojiMenus // 또는 initialState에서 보관
//   const 검색할 내용 = EMOJIMENUS-selectedOptions // 중복되는 내용 제거를 위해
//   검색할 내용을 leftSearchItem로 필터링
//   availableOptions에 상태 업데이트
// } else{
//   selectedOptions을 leftSearchItem로 필터링
//   availableOptions에 상태 업데이트
// }
