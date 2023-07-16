import { DisplayNobelPrize, NobelPrize, PrizeCat } from "../interface/interface";
import { CreateDetailPage } from "./apiFetching";

//che cate only
const DetailPageGenerator = (year:number) => {
   let prizeDetail:DisplayNobelPrize = {
        awardYear : CreateDetailPage(year)[0].awardYear,
        laureates: CreateDetailPage(year)[0].laureates,
        dateAwarded: CreateDetailPage(year)[0].dateAwarded,
        prizeAmount: CreateDetailPage(year)[0].prizeAmount,
        prizeAmountAdjusted: CreateDetailPage(year)[0].prizeAmountAdjusted,
        topMotivation: CreateDetailPage(year)[0].topMotivation?.en
   };

   return (
    <div>
        {prizeDetail.awardYear}
        <div>
    </div>
    <div>
        {prizeDetail.prizeAmount}
    </div>
    <div>
        {prizeDetail.prizeAmountAdjusted}
    </div>
    <div>
        {prizeDetail.topMotivation}
    </div>
    </div>
   )
}

export default DetailPageGenerator;