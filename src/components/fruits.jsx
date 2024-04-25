import { useSelector,useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa";

import {FruitsData} from './fruitdata'
import { setaddValue } from "../slice";
const Fruits = () => {
    const dispatch=useDispatch()
    const addValue=useSelector((state)=>state.ecommerce.addValue)
    const addToCart=()=>{

        dispatch(setaddValue(addValue+1));

       
    }
    return (
        <>
        <div class="text-green-600 text-4xl ml-16 absolute left-96 top-16">
            Fruits
        </div>
        <div class="ml-4 mt-32 grid grid-cols-3 gap-16">
        {FruitsData.map((item,index) => (
            <div key={index} class="px-12 py-8 bg-green-300 border rounded">
             <img class="h-48 w-48" src={item.fruit_img}/>
            <h2 class="text-lg font-semibold ml-16 mt-4">{item.fruit_name}</h2>
            <p class="text-sm ml-16 mt-1">{item.fruit_price}</p>
            <p class="ml-44 mt-1"><button type="button" class="rounded-full px-2 py-2 bg-black text-white" onClick={()=>addToCart()}><FaCartPlus /></button></p>
            </div>
  ))}
</div>
        </>   
    );
};
export default Fruits;