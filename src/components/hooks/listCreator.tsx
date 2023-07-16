import { arrayOfYears } from "../constant/constant";
import { Filter } from "../sections/filter/filter";

 const ListCreator = () => { //TODO: Seperate to new creator folder//file
    let listOfFilter = arrayOfYears.map((value,index) => {
        return(
        <div>
            <Filter year={value}/>
        </div>
        )
    });
    return listOfFilter;
}

export default ListCreator