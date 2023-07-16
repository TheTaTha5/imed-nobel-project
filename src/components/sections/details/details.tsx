import { Laureate } from "../../interface/interface";
import { useUseStore } from "../../store/store";
import LaureateBannerElement from "./laureatesBanner/laureatesBanner";




export const NobelPrizePage = () => {
    const data = useUseStore((state)=> state.data)
    return (
        <section className="nobel">
            <h1>{data[0].category?.en}</h1>
            <div className="laureates">
                <h2> Laureates : {data[0].laureates?.map((laureates) => {
                    return <LaureateBannerElement motivation={laureates.motivation.en} name={laureates.fullName.en}/>
                })}</h2>
            </div>
            <div>
                <h3>
                    {data[0].awardYear}
                </h3>
            </div>
            
            <div>PrizeAmount : {data[0].prizeAmount?.toLocaleString()} SEK</div>
        </section>
    )
}