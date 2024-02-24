import { Link } from 'react-router-dom';
import Image from '../Images/Burgerroll.jpg';

const ThirdPage  = ()=>{
    return(<>
      <div class="flex justify-center">
        <img src={Image} alt="Your Image" class="h-72 w-screen px-5 sm:w-96" />
      </div>
      <div class="grid">
        <h1 class="text-center text-xl text-gray-900">Good food at a</h1>
        <h2 class="text-center text-xl text-gray-900">cheap price</h2>
        <p class="text-center pt-4 text-sm">You can eat at expensive</p>
        <p class="text-center text-sm">resturant with</p>
        <p class="text-center text-sm">affordable price</p>
      </div>
      <div class="text-center mt-6"><Link to="/Register"><button class="bg-red-500 px-6 pt-1 pb-1 rounded-md">Next</button></Link></div>
    </>);
}
export default ThirdPage;