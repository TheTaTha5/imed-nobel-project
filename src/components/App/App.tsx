import React, { useState } from "react";
import { Header } from "../sections/header/header";
import { Filter } from "../sections/filter/filter";
import ListCreator from "../hooks/listCreator";
import { NobelPrizePage } from "../sections/details/details";
import { useUseStore } from "../store/store";



 function App() {
  return (
    <main>
      <Header/>
      <ListCreator />
     {/* TODO: render nobelprizee */} 
     <div>
     </div>
    </main>
  );
}

export default App;
