import Image from 'next/image';
import './Applogo.css';


const Applogo = () => {
    return (
        <div id='Logo'>
                 <Image src={"https://res.cloudinary.com/dstwflz0y/image/upload/v1740904586/Caroline%20Kitchen/App%20Logo/n9y1n3pivtvsvcpxenpc.png"} height={100} width={100}
                   alt="App Logo"
                   loading="lazy"/>
         <h1 id="Logo">
    
                <span className="bg-black text-white rounded-md px-4">Caroline</span>
                <span> Kitchen</span>
            </h1></div>
    )
}

export default Applogo;