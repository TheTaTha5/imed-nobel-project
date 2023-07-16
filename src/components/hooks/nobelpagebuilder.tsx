import { arrayOfCategory } from "../constant/constant";
import {
  DisplayNobelPrize,
  NobelPrize,
} from "../interface/interface";
import { NobelPrizePage } from "../sections/details/details";
import { useUseStore } from "../store/store";

export const NobelPage = () => {
  const setCate = useUseStore((state) => state.setCate);
  const cate = useUseStore((state) => state.cate);
  const year = useUseStore((state) => state.year);
  const fetch = useUseStore((state) => state.getData);
  const data = useUseStore((state) => state.data);
  const fetchAll = useUseStore((state)=> state.totaledAward);

  return (
    <div>
        {arrayOfCategory.map((category)=> {
            return <button value={category} onClick={(e) => {(setCate((e.target as HTMLButtonElement).value)),fetch(year,cate)}}>{category}</button>
        })}
      <h1>
        {cate}
        {year}
      </h1>
      <button onClick={()=> fetchAll()}>Go fetCh!!!</button>
    </div>
  );
}; //Make react component for category selector
