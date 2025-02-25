import ImageComponent from "@/components/ImageComponent/ImageComponent";

const img1 = "https://images.pexels.com/photos/4348785/pexels-photo-4348785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img2 = 'https://images.pexels.com/photos/13302778/pexels-photo-13302778.jpeg';

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
   <div className="flex lg:flex-row flex-col">
   <ImageComponent img={img1} />
      <ImageComponent img={img2} />
      
   </div>
    </div>
  );
}

