import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Counter({ total }) {
  return (
    <CounterContainer>
      {/* TODO: 전체 개수 중에서 선택된 요소들 상태 관리 필요(?) */}
      0/{total}
    </CounterContainer>
  );
}

Counter.propTypes = {
  total: PropTypes.string.isRequired,
};

export default Counter;

const CounterContainer = styled.div`
  /* TODO: sticky 속성 사용 시, 카운터 영역까지 스크롤 되는 버그 */
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background: #fff;
  border-top: 1px solid #bfbfbf;
  border-radius: 0px 0px 10px 10px;
`;
