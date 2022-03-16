import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function OptionsItem({ name, emoji }) {
  return (
    <Item>
      {emoji} {name}
    </Item>
  );
}

OptionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};

export default OptionsItem;

const Item = styled.li`
  padding: 10px 0 10px 15px;
  /* TODO: 아이템 크기에 따라 사이즈 변경, 높이 -> 컨텐츠 크기만큼 */
  font-size: 16px;
  border-bottom: 1px solid #bfbfbf;
  cursor: pointer;
`;
