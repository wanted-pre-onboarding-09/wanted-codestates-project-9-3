import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import EmojiMenus from '../data/EmojiMock';
import OptionsItem from './OptionsItem';
import Counter from './Counter';

function List() {
  return (
    <ListcContainer>
      <Title />
      <ListBox>
        {EmojiMenus.map((item) => {
          return <OptionsItem name={item.name} emoji={item.emoji} />;
        })}
      </ListBox>
      <Counter total={EmojiMenus.length} />
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

const ListBox = styled.ul`
  list-decoration: none;
`;
