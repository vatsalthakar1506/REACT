import RestaurantCard from "./RestaurantCard";
import cardList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";


export const Body = ()=>{

     let [cards, setCards] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2996951&lng=70.7757594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json()
        console.log("JSON---->",json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
           setCards(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return cards.length===0 ? (<Shimmer></Shimmer>) :   (
        <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" /> 
                        <button>Search</button>
                    </div>

                    <button className="filter-btn" onClick={()=>{
                        const aboveFourStar = cards.filter(res=> res.info.avgRating >= 4.4);
                        console.log(aboveFourStar);
                          setCards(aboveFourStar) ;
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>


            <div className="res-container">
                {cards.map(restaurant=> {
                  return (<RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                })}
            </div>
         </div>
    )
}



