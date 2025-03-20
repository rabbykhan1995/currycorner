import Image from "next/image";
import Link from "next/link";

const FoodCard = ({data}) => {
 
    return(
        <div className="min-h-[20vh] min-w-[15vw] border rounded-md p-5 flex flex-col gap-5">
           <Image src={data.img} width={200} height={200} loading="lazy" alt={data.name} className="rounded-md" />
          <h1 className="font-semibold">{data.name}</h1> 
          <h1 className="font-bold">Total Sales {data.sales}</h1>
          <Link href={`${process.env.NEXT_PUBLIC_FRONTEND_HOST}/food/${data.id}`} className="px-5 bg-purple-400 py-1 rounded-md">Click For Details</Link>

        </div>
    )
}


export default FoodCard;