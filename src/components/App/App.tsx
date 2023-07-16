import React, { useState } from "react";
import { Header } from "../sections/header/header";
import { Filter } from "../sections/filter/filter";
import ListCreator from "../hooks/listCreator";
import { NobelPrizeDetail } from "../sections/details/details";
import DetailPageGenerator from "../hooks/nobelpagebuilder";


 function App() {
  return (
    <main>
      <Header />
      <ListCreator />
      
     {/* TODO: render nobelprizee */} 
     <div>
     </div>
    </main>
  );
}

export default App;
