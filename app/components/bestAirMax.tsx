export const BestAirMax = () => {
    const products = [
      {
        id: 1,
        name: "Nike Air Max Pulse",
        type: "Women's Shoes",
        price: "₹13,995",
        image: "/shoes pic1.png", 
      },
      {
        id: 2,
        name: "Nike Air Max Pulse",
        type: "Men's Shoes",
        price: "₹13,995",
        image: "/shoes pic2.png", 
        badge: "",
      },
      {
        id: 3,
        name: "Nike Air Max 97 SE",
        type: "Men's Shoes",
        price: "₹15,995",
        image: "/shoes pic3.png", 
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h1 className="text-xl font-bold mb-6 flex justify-between items-center">
    Best of Air Max
    <span className="text-sm font-normal flex items-center space-x-2">
      Shop
      <img src="/left arrow.png" alt="arrow" width={24} height={24} />
      <img src="/right arrow.png" alt="arrow" width={24} height={24} />
    </span>
  </h1>
  
  
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
               
                className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition relative"
              >
                {/* Badge (optional) */}
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-sm px-2 py-1 rounded">
                    {product.badge}
                  </div>
                )}
  
                {/* Product Image */}
                <img
                  src={product.image} 
                  alt={product.name}
                  className="w-[541.36px] h-[350.36px]  mb-4 mt-auto"
                />
  
            
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-sm font-bold">{product.price}</p>
                </div>
  
                {/*Type */}
                <p className="text-xs text-gray-600">{product.type}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
     
    );
  };