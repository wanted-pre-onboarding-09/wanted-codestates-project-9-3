import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import List from './components/List';
import ButtonTab from './components/ButtonTab';
import EmojiMenus from './data/EmojiMock';
import Setting from './components/Setting';

function App() {
  const [availableOptions, setAvailableOptions] = useState(EmojiMenus);
  const [selectedOtions, setSelectedOptions] = useState();

  console.log(setAvailableOptions);
  console.log(setSelectedOptions);

  return (
    <SelectorWrapper>
      <SelectorContainer>
        <SearchBar />
        <List options={availableOptions} />
      </SelectorContainer>
      <ButtonTab />
      <SelectorContainer>
        <SearchBar />
        <List options={selectedOtions} />
      </SelectorContainer>
      <Setting />
    </SelectorWrapper>
  );
}

export default App;

const SelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
