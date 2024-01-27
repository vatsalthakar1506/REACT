import RestaurantCard from "./RestaurantCard";
import cardList from "../utils/mockData";




export const Body = ()=>{
    return (
        <div className="body">
                <div className="search">
                    Search
                </div>
            <div className="res-container">
                {cardList.map(restaurant=> (<RestaurantCard  key={restaurant.card.card.info.id} resData = {restaurant.card.card}/>))}
            </div>
         </div>
    )
}



