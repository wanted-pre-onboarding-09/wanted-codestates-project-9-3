import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import EmojiMenus from '../data/EmojiMock';
import OptionsItem from './OptionsItem';

function List() {
  return (
    <ListcContainer>
      <Title />
      <ListBox>
        {EmojiMenus.map((item) => {
          return <OptionsItem name={item.name} emoji={item.emoji} />;
        })}
      </ListBox>
    </ListcContainer>
  );
}

export default List;

const ListcContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: auto;
`;

const ListBox = styled.div`
  list-decoration: none;
`;
