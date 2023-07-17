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
  const setIndex = useUseStore((state)=> state.setActiveButtonIndex);
  const selectIndex =useUseStore((state)=> state.activeIndex);

  return (
    <div className="">
      <div className="flex">
        {arrayOfCategory.map((category,i)=> {
            return <button className={i == selectIndex ? "rounded-none bg-emerald-300 w-28 hover:bg-emerald-700 text-white border-2 border-black button.bg-red-400:focus ~ button.bg-blue-400" :"rounded-none bg-red-300 w-28 hover:bg-red-700 text-white border-2 border-black button.bg-red-400:focus ~ button.bg-blue-400"}
              value={category} onClick={(e) => {(setCate((e.target as HTMLButtonElement).value)),setIndex(i)}}>{category}</button>
        })}
        <button className="rounded-none bg-emerald-300 w-28 hover:bg-emerald-500 text-white border-2"onClick={()=>fetch(year,cate)}>Apply Filter</button>
        </div>
        <div>total prize amount : {totalPrize}</div>
    </div>
  );
}; //Make react component for category selector
