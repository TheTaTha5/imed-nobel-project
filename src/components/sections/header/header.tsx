

export const Header = ( {year = null} ) => {
    if(year) {
    return(
        
            <div className="Header">
            <h1>ประจำปีค.ศ. {year} </h1>
            </div>

    )
} 
     else {
        return(
            <div className="Header">
            <h1>Nobel Prize</h1>
            </div>

        )
    }
}