import { useState } from "react";

import { useUseStore } from "../../store/store";



export const Filter = ({year=1989}) => {
    const setYear = useUseStore((state)=> state.setYear);
    return (
        <section className="pb-2">
            <button className="rounded-none bg-emerald-300 w-28 hover:bg-emerald-700 text-white" value={year} onClick={(e) => {setYear(parseInt(((e.target)as HTMLButtonElement).value))
            }}>
                { year }
            </button>
        </section>
    )
}