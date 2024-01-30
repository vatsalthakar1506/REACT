import { CDN_URL } from "../utils/constant";

const RestaurantCard  =(props)=>{
 
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = props.resData?.info;

    return (
        <div className="res-card" style={{backgroundColor:"#d9d3d3"}}>
            <img className="res-logo" alt="burger" src={CDN_URL+cloudinaryImageId}  />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')} </h4>
            <h4>{avgRating} Star</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestaurantCard;