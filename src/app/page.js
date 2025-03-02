import ImageComponent from "@/components/ImageComponent/ImageComponent";
import { FaFacebookF } from "react-icons/fa";

const img = 'https://res.cloudinary.com/dstwflz0y/image/upload/v1740906446/Caroline%20Kitchen/Home%20Page/qrtbxj8sdja3csifgt2m.jpg';

const getData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_HOST}`, { cache: 'no-cache' });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { msg: "Error fetching data" };
  }
};

export default async function Home() {
  const data = await getData();
  return (
    <div className="p-10 mt-10vh">
      <h1>{data.msg || "No message available"}</h1>
   <div className="flex lg:flex-row flex-col justify-between my-20">
      <div className="flex justify-center items-center p-10 font-serif font-bold leading-loose tracking-wide">
        <p className="md:w-[40vw] w-[100vw] ">
        We'll bring the 'que to you! From backyard Fast FOOD, holiday celebrations or hundred-person events, our Barbecrew and catering truck can do it all. Serving thoughtfully crafted sides, vegan and vegetarian options, to the BBQ classics from all the regions of America, and all the corners of the globe — it’s all here.
        </p>
      </div>
      <ImageComponent img={img} />
      
   </div>

   <div className="p-10 flex justify-around items-center my-[10vh]">
   <div >
    <h1 className="text-2xl font-bold">You can Join Us by Facebook</h1>
    <h2 className="text-xl font-semibold">To Give us Support</h2>
    <h2 className="text-xl font-semibold">& Get The Latest Update</h2>
   </div>
   <a className="">
    <FaFacebookF className="text-9xl bg-blue-600 text-white p-3 rounded " />
    <span>Click Here</span>
    </a>
   </div>
    </div>
  );
}

