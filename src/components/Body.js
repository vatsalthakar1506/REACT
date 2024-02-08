import RestaurantCard from "./RestaurantCard";
import cardList from "../utils/mockData";
import  React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";


export const Body = ()=>{

    const [cards, setCards] = useState([]);
    const [filterrestaurant,setFilterrestaurant] = useState([]);
    const [searchText, setSearchText] =   useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [btnRatedRes, setBtnRatedRes]  = useState('Top Rated Restaurants');
   
    useEffect(()=>{
        fetchData();    
    },[])

    const fetchData = async ()=>{
        const data = await fetch('https://corsproxy.org/?'+encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2996951&lng=70.7757594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'));
        const json = await data.json();
        // console.log("JSON---->",json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
           setCards(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     
           setFilterrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    }

    return cards.length === 0 ? (<Shimmer></Shimmer>) : (
        <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                           setSearchText(e.target.value) 
                        }} /> 
                        <button onClick={()=>{
                          const searchRestaurant =  cards.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                          setFilterrestaurant(searchRestaurant);
                          console.log(searchRestaurant);

                        }}>Search</button>
                    </div>
                    <button className="filter-btn" onClick={()=>{
                        const aboveFourStar = cards.filter(res=> res.info.avgRating >= 4.4);
                        console.log(aboveFourStar);

                        const filterOption = btnRatedRes == 'Top Rated Restaurants' ?  aboveFourStar : cards;
                        const newButtonLabel = btnRatedRes == 'Top Rated Restaurants' ? 'All Restaurants' : 'Top Rated Restaurants'
                        
                        setFilterrestaurant(filterOption);
                        setBtnRatedRes(newButtonLabel);
                 
                    }}>
                        {btnRatedRes}
                    </button>
                </div>
            <div className="res-container">
                {filterrestaurant.map(restaurant=> {
                  return (<RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                })}
            </div>
         </div>
    )
}



