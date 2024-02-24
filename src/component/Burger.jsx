import { Link } from "react-router-dom";
import Image from "../Images/Burger.jpg";
import { useState } from "react";

export const BurgerUpper = ()=>{

  return(<>
  <div class="grid justify-center text-center mt-4"><img src={Image} alt="" class="w-96 h-64 rounded-md"/>
  </div>
  </>)

}

export const BurgerLower = ()=>{

  const [Burgerdata,setBurgerdata] = useState({
    Name: "Burger",
    price: "100"
  });

  return(<>
   <div class="flex justify-center mt-8">
    <div class="bg-red-500 rounded-md px-4 pt-2 pb-2 mr-10"><button>Buy Now</button></div>
   <Link to="./add-to-cart" state={{data: Burgerdata}}> <div class="bg-red-500 rounded-md px-4 pt-2 pb-2" ><button  >Add to cart</button></div></Link> 
  </div>
  <div class="text-center mt-8">
    <buutton class="bg-black px-5 pt-2 pb-2 text-white rounded-md">Burger &nbsp; &nbsp;1.75 $</buutton>
  </div>
  </>)
} 


