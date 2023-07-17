import { create } from "zustand";
import { INobel, Laureate, NobelPrize } from "../interface/interface";


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
    totalAward: number[],
    reducedAward:number,
    totalPrizeAmout:number,
    activeIndex:number,
    setYear: (year:number)=> void,
    setCate: (cate:string)=> void,
    getData: (year:number,cate:string) => void,
    totaledAward: () => void,
    setActiveButtonIndex: (i:number)=> void,
}


export const useUseStore = create<FilterData>((set,get) => ({
    data: [{}],
    year: 0,
    cate: "che",
    totalAward: [],
    reducedAward: 0,
    totalPrizeAmout:0,
    activeIndex:-1,
    setYear: (newYear:number) => {
        set({year : newYear})
    },
    setCate: (newCate:string) => {
        set({cate:newCate})
    },
    totaledAward:async ()=> { 
        try {
            let res = await fetch("https://api.nobelprize.org/2.1/nobelPrizes"); //Not sure how to fetch all record since this url give only 25
            let body:INobel = await res.json();
            body.nobelPrizes.map((each)=> {
                if(each.prizeAmount){
                    get().totalAward.push(each.prizeAmount);
                }
            })
            set({totalPrizeAmout:get().totalAward.reduce((acc,curr)=> curr+acc)})
            console.log(get().totalPrizeAmout);
            console.log(body);
        } catch (error) {
            console.log(error)
        }
        
    },
    getData:async () => {
        try {
            let res = await fetch(`https://api.nobelprize.org/2.1/nobelPrize/${get().cate}/${get().year}`);
            let body = await res.json();
            console.log(res.status);
            if(res.status == 200) {
                set({data:body})
                console.log(get().data[0]);
            } else {
                console.log("fetchfail")
            }
        } catch (error) {
            console.log(error)
        }
    },
    setActiveButtonIndex: (i:number) => {
        set({activeIndex: i})
    }

}));
