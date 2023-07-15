import React, { useState } from 'react';
import { Header } from '../sections/header/header';
import NobelPrize from '../sections/details/details';
import { Filter } from '../sections/filter/filter';
import fetchAllNobelData from '../hooks/apiFetching';
import CreateFilter from '../hooks/apiFetching';

function App() {
  return (
    <main>
        <Header/>
        <button onClick={()=> fetchAllNobelData()}>Filter</button>
        <CreateFilter/>
        {/* <NobelPrize/> */}
    </main>
  );
}

export default App;
