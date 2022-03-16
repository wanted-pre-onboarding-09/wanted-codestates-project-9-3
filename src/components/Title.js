import React from 'react';
import styled from 'styled-components';

function Title() {
  return <TitleContainer>Title</TitleContainer>;
}

export default Title;

const TitleContainer = styled.div`
  width: 100%;
  padding-left: 1rem;
  height: 20rem;
  position: sticky;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #bfbfbf;
  background-color: rgba(255, 255, 255, 0);
`;
