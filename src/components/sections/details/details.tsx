import { Laureate } from "../../interface/interface";
import { useUseStore } from "../../store/store";
import LaureateBannerElement from "./laureatesBanner/laureatesBanner";




export const NobelPrizePage = () => {
    const data = useUseStore((state)=> state.data)
    if(data[0].awardYear) {
        return (
            <section className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 place-items-center">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white content-center">{data[0].category?.en}</h1>
                <div className="tracking-tight text-gray-900 dark:text-white content-center">
                    <h2> Laureates : {data[0].laureates?.map((laureates) => {
                        return <LaureateBannerElement motivation={laureates.motivation.en} name={laureates.fullName.en}/>
                    })}</h2>
                </div>
                <div>
                    <h3 className=" text-gray-900 dark:text-white">
                       Award year : {data[0].awardYear}
                    </h3>
                </div>
                <div className=" text-gray-900 dark:text-white font-mono"><div className="font-bold">Motivaltion : </div> {data[0].laureates[0].motivation.en}</div>
                <div className=" text-gray-900 dark:text-white font-mono"><div className="font-bold">PrizeAmount : </div> {data[0].prizeAmount?.toLocaleString()} SEK</div>
            </section>
        )
    } else {
        return (
            <section className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Item not found Please Select other category</h1>
            </section>
        )
    }
    
}