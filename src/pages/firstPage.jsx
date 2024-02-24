import { Link } from 'react-router-dom';
import Image from '../Images/1.26 Finish Order.png'
 const FirstPage = ()=>{
    return (<><div class="sm: flex items-center justify-center"><img src={Image}  class ="w-full h-96 sm:w-1/2 " ></img></div>
    <div class="text-center mt-6"><Link to="/second-page"><button class="bg-red-500 px-6 pt-1 pb-1 rounded-md">Next</button></Link></div>
    </>);
}
export default FirstPage;