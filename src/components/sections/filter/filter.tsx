import { useState } from "react";

export const Filter = ({year=1989}) => {
    
    
    return (
        
        <section className="filterSection">
            <button className="years" value={year} onClick={(e) => {
                console.log((e.target as HTMLButtonElement).value)
            }}>
                { year }
            </button>
            
        </section>
    )
}