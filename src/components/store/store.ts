import { create } from "zustand";
import { Laureate, NobelPrize } from "../interface/interface";
import { FetchNobel } from "../hooks/apiFetcher";

interface DataState {
    awardYear?:           number;
    dateAwarded?:         Date;
    prizeAmount?:         number;
    prizeAmountAdjusted?: number;
    topMotivation?:       string;
    laureates?:           string;
}



interface FilterData {
    data: object,
    year: number,
    cate: string,
    setYear: (year:number)=> void,
    setCate: (cate:string)=> void,
    setData: (data:object) => void,
    getData: (year:number,cate:string) => any,
}


export const useUseStore = create<FilterData>((set,get) => ({
    data: {},
    year: 1901,
    cate: "che",
    setYear: (newYear:number) => {
        set({year : newYear})
    },
    setCate: (newCate:string) => {
        set({cate:newCate})
    },
    setData: (newData:NobelPrize) => {
        set({data:newData})
    },
    getData: async () => {
        try {
            let result = await FetchNobel(get().cate,get().year);
           return result;
        } catch (error) {
            console.log(error)
        }
    }
}));
