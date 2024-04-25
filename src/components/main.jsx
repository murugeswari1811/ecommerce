import Nav from "./nav";      
import { useSelector,useDispatch } from "react-redux";
import Fruits from "./fruits";
import Vegetables from "./vegetables";
const Main = () => {
    return (
        <>
            <div class="relative">
                <Nav/>
                    <div class="absolute top-10 left-24">
                        <Fruits/>
                    </div>
                    
            </div>
            
        </>
    );
};
export default Main;