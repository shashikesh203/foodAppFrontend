import Image from "../Images/maggi.jpg";

const Maggi = ()=>{
  return(<>
  <div class="grid justify-center text-center mt-4"><img src={Image} alt="" class="w-96 h-64 rounded-md"/><h1 class="text-xl text-red-500">Order now</h1><h1>& enjoy</h1><h1 class="text-lg text-red-500">your favourite meal</h1><h1>We are here to provide you the meal faster</h1></div>
  <div class="flex justify-center mt-8">
    <div class="bg-red-500 rounded-md px-4 pt-2 pb-2 mr-10"><button>Buy Now</button></div>
    <div class="bg-red-500 rounded-md px-4 pt-2 pb-2"><button>Add to cart</button></div>
  </div>
  <div class="text-center mt-8">
    <buutton class="bg-black px-24 pt-2 pb-2 text-white rounded-md">2.75 $</buutton>
  </div>
  </>)

}
export default Maggi;