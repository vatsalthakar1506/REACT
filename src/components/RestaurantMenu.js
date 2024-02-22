import {useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import AccordionUsage from "./AccordianComponent";

const RestaurantMenu = ()=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const {resId}= useParams();

   const  fetchMenu= async()=>{
    const data = await fetch('https://corsproxy.org/?'+ encodeURIComponent(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER"));
    const json = await data.json();
    setResInfo(json.data);
    console.log("NEW-------JSOn-------------------->",json.data);
    }
  
    if(resInfo===null)  return <Shimmer/>
    
    
    const {name,cuisines,costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info;
     const {itemCards,title} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.[2]?.card?.card;
     const firstAccodian =  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.[2]?.card?.card;
     const secondAccodian =  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.[3]?.card?.card;

     console.log("RESINFPOOOOOOOOOOOOOO----------->",itemCards);
  
    return (
    <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} -  {costForTwoMessage}</p>
            <ul>
                <AccordionUsage resMenu = {firstAccodian} /> 
                {/* <AccordionUsage resMenu = {secondAccodian} />              */}
        </ul>
        </div>
    )
}

export default RestaurantMenu;