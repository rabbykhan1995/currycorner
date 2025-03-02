const page = () => {
    const orders = [
        { name: "Burger", category: "Snacks", price: 5.99, table: 1 },
        { name: "Pizza", category: "Dinner", price: 12.99, table: 2 },
        { name: "Pasta", category: "Dinner", price: 8.99, table: 3 },
        { name: "French Fries", category: "Snacks", price: 3.99, table: 1 },
        { name: "Grilled Chicken", category: "Dinner", price: 14.99, table: 4 },
        { name: "Coke", category: "Drinks", price: 1.99, table: 2 },
        { name: "Chocolate Cake", category: "Desserts", price: 6.49, table: 5 },
        { name: "Ice Cream", category: "Desserts", price: 4.99, table: 3 },
        { name: "Tacos", category: "Snacks", price: 7.99, table: 4 },
        { name: "Steak", category: "Dinner", price: 18.99, table: 5 },
        { name: "Orange Juice", category: "Drinks", price: 2.99, table: 1 },
        { name: "Muffin", category: "Desserts", price: 3.49, table: 3 },
      ];
    return(
        <div className="flex gap-5 flex-col w-[100%] p-10">
            <div className="flex">
           <div className="p-10 flex gap-5">
           <input placeholder="search By Id" className="bg-slate-500 rounded-md px-4 outline-none" />
           <button className="bg-green-400 p-2 rounded-md">Search By ID</button>
           </div>
           <div className="p-10 flex gap-5">
           <input placeholder="search By Id" className="bg-slate-500 rounded-md px-4 outline-none" />
           <button className="bg-green-400 p-2 rounded-md">Search By ID</button>
           </div>
           </div>

            {orders.map((order, index)=>{
                return (
                     <div key={index} className=" flex align-baseline justify-between text-white ">
                        <h1 className="border">Food : {order.name}</h1>
                        <h1>Category : {order.category}</h1>
                        <h1 className="text-sm justify-start">price : {order.price} $</h1>
                       <div className="flex gap-4"> <button>Accept</button>
                       <button>Remove</button></div>
                     </div>
                )
            })}
        </div>
    )
}

export default page;