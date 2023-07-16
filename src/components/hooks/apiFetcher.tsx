import React, { useEffect } from 'react';
import { useUseStore } from '../store/store';

export const FetchNobel = (cate:string,year:number) => {
  const setData = useUseStore((state) => state.setData);
  const yearse = useUseStore((state)=> state.year);
    fetch(`http://api.nobelprize.org/2.1/nobelPrize/${cate}/${year}`).then((response)=> {
      console.log(`response after fetch before json() = ${response}`);
      response.json().then(res=> setData(res))
    });
    return <div>
      {yearse}
    </div>
}