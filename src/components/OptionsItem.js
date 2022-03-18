import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function OptionsItem({
  name,
  emoji,
  idx,
  handleSelection,
  className,
  onDragStart,
  onDragEnter,
  onDragOver,
  section,
}) {
  const { itemSize } = useSelector((state) => state.setting);

  return (
    <Item
      className={className}
      itemSize={itemSize}
      onClick={(e) => handleSelection(e, idx)}
      id={idx}
      onDragStart={(e) => onDragStart(e, idx, section)}
      onDragEnter={(e) => onDragEnter(e, idx)}
      onDragOver={(e) => onDragOver(e)}
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
  handleSelection: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnter: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
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
    color: #696969;
    background-color: #f3f3f3;
  }
  span {
    :first-child {
      margin-right: 14px;
    }
  }
`;
