import { useState } from "react";
import fetchAllNobelData from "../../hooks/apiFetching"

export const Filter = ({year=1989}) => {
    
    
    return (
        
        <section className="filterSection">
            <div className="years">
            
                { year }
            </div>
            
        </section>
    )
}