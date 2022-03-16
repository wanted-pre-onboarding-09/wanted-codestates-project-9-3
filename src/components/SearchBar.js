import React from 'react';
import styled from 'styled-components';

function SearchBar() {
  return (
    <SearchBarWrap>
      <SearchBarInput />
    </SearchBarWrap>
  );
}

export default SearchBar;

const SearchBarWrap = styled.div`
  width: 100%;
  min-height: 30px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const SearchBarInput = styled.input.attrs({
  placeholder: 'search',
})`
  min-width: 100%;
  height: 100%;
  padding-left: 5px;
  line-height: 100%;
  outline: none;
`;
