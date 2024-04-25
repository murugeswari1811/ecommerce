import { useSelector,useDispatch } from "react-redux";
import { setLoginData } from "../slice";
import { useNavigate } from "react-router-dom";
   
const Login = () => {
    const loginDetails = useSelector((state)=>state.ecommerce.loginData);
    console.log(loginDetails)
    const dispatch = useDispatch();
    const navigate=useNavigate()
    // const signUpDetails=JSON.parse(localStorage.getItem("sign"))
    // console.log(signUpDetails)
    // const checkLogin=()=>{
    //     if(loginDetails.emailAddress==signUpDetails.emailAddress && loginDetails.password==signUpDetails.password){
    //         navigate("/main")
    //     }
    //     else{
    //         alert("Incorrect Email Address or Password")
    //     }
    // }
    return (
        <div>
<div className="bg-gray-100 flex justify-center items-center h-screen">
<div className="w-1/2 h-screen hidden lg:block">
  <img src="https://watermark.lovepik.com/photo/20211208/large/lovepik-fruits-and-vegetables-poster-picture_501615020.jpg" alt="Placeholder Image" className="object-cover w-full h-full"/>
</div>
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">Login</h1>
  <form action="#" method="POST">
    <div className="mb-4">
      <label for="username" className="block text-gray-600">Email Address</label>
      <input type="text" id="email" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" onKeyUp={(e)=>dispatch(setLoginData({...loginDetails,emailAddress:e.target.value}))}/>
    </div>
    <div className="mb-4">
      <label for="password" className="block text-gray-600">Password</label>
      <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" onKeyUp={(e)=>dispatch(setLoginData({...loginDetails,password:e.target.value}))}/>
    </div>
    
    <button type="button" className="bg-green-600 hover:bg-black text-white font-semibold rounded-md py-2 px-4 w-full" onClick={()=>checkLogin(navigate("/main"))}>Login</button>
  </form>
  <div className="mt-6 text-green-600 text-center">
    <a href="/signup" className="hover:underline"> If you are have not an account. <br/>Sign up Here</a>
  </div>
</div>
</div>
        </div>
    );
};
export default Login;