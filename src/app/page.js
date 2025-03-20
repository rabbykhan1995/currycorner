import Facebook from "@/components/Facebook/Facebook";
import FoodCard from "@/components/FoodCard/FoodCard";
import ImageComponent from "@/components/ImageComponent/ImageComponent";

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
   
  const Food = [
    {id:1,name:"shahi cabab", sales:"1503+",img: "https://img.freepik.com/free-photo/whole-chicken-grill-served-with-rice-garnish-white-plate_114579-873.jpg?t=st=1740113409~exp=1740117009~hmac=4924f17eb0ba15fd38c8245088bd38e5a90c8f509eeb43ca2f90c713062c1618&w=826"},
    {id:2,name:"tikka",sales:"1503+",img: "https://img.freepik.com/free-photo/whole-chicken-grill-served-with-rice-garnish-white-plate_114579-873.jpg?t=st=1740113409~exp=1740117009~hmac=4924f17eb0ba15fd38c8245088bd38e5a90c8f509eeb43ca2f90c713062c1618&w=826"},
     {id:3,name:"rosho malay",sales:"1503+",img: "https://img.freepik.com/free-photo/whole-chicken-grill-served-with-rice-garnish-white-plate_114579-873.jpg?t=st=1740113409~exp=1740117009~hmac=4924f17eb0ba15fd38c8245088bd38e5a90c8f509eeb43ca2f90c713062c1618&w=826"}
    ];

  const data = await getData();
  return (
    <div className="p-10 mt-10vh">
      <h1>{data.msg || "No message available"}</h1>
   <div className="flex lg:flex-row flex-col justify-between my-20">
      <div className="flex justify-center items-center p-10 font-serif font-bold leading-loose tracking-wide">
        <p className="md:w-[50vw] w-[100vw]">
        We'll bring the 'que to you! From backyard Fast FOOD, holiday celebrations or hundred-person events, our Barbecrew and catering truck can do it all. Serving thoughtfully crafted sides, vegan and vegetarian options, to the BBQ classics from all the regions of America, and all the corners of the globe — it’s all here.
        </p>
      </div>
      <ImageComponent img={img} />
      
   </div>
   <h1 className="text-2xl font-bold text-center p-10">Our Best Food Item on This Weekend on the basis of product Review and Order</h1>
   <div className="flex justify-around flex-col lg:flex-row">
   
    {Food.map((e, i) => { 
      return(
        <FoodCard key={i} data={e} />
      )
     })}
   </div>
       
   <Facebook />
    </div>
  );
}


