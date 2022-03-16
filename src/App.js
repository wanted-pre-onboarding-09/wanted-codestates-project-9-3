import React from 'react';
import SearchBar from './components/SearchBar';
import OptionsItem from './components/OptionsItem';

function App() {
  return (
    <>
      <SearchBar />
      <OptionsItem name="테스트" emoji="🚀" />
      <OptionsItem name="테스트" emoji="📷" />
      <OptionsItem name="테스트" emoji="🧐" />
      <OptionsItem name="테스트" emoji="🛎" />
      <OptionsItem name="테스트" emoji="👩‍💻" />
    </>
  );
}

export default App;
