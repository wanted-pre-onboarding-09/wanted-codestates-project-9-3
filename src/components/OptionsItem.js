import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function OptionsItem({
  name,
  emoji,
  idx,
  id,
  handleSelection,
  className,
  onDragStart,
  onDragEnter,
}) {
  const { itemSize } = useSelector((state) => state.setting);

  return (
    <Item
      className={className}
      itemSize={itemSize}
      onClick={(e) => handleSelection(e, id, idx)}
      id={idx}
      onDragStart={(e) => onDragStart(e, idx)}
      onDragEnter={(e) => onDragEnter(e, idx)}
      draggable
    >
      <span>{emoji}</span>
      <span>{name}</span>
    </Item>
  );
}

OptionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnter: PropTypes.func.isRequired,
};

export default OptionsItem;

const Item = styled.li`
  padding: 10px 14px;
  border-bottom: 1px solid #bfbfbf;
  cursor: pointer;
  cursor: move;
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
  span {
    :first-child {
      margin-right: 14px;
    }
  }
`;
