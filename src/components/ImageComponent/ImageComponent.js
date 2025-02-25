import Image from "next/image";

const ImageComponent = ({img}) => {
    return(
        <div className="flex justify-center">
         <Image
                src={img}
                alt="Pexels Image"
                width={1000}
                height={1000} />
        </div>
    )
}

export default ImageComponent;