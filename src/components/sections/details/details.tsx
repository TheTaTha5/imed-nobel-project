import { Laureate } from "../../hooks/apiFetching";


const NobelPrize = (detail: String, laureates : Laureate) => {
    return (
        <section className="nobel">
            <div className="laureates">
                <h2> {laureates.name.en} </h2>
            </div>
            <div className="nobelDetails">
                <p>{detail}</p>
            </div>
        </section>
    )
}

export default NobelPrize;