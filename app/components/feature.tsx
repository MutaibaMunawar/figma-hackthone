import Image from "next/image";

export default function Feature() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Section Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-black mb-4">Featured</h2>

        {/* Image Section */}
        <div className="relative">
          <Image
            src="/feature.png" // Replace with your image in the public folder
            alt="Runner"
            width={700}
            height={700}
            className="w-full h-auto sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
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
