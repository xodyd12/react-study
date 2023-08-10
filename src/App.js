import React from 'react';
import './App.css';
import AppItem from './AppItem';
import Noname from './Noname';
import Hello from './Hello';

function App() {
  const $h2 = React.createElement('h2', null, '반가방가~~');
  return (
    <>
      <AppItem />
      <Noname />
      <Hello />
    </>
  );
}

export default App;