import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from './Title';
import EmojiMenus from '../data/EmojiMock';
import OptionsItem from './OptionsItem';
import Counter from './Counter';

function List({ options }) {
  return (
    <ListContainer>
      <Title />
      <ListBox>
        {options
          ? options.map((item) => {
              return <OptionsItem name={item.name} emoji={item.emoji} />;
            })
          : null}
      </ListBox>
      <Counter total={EmojiMenus.length} />
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
};

export default List;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  border: 1px solid #bfbfbf;
  border-radius: 10px;
`;

const ListBox = styled.ul`
  list-decoration: none;
  overflow: auto;
`;
