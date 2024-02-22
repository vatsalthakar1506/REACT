import {useRouteError} from "react-router-dom";

const Error = ()=>{
    const err= useRouteError();
    return (
        <div>
            <h1>
            Oppp.s Page Not Found
            </h1>
            <h2>
                Something Went Wrong..
            </h2>
        </div>
    )
}



export default Error;