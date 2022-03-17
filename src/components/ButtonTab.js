import React from 'react';
import styled from 'styled-components';
import {
  BsArrowCounterclockwise,
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
  BsChevronRight,
  BsChevronLeft,
} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { moveAll, moveSelected } from '../store/optionSlice';

function ButtonTab() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(moveAll('left'));
  };

  const handleMoveAll = (position) => {
    dispatch(moveAll(position));
  };

  const handleSelectedMove = (position) => {
    dispatch(moveSelected(position));
  };

  return (
    <ButtonTabContainer>
      <Button onClick={handleReset}>
        <BsArrowCounterclockwise />
      </Button>
      <Button onClick={() => handleMoveAll('right')}>
        <BsChevronDoubleRight />
      </Button>
      <Button onClick={() => handleMoveAll('left')}>
        <BsChevronDoubleLeft />
      </Button>
      <Button onClick={() => handleSelectedMove('right')}>
        <BsChevronRight />
      </Button>
      <Button onClick={() => handleSelectedMove('left')}>
        <BsChevronLeft />
      </Button>
    </ButtonTabContainer>
  );
}

export default ButtonTab;

const ButtonTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid lightgray;
  border-width: 1px 1px 0px 1px;
  :first-child {
    border-radius: 4px 4px 0px 0px;
  }
  :last-child {
    border-width: 1px 1px 1px 1px;
    border-radius: 0px 0px 4px 4px;
  }
  :hover {
    background-color: #f3f3f3;
  }
`;
