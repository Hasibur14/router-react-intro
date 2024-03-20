import { useLoaderData } from "react-router-dom";
import Todu from "../Todu/Todu";

const Todus = () => {
    const todus = useLoaderData();


  
    
    return (
        <div >
            <h2>Todus:{todus.length}</h2>
            <div className="users-container">
                {
                    todus.map(todu => <Todu todu={todu} key={todu.id}></Todu>)
                }
            </div>
        </div>
    );
};

export default Todus; 