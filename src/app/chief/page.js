import Image from "next/image";

const page = () => {
    return (<div className="p-10 flex items-center">
    <div>
    <h1>
            Meet with our Best chief 
        </h1>
        <p>
            She is Israt jahan RIya and her age is 32. She is the best chief in Rajshahi. Our goal is to deliver best product all over Rajshahi
        </p>
    </div>
        <Image src={"https://res.cloudinary.com/dstwflz0y/image/upload/v1740906006/Caroline%20Kitchen/Chief/uvlmojgid9zxfcnrtipg.png"} width={500}
        height={300} loading="lazy"/>
    </div>)
}


export default page;