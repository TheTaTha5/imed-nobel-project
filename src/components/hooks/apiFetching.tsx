import React, { useEffect, useState } from "react";
import { NobelPrize } from "../interface/interface";
import { Filter } from "../sections/filter/filter";

const CreateFilter = () => {
  const [years, setYears] = useState<number[]>([]);
  let arrayOfFilter = [];

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
        arrayOfFilter = years.filter((item,index) => years.indexOf(item)==index),
            console.log(`array of filter = ${arrayOfFilter}`)
      });
  };
  
  return <div>testest</div>

};

export default CreateFilter;
