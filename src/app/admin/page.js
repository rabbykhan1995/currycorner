'use client'
import TotalCard from "@/components/admin/TotalCard/TotalCard";
import "./layout.css";
import { FaUserTie } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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

  const Order_Stat = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 303 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 700 },
    { name: "May", value: 500 },
  ];

  const Site_View_Stat = [
    { name: "Jan", value: 40068 },
    { name: "Feb", value: 30343 },
    { name: "Mar", value: 50023 },
    { name: "Apr", value: 70012 },
    { name: "May", value: 50046},
    {name:"Apr",value:42200}
  ];

  return (
   <div className="dashboard">
    <div className="Total">
      {items.map((item, index) => {
        return <TotalCard key={index} total={item} />;
      })}
    </div>
    <div className="Static_Card">
        <h1>
          Order Static

        </h1>
        <ResponsiveContainer width="100%" height={300}>
      <LineChart data={Order_Stat} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>

    </div>
    <div className="Static_Card">
        <h1>
          Site View Static

        </h1>
        <ResponsiveContainer width="100%" height={300}>
      <LineChart data={Site_View_Stat} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>

    </div>
    </div>
 
   

  );
};

export default page;
