import React from "react";    
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import {Body} from "./components/Body.js";


const resObj =  {
            "info": {
                "id": "536799",
                "name": "Balaji Sandwich (Two Slices)",
                "cloudinaryImageId": "20267dc6ed9b25862638e761ecc52e23",
                "locality": "Raiya Road",
                "areaName": "Amrapali Crossing",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Fast Food",
                    "Snacks"
                ],
                "avgRating": 4.7,
                "veg": true,
                "parentId": "40738",
                "avgRatingString": "4.7",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 13,
                    "lastMileTravel": 0.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "13 mins",
                    "lastMileTravelString": "0.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-01-24 21:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-2d8d31ed-747c-43a5-bb0c-c8ada896b755"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/balaji-sandwich-two-slices-raiya-road-amrapali-crossing-rajkot-536799",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
       

const AppLayout = () =>{
    return (
        <div className="app ">
            {Header()} 
            <Body/>
        </div>
    )
}

const result = ReactDOM.createRoot(document.getElementById('root'));

result.render(<AppLayout/>);