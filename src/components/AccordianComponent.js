import React from "react";
import {Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 function AccordionUsage(props) {
    console.log("FIRSTtttttt pROPS------>",props);
    const {title, itemCards} = props.resMenu

  return (
    <div>
      <Accordion style={{ width: "700px",marginLeft:"300px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
            <h3> {title} ( {itemCards.length})</h3>
        </AccordionSummary>
        <AccordionDetails>
            <div  className="recommandMenu">{

                itemCards.map(menuList=> {
                  return( 
                   <div className="recommand-menu-list" key={menuList.card.info.id}>
                    <div>
                            <p>
                               <b> {menuList?.card?.info?.name}</b>
                            </p>
                            <p>
                                {"₹" + (menuList?.card?.info.defaultPrice ?  menuList?.card?.info.defaultPrice/100 :
                                menuList.card.info.price/100) }
                            </p>  
                            <p>
                                {menuList?.card?.info?.description}
                            </p>
                            <hr />
                        </div>
                    </div>
                )})
            }
            </div>
          
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
export default AccordionUsage;