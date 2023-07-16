import { useState } from "react";
import {CreateDetailPage} from "../../hooks/apiFetching";

export const Filter = ({year=1989}) => {
    return (
        
        <section className="filterSection">
            <button className="years" value={year} onClick={(e) => {CreateDetailPage(parseInt(((e.target)as HTMLButtonElement).value))
            }}>
                { year }
            </button>
        </section>
    )
}