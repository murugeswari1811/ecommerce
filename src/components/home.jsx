 import { useNavigate } from "react-router-dom";
        
 const Home = () => {

    const navigate=useNavigate();
    return (
        <div>
        <section class="relative text-white">
    <div
        class=" mx-auto mt-20 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-2 gap-6">
        <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span
                class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div>
        <span
            class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

            <h1 class="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900">
                100% <span
                    class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600"> Fresh & Organic Foods</span>
                
            </h1>
            <p class="mt-8 text-black text-2xl ml-4 ">
                Vegetables and Fruits For U ...!!!!!
            </p>
            <div class="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                <div class="flex sm:flex-row flex-col gap-5 w-full">
                    
                       
                        <button class="text-2xl ml-20 flex text-white justify-center items-center w-max min-w-max sm:w-max px-12 py-8 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                                after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-black hover:after:opacity-100 hover:after:scale-[2.5] bg-green-600 border-transparent hover:border-[#172554]" onClick={()=>navigate("/login")}>
                            <span class="hidden sm:flex relative z-[5]">
                                Get Started
                            </span>
                            
                        </button>
                </div>
            </div>
        </div>
        <div class=" flex flex-1 lg:w-2/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-4xl">
            <img src="https://media.istockphoto.com/id/1409236261/photo/healthy-food-healthy-eating-background-fruit-vegetable-berry-vegetarian-eating-superfood.jpg?s=612x612&w=0&k=20&c=kYZKgwsQbH_Hscl3mPRKkus0h1OPuL0TcXxZcO2Zdj0=" alt="Hero image" width="2350" height="2359"
                class=" rounded-3xl "/>
        </div>
    </div>
</section>
</div>
    );
 };
 export default Home;