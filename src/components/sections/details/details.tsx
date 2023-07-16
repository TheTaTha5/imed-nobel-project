import { Laureate } from "../../interface/interface";



export const NobelPrizePage = (detail:string,awardYear:number,inspriration:string,laureate?:string ) => {
    return (
        <section className="nobel">
            <div className="laureates">
                <h2> {laureate} </h2>
            </div>
            <div>
                <h3>
                    {awardYear}
                </h3>
            </div>
            <div className="nobelDetails">
                <p>{detail}</p>
            </div>
            <div>
                {inspriration}
            </div>
        </section>
    )
}