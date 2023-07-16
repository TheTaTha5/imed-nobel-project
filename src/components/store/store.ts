import { create } from "zustand";
import { Laureate, NobelPrize } from "../interface/interface";


interface DataState {
    awardYear?:           number;
    dateAwarded?:         Date;
    prizeAmount?:         number;
    prizeAmountAdjusted?: number;
    topMotivation?:       string;
    laureates?:           string;
}



interface FilterData {
    data: [NobelPrize],
    year: number,
    cate: string,
    setYear: (year:number)=> void,
    setCate: (cate:string)=> void,
    getData: (year:number,cate:string) => any,
}


export const useUseStore = create<FilterData>((set,get) => ({
    data: [{}],
    year: 1901,
    cate: "che",
    setYear: (newYear:number) => {
        set({year : newYear})
    },
    setCate: (newCate:string) => {
        set({cate:newCate})
    },
    getData:async () => {
        try {
            let res = await fetch(`http://api.nobelprize.org/2.1/nobelPrize/${get().cate}/${get().year}`);
            let body = await res.json();
            if(res.status == 200) {
                set({data:body})
                console.log(get().data[0]);
            } else {
                console.log("fetchfail")
            }
        } catch (error) {
            console.log(error)
        }
    }
    
}));
