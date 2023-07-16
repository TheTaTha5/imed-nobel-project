import { Laureate } from "../../interface/interface";
import { useUseStore } from "../../store/store";



export const NobelPrizePage = () => {
    const data = useUseStore((state)=> state.data)
    return (
        <section className="nobel">
            <h1>{data[0].category?.en}</h1>
            <div className="laureates">
                <h2> Laureates : {data[0].laureates?.map((laureates) => {
                    return <p>{laureates.fullName.en}</p>
                })}</h2>
            </div>
            <div>
                <h3>
                    {data[0].awardYear}
                </h3>
            </div>
            <div className="nobelDetails">
                <p>{data[0].category?.en}</p>
            </div>
            <div>
                {data[0].topMotivation?.en}
            </div>
        </section>
    )
}