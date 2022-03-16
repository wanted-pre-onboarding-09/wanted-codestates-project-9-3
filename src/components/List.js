import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from './Title';
import EmojiMenus from '../data/EmojiMock';
import OptionsItem from './OptionsItem';
import Counter from './Counter';

function List({ options, title }) {
  return (
    <ListcContainer>
      <Title title={title} />
      <ListBox>
        {options
          ? options.map((item) => {
              return <OptionsItem name={item.name} emoji={item.emoji} />;
            })
          : null}
      </ListBox>
      <Counter total={EmojiMenus.length} />
    </ListcContainer>
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
};

export default List;

const ListcContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 10px;
`;

const ListBox = styled.ul`
  list-decoration: none;
  overflow: auto;
`;
