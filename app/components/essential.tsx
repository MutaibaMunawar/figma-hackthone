
export default function Essentials() {
    return (
      <div className="bg-gray-50 p-6 min-h-screen">
      
        <h2 className="text-xl font-medium mb-6">The Essentials</h2>
  
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Men's Section */}
          <div className="relative group">
            <img
              src="/men's.png" 
              alt="Men's Essentials"
              className="w-full h-auto object-cover"
            />
        
          </div>
  
          {/* Women's Section */}
          <div className="relative group">
            <img
              src="/women's.png" 
              alt="Women's Essentials"
              className="w-full h-auto object-cover"
            />
         
          </div>
  
          {/* Kids' Section */}
          <div className="relative group">
            <img
              src="/kid's.png" 
              alt="Kids' Essentials"
              className="w-full h-auto object-cover"
            />
         
          </div>
        </div>
  
       
        <div className="grid grid-cols-1 md:grid-cols-4  mt-12 text-sm px-10 py-10">
          <div>
            <h3 className="font-semibold mb-">Icons</h3>
            <ul>
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Shoes</h3>
            <ul>
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Clothing</h3>
            <ul>
              <li>All Clothing</li>
              <li>Modern Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Kids</h3>
            <ul>
              <li>Infant & Toddler Shoes</li>
              <li>Kids&apos; Shoes</li>
              <li>Kids&apos;Jordan Shoes</li>
              <li>Kids&apos; Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }