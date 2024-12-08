export default function FlightEssentials() {
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-4">Don’t Miss</h2>
          <div className="grid grid-cols-1  gap-6">
            {/* Left Image Section */}
            <div className="relative w-full h-screen">
              <img
                src="/menpic.png" 
                alt="Jordan Flight Essentials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
  
        {/* Flight Essentials Section */}
        <section className="text-center mt-12">
          <h1 className="text-4xl font-bold mb-4">FLIGHT ESSENTIALS</h1>
          <p className="text-black mb-6">
            Our built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <button
            className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition"
          >
            Shop
          </button>
        </section>
      </div>
    );
  }
  