import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function OptionsItem({ name, emoji }) {
  const { itemSize } = useSelector((state) => state.setting);
  return (
    <Item itemSize={itemSize}>
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
`;
