import { useSelector,useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { VegData } from "./vegdata";
import Nav from "./nav";
import { setaddValue } from "../slice";
    
const Vegetables = () => {
    const dispatch=useDispatch()
    const addValue=useSelector((state)=>state.ecommerce.addValue)
    const addToCart=()=>{
        dispatch(setaddValue(addValue+1));

    }
    return (
        <>
            <div class="relative">
            <Nav/>
            <div class="absolute top-10 left-24">
        <div class="text-green-600 text-4xl ml-16 absolute left-96 top-16">
            Vegetables
        </div>
        <div class="ml-4 mt-32 grid grid-cols-3 gap-16">
        {VegData.map((item,index) => (
            <div key={index} class="px-12 py-8 bg-green-300 border rounded">
             <img class="h-48 w-48" src={item.veg_img}/>
            <h2 class="text-lg font-semibold ml-16 mt-4">{item.veg_name}</h2>
            <p class="text-sm ml-16 mt-1">{item.veg_price}</p>
            <p class="ml-44 mt-1"><button type="button" class="rounded-full px-2 py-2 bg-black text-white" onClick={()=>addToCart()}><FaCartPlus /></button></p>
            </div>
  ))}
</div>
</div>
</div>
        </>
    );
};
export default Vegetables;