import { useUseStore } from "../../store/store";


export const Header = () => {
    const yeardata = useUseStore((state)=> state.year);
    if(yeardata == 0) {
        return(
            <div className="Header">
            <h1>Nobel Prize</h1>
            </div>

        )
} 
     else {
        return(
        
            <div className="Header">
            <h1>ประจำปีค.ศ. {yeardata} </h1>
            </div>

    )
        
    }
}