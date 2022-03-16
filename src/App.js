import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import List from './components/List';
import ButtonTab from './components/ButtonTab';
import Setting from './components/Setting';

function App() {
  const {
    availableOptions,
    selectedOptions,
    availableSelection,
    selectedSelection,
  } = useSelector((state) => state.option);

  const { titleInput } = useSelector((state) => state.setting);
  return (
    <SelectorWrapper>
      <SelectorContainer>
        <SearchBar section="left" />
        <List
          options={availableOptions}
          title={titleInput.available}
          type="available"
          selectedSelection={availableSelection}
        />
      </SelectorContainer>
      <ButtonTab />
      <SelectorContainer>
        <SearchBar section="right" />
        <List
          options={selectedOptions}
          title={titleInput.selected}
          type="selected"
          selectedSelection={selectedSelection}
        />
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
