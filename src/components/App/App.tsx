import React, { useState } from 'react';
import { Header } from '../sections/header/header';
import NobelPrize from '../sections/details/details';
import { Filter } from '../sections/filter/filter';
import { ListCreator, CreateFilter1 } from '../hooks/apiFetching';

function App() {

  return (
    <main>
        <Header/>
        <ListCreator/>
        {/* <CreateFilter1/> */}
        {/* <NobelPrize/> */}
    </main>
  );
}

export default App;
