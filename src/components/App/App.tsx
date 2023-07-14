import React from 'react';
import { Header } from '../sections/header/header';
import NobelPrize from '../sections/details/details';
import { Filter } from '../sections/filter/filter';

function App() {
  return (
    <main>
        <Header/>
        <NobelPrize/>
        <Filter/>
    </main>
  );
}

export default App;
