import Image from "next/image";

const ImageComponent = ({img}) => {
    return(
        <div className="flex justify-center">
         <Image
                src={img}
                alt="Pexels Image"
                width={500}
                height={500} 
                loading="lazy"
                className="rounded-xl" />
               
        </div>
    )
}

export default ImageComponent;