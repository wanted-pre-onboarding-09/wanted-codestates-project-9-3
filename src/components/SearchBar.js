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
  width: 200px;
  min-height: 30px;
  border: 2px solid gray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
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
