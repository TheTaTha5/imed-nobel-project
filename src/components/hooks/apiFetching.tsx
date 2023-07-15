import React, { useCallback, useEffect, useState } from "react";
import { NobelPrize } from "../interface/interface";
import { Filter } from "../sections/filter/filter";

const CreateFilter = () => {
  const [years, setYears] = useState<number[]>([]);
  let arrayOfFilter:number[] = [];

  const addYears = (awardYears: number) => {
    setYears((current) => [...current, awardYears]);
  };

  useEffect(()=> {
    fetchAllNobelData();
  },[])

  const fetchAllNobelData = () => {
    fetch("http://api.nobelprize.org/2.1/nobelPrizes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.nobelPrizes.forEach((nobel: NobelPrize) => {
          //TODO: Implement state Management to save and render a button html elements with {year}
          console.log("forEach called!");
          addYears(nobel.awardYear);
        })
        console.log(`Hello +  ${years}`);
        
        console.log(`array of filter = ${arrayOfFilter}`);
      });     
  };

   arrayOfFilter = years.filter((item,index) => years.indexOf(item)==index)
   let result = arrayOfFilter.map((value,index)=> {
    return(<Filter year={value}></Filter>)
   })
return result
};

export default CreateFilter;
