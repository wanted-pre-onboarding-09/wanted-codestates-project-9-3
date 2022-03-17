/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateLeftSearch, updateRightSearch } from '../store/optionSlice';

function SearchBar({ section }) {
  const dispatch = useDispatch();
  const initSearchItem = useSelector((state) =>
    section === 'left'
      ? state.option.leftSearchItem
      : state.option.rightSearchItem
  );
  const [searchItem, setSearchItem] = useState(initSearchItem);
  const isInputPossible = useSelector((state) => state.setting.search);

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
      <SearchBarInput
        value={searchItem || ''}
        onChange={searchHandler}
        disabled={!isInputPossible}
      />
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
  maxLength: 50,
})`
  min-width: 100%;
  min-height: 100%;
  padding: 5px 5px 5px 10px;
  line-height: 100%;
  outline: none;
`;
