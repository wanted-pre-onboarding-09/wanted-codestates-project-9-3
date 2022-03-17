import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAvailableOptions,
  changeSelectedOptions,
  setSelection,
} from '../store/optionSlice';
import Title from './Title';
import OptionsItem from './OptionsItem';
import Counter from './Counter';

function List({ options, title, type, selectedSelection, section }) {
  const { width, height } = useSelector((state) => state.setting.dashboardSize);
  const { moveOnlyOne } = useSelector(({ setting }) => ({
    moveOnlyOne: setting.moveOnlyOne,
  }));
  const dispatch = useDispatch();
  const dragItemIndex = useRef(null);
  const dragOverItemIndex = useRef(null);

  const onDragStart = (e, index) => {
    dragItemIndex.current = index;
  };
  const onDragEnter = (e, index) => {
    dragOverItemIndex.current = index;
    const copyListItems = [...options];
    const dragItemContent = copyListItems[dragItemIndex.current];
    copyListItems.splice(dragItemIndex.current, 1);
    copyListItems.splice(dragOverItemIndex.current, 0, dragItemContent);
    dragItemIndex.current = dragOverItemIndex.current;
    dragOverItemIndex.current = null;
    if (section === 'left') {
      dispatch(changeAvailableOptions(copyListItems));
    } else {
      dispatch(changeSelectedOptions(copyListItems));
    }
  };

  // 단일 선택
  const normalSelection = (index) => {
    console.log('normalSelection', index);
    if (selectedSelection.includes(index)) {
      // 같은 요소인 경우
      const selected = selectedSelection.filter((item) => item !== index);
      dispatch(setSelection({ type, index: selected }));
    } else {
      // 다른 요소인 경우
      dispatch(setSelection({ type, index: [index] }));
    }
  };

  // 중복 선택 - cmd, ctrl
  const multiSelectionScatter = (index) => {
    if (moveOnlyOne) return;
    if (selectedSelection.includes(index)) {
      const selected = selectedSelection.filter((item) => item !== index);
      dispatch(setSelection({ type, index: selected }));
    } else {
      const selected = [...selectedSelection, index];
      dispatch(setSelection({ type, index: selected }));
    }
  };

  // 중복 선택 - shift
  const multiSelectionLinear = (index) => {
    if (moveOnlyOne) return;
    const selected = [];
    const { length } = selectedSelection;
    const start = length === 0 ? 0 : selectedSelection[0];
    const end = index;

    if (start < end) {
      for (let i = start; i <= end; i += 1) {
        selected.push(i);
      }
    } else {
      for (let i = start; i >= end; i -= 1) {
        selected.push(i);
      }
    }
    dispatch(setSelection({ type, index: selected }));
  };

  const handleSelection = (e, id, index) => {
    console.log('onClick');
    console.log(id, index);
    if (e.ctrlKey || e.metaKey) {
      console.log('ctrl || cmd');
      multiSelectionScatter(index);
    }
    // shift를 누르고 클릭 했을 때
    else if (e.shiftKey) {
      console.log('shift');
      multiSelectionLinear(index);
    }
    // 그냥 클릭 했을 때
    else {
      normalSelection(index);
    }
  };

  return (
    <ListContainer width={width} height={height}>
      <Title title={title} />
      <ListBox>
        {options
          ? options.map((item, idx) => {
              return (
                <OptionsItem
                  className={selectedSelection.includes(idx) ? 'selection' : ''}
                  key={item.id}
                  name={item.name}
                  emoji={item.emoji}
                  idx={idx}
                  id={item.id}
                  handleSelection={handleSelection}
                  onDragStart={onDragStart}
                  onDragEnter={onDragEnter}
                />
              );
            })
          : null}
      </ListBox>
      <Counter total={options.length} selected={selectedSelection.length} />
    </ListContainer>
  );
}

List.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      topId: PropTypes.number,
      code: PropTypes.string,
      name: PropTypes.string,
      nameEn: PropTypes.string,
      nameKo: PropTypes.string,
      route: PropTypes.string,
      ordinal: PropTypes.number,
      visible: PropTypes.bool,
      emoji: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  selectedSelection: PropTypes.arrayOf(PropTypes.number).isRequired,
  section: PropTypes.string.isRequired,
};

export default List;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bfbfbf;
  width: ${({ width }) => (width === '' ? '250px' : `${width}px`)};
  height: ${({ height }) => (height === '' ? '300px' : `${height}px`)};
  border: 1px solid black;
  border-radius: 4px;
  overflow: hidden;
`;

const ListBox = styled.ul`
  height: 100%;
  overflow: auto;
`;
