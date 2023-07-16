import { useState } from "react";

import { useUseStore } from "../../store/store";



export const Filter = ({year=1989}) => {
    const setYear = useUseStore((state)=> state.setYear);
    

    return (
        
        <section className="filterSection">
            <button className="years" value={year} onClick={(e) => {setYear(parseInt(((e.target)as HTMLButtonElement).value))
            }}>
                { year }
            </button>
        </section>
    )
}