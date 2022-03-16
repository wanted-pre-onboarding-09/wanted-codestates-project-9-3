import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Title from './Title';
import EmojiMenus from '../data/EmojiMock';
import OptionsItem from './OptionsItem';
import Counter from './Counter';

function List({ options, title }) {
  const { width, height } = useSelector((state) => state.setting.dashboardSize);
  return (
    <ListContainer width={width} height={height}>
      <Title title={title} />
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
  title: PropTypes.string.isRequired,
};

export default List;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #bfbfbf;
  width: ${({ width }) => (width === '' ? '250px' : `${width}px`)};
  height: ${({ height }) => (height === '' ? '300px' : `${height}px`)};
  border: 1px solid black;
  border-radius: 10px;
`;

const ListBox = styled.ul`
  list-decoration: none;
  overflow: auto;
`;
