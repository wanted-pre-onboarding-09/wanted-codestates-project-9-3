import React from 'react';
import styled from 'styled-components';

const SearchBarWrap = styled.div`
  width: 200px;
  min-height: 30px;
  border: 2px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

const SearchBarInput = styled.input.attrs({
  placeholder: 'search',
})`
  min-width: 100%;
  padding-left: 5px;
`;

function SearchBar() {
  return (
    <SearchBarWrap>
      <SearchBarInput />
    </SearchBarWrap>
  );
}

export default SearchBar;
