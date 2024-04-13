import { Form } from "react-router-dom";
import background from '../assets/backgroundLight.jpg'


export default function Home() {

    return (
        <div className="flex h-[400px]  bg-cover bg-[50%] bg-no-repeat 
        
        " >
            
            <img className='w-full ' src={background} alt="a" />
            <div className="absolute w-full h-[400px] overflow-hidden bg-gradient-to-b from-black"></div>
        </ div>

    );
}
