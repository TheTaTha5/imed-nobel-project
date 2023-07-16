import React, { useCallback, useEffect, useState } from "react";
import { Filter } from "../sections/filter/filter";
import { NobelPrizeDetail } from "../sections/details/details";
import {NobelPrize} from "../interface/interface"

export const CreateDetailPage = (year:number) : NobelPrize[] =>  {
  let allNobel:object[] = [];

  const fetchSelectedYear = () => {
  Promise.all([
          fetch(`http://api.nobelprize.org/2.1/nobelPrize/che/${year}`).then((res) => res.json()),
          fetch(`http://api.nobelprize.org/2.1/nobelPrize/eco/${year}`).then((res) => res.json()),
          fetch(`http://api.nobelprize.org/2.1/nobelPrize/lit/${year}`).then((res) => res.json()),
          fetch(`http://api.nobelprize.org/2.1/nobelPrize/pea/${year}`).then((res) => res.json()),
          fetch(`http://api.nobelprize.org/2.1/nobelPrize/phy/${year}`).then((res) => res.json()),
          fetch(`http://api.nobelprize.org/2.1/nobelPrize/med/${year}`).then((res) => res.json()),
        ]).then((result)=> {
          result.flat().map((nobel)=> {
            allNobel.push(nobel)
            
          });
          
        });
        return allNobel;
}
let result = fetchSelectedYear();
console.log(result);
return result;
}




// export const CreateFilter1 = () => {
//   const [years, setYears] = useState<number[]>([]);
//   let arrayOfFilter:number[] = [];

//   const addYears = (awardYears: number) => {
//     setYears((current) => [...current, awardYears]);
//   };

//   useEffect(()=> {
//     fetchAllNobelData();
//   },[])

//   const fetchAllNobelData = () => {
//     fetch("http://api.nobelprize.org/2.1/nobelPrizes?sort=desc")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         data.nobelPrizes.forEach((nobel: NobelPrize) => {
//           //TODO: Implement state Management to save and render a button html elements with {year}
//           console.log("forEach called!");
//           addYears(nobel.awardYear);
//         })
//         console.log(`Hello +  ${years}`);
        
//         console.log(`array of filter = ${arrayOfFilter}`);
//       });     
//   };

//    arrayOfFilter = years.filter((item,index) => years.indexOf(item)==index)
//    let result = arrayOfFilter.map((value,index)=> {
//     return(<Filter year={value}></Filter>)
//    })
// return result
// };





// export const ArticalFetching = (year:number) => {
//   const [a,setA] = useState<object[]>([]);
//   const fetchNobelByYear = (year: number) => {
//     const addToState = (newDetail:any) => {
//       setA((current)=> [...current, newDetail])
//     }
//     Promise.all([
//       fetch(`http://api.nobelprize.org/2.1/nobelPrize/che/${year}`).then((res) => res.json()),
//       fetch(`http://api.nobelprize.org/2.1/nobelPrize/eco/${year}`).then((res) => res.json()),
//       fetch(`http://api.nobelprize.org/2.1/nobelPrize/lit/${year}`).then((res) => res.json()),
//       fetch(`http://api.nobelprize.org/2.1/nobelPrize/pea/${year}`).then((res) => res.json()),
//       fetch(`http://api.nobelprize.org/2.1/nobelPrize/phy/${year}`).then((res) => res.json()),
//       fetch(`http://api.nobelprize.org/2.1/nobelPrize/med/${year}`).then((res) => res.json()),
//     ]).then((response) => {
//       response.map((v:INobel, i) => {
//         addToState(v)
//         })
//         console.log(a);
//       })
//     };
//     fetchNobelByYear(year);
//   };
  


