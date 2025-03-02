import './Footer.css';
import { FaPhoneAlt,FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = ()=>{
    return(
        <>
        <main className='Main_Container'>
            <div className="Contact_Container">
                <h1>
                <FaPhoneAlt className='text-green-400' />  01721377210
                </h1>
                <h1>
                <MdAlternateEmail />riyahussain27@gmail.com
                </h1>
                <h1>
                <FaMapLocationDot /> Railgate, Rajshahi, Bangladesh
                </h1>
            </div>

            <div className='Grid_Item'>
               <h1>
                Terms & Condition
               </h1>
               <h1>
                Privacy Policy
               </h1>
               <h1>
                About Us
               </h1>
               <h1>
                Contact Us
               </h1>
               <h1>
                Shops
               </h1>
               <h1>
                Menu
               </h1>
               <h1>
                Cheifs
               </h1>
               <h1>
                Support & Feedback
               </h1>
            </div>
            <div className='Social_Media'>
               <h1><FaFacebook className='text-xl' /> Facebook</h1>
            </div>
            </main></>
    )
}

export default Footer;