import { arrayOfCategory } from "../constant/constant";
import {
  DisplayNobelPrize,
  NobelPrize,
} from "../interface/interface";
import { NobelPrizePage } from "../sections/details/details";
import { useUseStore } from "../store/store";

export const CateSelectorButton = () => {
  const setCate = useUseStore((state) => state.setCate);
  const cate = useUseStore((state) => state.cate);
  const year = useUseStore((state) => state.year);
  const fetch = useUseStore((state) => state.getData);
  const data = useUseStore((state) => state.data);
  const totalPrize = useUseStore((state)=> state.totalPrizeAmout);
  const fetchAll = useUseStore((state)=> state.totaledAward);

  return (
    <div className="">
      <div className="flex">
        {arrayOfCategory.map((category)=> {
            return <button className="rounded-none bg-emerald-300 w-28 hover:bg-emerald-700 text-white border-2 border-black " value={category} onClick={(e) => {(setCate((e.target as HTMLButtonElement).value)),fetch(year,cate)}}>{category}</button>
        })}
        </div>
        <div>total prize amount : {totalPrize}</div>
    </div>
  );
}; //Make react component for category selector
