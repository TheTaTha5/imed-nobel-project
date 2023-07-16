import { create } from "zustand";
import { Laureate } from "../interface/interface";
import { CreateDetailPage } from "../hooks/apiFetching";

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
    year: null|number,
    cate: string,
    setYear: (year:number)=> void,
    setCate: (cate:string)=> void
}
export const useUseStore = create<FilterData>((set) => ({
    data: {},
    year: null,
    cate: "che",
    setYear: (newYear:number) => {
        set({year : newYear})
    },
    setCate: (newCate:string) => {
        set({cate:newCate})
    },
    // getAwardData: async (year:number,cate:{cate?: string | undefined;}) => {
    //     try {
    //         const result = CreateDetailPage(year,cate);
    //         set({data: result})
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
}))