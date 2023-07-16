import React, { useState } from "react";
import { Header } from "../sections/header/header";
import ListCreator from "../hooks/listCreator";
import { NobelPrizePage } from "../sections/details/details";
import { useUseStore } from "../store/store";
import { NobelPage } from "../hooks/nobelpagebuilder";



 function App() {
  return (
    <main>
      <Header/>
      <ListCreator />
     <NobelPage/>
     <NobelPrizePage/>
     <div>
     </div>
    </main>
  );
}

export default App;
