import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";

const Facebook = () => {
    return (
        <a href="https://www.facebook.com/Caroline.Kitchen01" target="blank" className="p-10 flex flex-col lg:flex-row justify-between gap-10 my-[10vh] border rounded-lg hover:bg-zinc-300">
              <h1 className="">
         <FaFacebookF className="text-9xl bg-blue-600 text-white p-3 rounded " />
         </h1>
        <div >
         <h1 className="text-2xl font-bold">You can Join Us by Facebook</h1>
         <h2 className="text-xl font-semibold">To Give us Support</h2>
         <h2 className="text-xl font-semibold">& Get The Latest Update</h2>
         <h1>Just One Click</h1>
        </div>
      
        </a>
    )
}

export default Facebook;