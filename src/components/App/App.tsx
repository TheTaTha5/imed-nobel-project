import React, { useEffect, useState } from "react";
import { Header } from "../sections/header/header";
import ListCreator from "../hooks/listCreator";
import { NobelPrizePage } from "../sections/details/details";
import { useUseStore } from "../store/store";
import { CateSelectorButton } from "../hooks/categoryButtonCreator";

function App() {
  const fetchAll = useUseStore((state)=> state.totaledAward)
  useEffect(()=> {fetchAll()},[])
  return (
    <main>
      <Header />
      <div className="flex grid-cols-2">
        <div className="overflow-auto basis-1/4 h-screen">
          <ListCreator />
        </div>

        <div className=" justify-center basis-3/4 pb-2">
          <div><NobelPrizePage /></div>
          <div className="grid grid-flow-row grid-rows-1">
            <CateSelectorButton />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
