import React, { useCallback, useEffect, useState } from "react";
import { NobelPrize } from "../interface/interface";
import { Filter } from "../sections/filter/filter";
import { arrayOfYears } from "../constant/constant";

export const CreateFilter1 = () => {
  const [years, setYears] = useState<number[]>([]);
  let arrayOfFilter:number[] = [];

  const addYears = (awardYears: number) => {
    setYears((current) => [...current, awardYears]);
  };

  useEffect(()=> {
    fetchAllNobelData();
  },[])

  const fetchAllNobelData = () => {
    fetch("http://api.nobelprize.org/2.1/nobelPrizes?sort=desc")
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

export const ListCreator = () => {
    let listOfFilter = arrayOfYears.map((value,index) => {
        return(
        <div>
            <Filter year={value}/>
        </div>
        )
    });
    return listOfFilter;
}

