import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function OptionsItem({ name, emoji, index, id, handleSelection, className }) {
  const { itemSize } = useSelector((state) => state.setting);
  return (
    <Item
      className={className}
      itemSize={itemSize}
      onClick={(e) => handleSelection(e, id, index)}
    >
      {emoji} {name}
    </Item>
  );
}

OptionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default OptionsItem;

const Item = styled.li`
  padding: 10px 0 10px 15px;
  border-bottom: 1px solid #bfbfbf;
  cursor: pointer;
  font-size: ${({ itemSize }) => {
    switch (itemSize) {
      case 'XS':
        return '12px';
      case 'S':
        return '16px';
      case 'M':
        return '18px';
      default:
        break;
    }
  }};
  &.selection {
    background: red;
    opacity: 0.7;
  }
`;
