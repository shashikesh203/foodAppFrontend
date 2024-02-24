import { Link } from 'react-router-dom';
import Image from '../Images/coldcoffee.png';

const SecondPage  = ()=>{
    return(<>
      <div class="flex justify-center">
        <img src={Image} alt="Your Image" class="h-72 w-screen px-5 sm:w-96" />
      </div>
      <div class="grid">
        <h1 class="text-center text-xl text-gray-900">Select the</h1>
        <h2 class="text-center text-xl text-gray-900">Favorities Menu</h2>
        <p class="text-center pt-4 text-sm">Now eat well, don't leave the house,You can</p>
        <p class="text-center text-sm" >choose your favoriies food only with</p>
        <p class="text-center text-sm">one click</p>
        
      </div>
      <div class="text-center mt-6"><Link to="/third-page"><button class="bg-red-500 px-6 pt-1 pb-1 rounded-md">Next</button></Link></div>
    </>);
}
export default SecondPage;