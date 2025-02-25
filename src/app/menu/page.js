import Image from "next/image";

const page = () => {
  const menuItems = [
    {
      name: "beef kalabhuna",
      category: "heavy",
      price: 180,
      description: "this is a beef kalavuna very popular in bangladesh.",
      image:
        "https://img.freepik.com/premium-photo/kala-bhuna-beaf-meat-with-onion-pepper-salad-served-dish-isolated-wooden-table-top-view-indian-bangladesh-food_689047-2194.jpg?w=826",
    },
    {
      name: "chicken rice",
      category: "heavy",
      price: 200,
      description:
        "this is a chicken and rice mixture heavy class food item which is very testy",
      image:
        "https://img.freepik.com/free-photo/whole-chicken-grill-served-with-rice-garnish-white-plate_114579-873.jpg?t=st=1740113409~exp=1740117009~hmac=4924f17eb0ba15fd38c8245088bd38e5a90c8f509eeb43ca2f90c713062c1618&w=826",
    },
    {
      name: "rosho malay",
      category: "sweet",
      price: 360,
      description:
        "very sweet and delicious in taste and cheap price, the quality is awesome",
      image:
        "https://img.freepik.com/premium-photo/ras-malai-rassomalai-sweet-dish-from-bengal-india-made-up-balls-paneersoaked_957033-80.jpg?w=740",
    },
    {
      name: "Ice-cream",
      category: "cream",
      price: 300,
      description:
        "very sweet and delicious in taste and cheap price, the quality is awesome",
      image:
        "https://img.freepik.com/free-photo/from-scoops-ice-cream-with-chocolate-drops-strawberry-gypsophila-ice-cream-cup_176474-2651.jpg?t=st=1740119642~exp=1740123242~hmac=8623862a6646e5dcf014b29e0f692b065e8fb052cd022739a6d0ec884480ebd5&w=740",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold font-sans justify-self-center my-8">
        Available Items in our menu!
      </h1>
      <nav className="flex justify-around bg-orange-600 px-5 py-1">
        {[...new Set(menuItems.map((item) => item.category))].map(
          (category) => (
            <h1 key={category}>{category}</h1>
          ),
        )}
      </nav>

      <div className="flex flex-col gap-10">
        {menuItems.map((item, index) => {
          return (
            <div
              className="flex hover:bg-zinc-500 md:flex-row flex-col justify-between font-bold text-lg px-10 items-center border"
              key={index}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
              />
              <h1>{item.name}</h1>
              <h1>Price : {item.price} /=</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
