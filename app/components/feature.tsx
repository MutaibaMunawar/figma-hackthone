export default function Feature() {
  return (
    <div className="min-h-screen bg-gray-50">
 
      <div className="max-w-7xl mx-auto px-4 py-12">
    
        <h2 className="text-lg font-semibold text-black mb-4">Featured</h2>

        {/* Image Section */}
        <div className="relative">
          <img
            src="/feature.png" // Replace with your image in the public folder
            alt="Runner"
            className="w-full h-[700px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center mt-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="text-gray-600 mt-2">
            Cause everyone should know the feeling of running in that perfect pair
          </p>

          {/* Call-to-Action Button */}
          <button
            className="mt-6 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-700 transition"
            onClick={() => alert("Find Your Shoe clicked!")}
          >
            Find Your Shoe
          </button>
        </div>
      </div>
    </div>
  );
}