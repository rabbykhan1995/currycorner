import TotalCard from "@/components/admin/TotalCard/TotalCard";
import "./layout.css";
import { FaUserTie } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const page = () => {
  const items = [
    { name: "User", logo: <FaUserTie className="text-3xl" />, amount: 530003 },
    {
      name: "Reveneue",
      logo: <FaSackDollar className="text-3xl" />,
      amount: "10000405 USD",
    },
    {
      name: "Order",
      logo: <MdOutlineAddShoppingCart className="text-3xl" />,
      amount: 5104,
    },
    {
      name: "Category",
      logo: <MdOutlineAddShoppingCart className="text-3xl" />,
      amount: 60,
    },
  ];

  return (
    <div className="dashboard">
      {items.map((item, index) => {
        return <TotalCard key={index} total={item} />;
      })}

      {/* <h1>hello1</h1>
           <h1>hello1</h1>
           <h1>hello1</h1>
           <h1>hello1</h1>
           <h1>hello1</h1>
           <h1>hello1</h1>
           <h1>hello1</h1>
           <h1>hello1</h1> */}
    </div>
  );
};

export default page;
