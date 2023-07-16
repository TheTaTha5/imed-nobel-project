import {
  DisplayNobelPrize,
  NobelPrize,
  PrizeCat,
} from "../interface/interface";
import { NobelPrizePage } from "../sections/details/details";
import { useUseStore } from "../store/store";

export const NobelPage = () => {
  const setCate = useUseStore((state) => state.setCate);
  const cate = useUseStore((state) => state.cate);
  const year = useUseStore((state) => state.year);
  const fetch = useUseStore((state) => state.getData);
  const data = useUseStore((state) => state.data);

  return (
    <div>
      <button
        value="che"
        onClick={(e) => setCate((e.target as HTMLButtonElement).value)}
      >
        che
      </button>
      <button
        value="eco"
        onClick={(e) => setCate((e.target as HTMLButtonElement).value)}
      >
        eco
      </button>
      <button
        value="lit"
        onClick={(e) => setCate((e.target as HTMLButtonElement).value)}
      >
        lit
      </button>
      <button
        value="pea"
        onClick={(e) => setCate((e.target as HTMLButtonElement).value)}
      >
        pea
      </button>
      <button
        value="phy"
        onClick={(e) => setCate((e.target as HTMLButtonElement).value)}
      >
        phy
      </button>
      <button
        value="med"
        onClick={(e) => setCate((e.target as HTMLButtonElement).value)}
      >
        med
      </button>
      <h1>
        {cate}
        {year}
      </h1>
      <button onClick={()=> fetch(year,cate)}>Go fetCh!!!</button>
    </div>
  );
}; //Make react component for category selector
