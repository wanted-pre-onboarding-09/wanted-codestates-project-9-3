/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateLeftSearch, updateRightSearch } from '../store/optionSlice';

function SearchBar({ section }) {
  const dispatch = useDispatch();
  const initSearchItem = useSelector((state) =>
    section === 'left' ? state.leftSearchItem : state.rightSearchItem
  );
  const [searchItem, setSearchItem] = useState(initSearchItem);

  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    if (section === 'left') {
      dispatch(updateLeftSearch(e.target.value));
    } else {
      dispatch(updateRightSearch(e.target.value));
    }
  };

  useEffect(() => {
    setSearchItem(initSearchItem);
  }, [initSearchItem]);

  return (
    <SearchBarWrap>
      <SearchBarInput value={searchItem} onChange={searchHandler} />
    </SearchBarWrap>
  );
}

export default SearchBar;

const SearchBarWrap = styled.div`
  width: 100%;
  min-height: 40px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const SearchBarInput = styled.input.attrs({
  placeholder: 'search',
  type: 'text',
  maxLength: 12,
})`
  min-width: 100%;
  height: 100%;
  padding-left: 10px;
  line-height: 100%;
  outline: none;
`;
