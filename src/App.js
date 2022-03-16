import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SearchBar from './components/SearchBar';
import List from './components/List';
import ButtonTab from './components/ButtonTab';
import Setting from './components/Setting';

function App() {
  const { availableOptions, selectedOptions } = useSelector(
    (state) => state.option
  );

  const { titleInput } = useSelector((state) => state.setting);
  return (
    <SelectorWrapper>
      <SelectorContainer>
        <SearchBar />
        <List options={availableOptions} title={titleInput.available} />
      </SelectorContainer>
      <ButtonTab />
      <SelectorContainer>
        <SearchBar />
        <List options={selectedOptions} title={titleInput.selected} />
      </SelectorContainer>
      <Setting />
    </SelectorWrapper>
  );
}

export default App;

const SelectorWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
