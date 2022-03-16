import React from 'react';
import styled from 'styled-components';
import {
  BsArrowCounterclockwise,
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
  BsChevronRight,
  BsChevronLeft,
} from 'react-icons/bs';

function ButtonTab() {
  return (
    <ButtonTabContainer>
      <Button>
        <BsArrowCounterclockwise />
      </Button>
      <Button>
        <BsChevronDoubleRight />
      </Button>
      <Button>
        <BsChevronDoubleLeft />
      </Button>
      <Button>
        <BsChevronRight />
      </Button>
      <Button>
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
  border-radius: 4px;
  margin: 2px 0;
`;
