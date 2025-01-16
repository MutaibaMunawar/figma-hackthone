import Image from "next/image";
export default function New() {
  const categories = [
    "Shoes",
    "Sports Bras",
    "Tops & T-Shirts",
    "Hoodies & Sweatshirts",
    "Jackets",
    "Trousers & Tights",
    "Shorts",
    "Tracksuits",
    "Jumpsuits & Rompers",
    "Skirts & Dresses",
    "Socks",
    "Accessories & Equipment",
  ];

  const products = [
    {
      id: 1,
      name: "Nike Air Force 1 Mid '07",
      type: "Men's Shoes",
      colors: "1 Colour",
      image: "/Rectangle (12).png", 
    },
    {
      id: 2,
      name: "Nike Court Vision Low Next Nature",
      type: "Men's Shoes",
      colors: "1 Colour",
      image: "", 
    },
    {
      id: 3,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/Rectangle (4).png", 
    },
    {
      id: 4,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 5,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 6,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 7,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 8,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 9,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 10,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 11,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 12,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 13,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 14,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 14,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 15,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 16,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/air-force-1-plt-af-orm.png", 
    },
    {
      id: 17,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/Rectangle (26).png", 
    },
    {
      id: 18,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/Rectangle (25).png", 
    },
    {
      id: 19,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/Rectangle (21).png", 
    },
    {
      id: 20,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/Rectangle (20).png", 
    },
    {
      id: 21,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/Rectangle (19).png", 
    },
    {
      id: 22,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/Rectangle (18).png", 
    },
    {
      id: 23,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/Rectangle (18).png", 
    },
    {
      id: 24,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/Rectangle (25).png", 
    },
    {
      id: 25,
      name: "Nike Air Force 1 PLT.AF.ORM",
      type: "Women's Shoes",
      colors: "1 Colour",
      image: "/Rectangle (32).png", 
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 p-4 bg-white shadow">
        <h2 className="text-lg font-bold mb-4">New (500)</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-black cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Product Grid */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">New</h1>
          <div className="space-x-4">
            <button className="text-gray-600 hover:text-black">
              Hide Filters
            </button>
            <button className="text-gray-600 hover:text-black">Sort By</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow hover:shadow-lg transition rounded-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={60}
                className="w-[100px] h-60 object-contain mb-4"
              />
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.type}</p>
              <p className="text-sm text-gray-600">{product.colors}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
