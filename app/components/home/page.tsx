import Image from "next/image";

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-white">

      {/* Header Section */}
      <div className="relative w-full pt-6 flex justify-center items-center flex-col px-4 bg-gray-200">
        <h1
          className="text-base sm:text-xl md:text-2xl lg:text-3xl text-center text-shadow-[#E5E5E5] mb-2"
          style={{ fontFamily: '"Helvetica Neue", sans-serif' }}
        >
          Hello Nike App
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-medium leading-[24px] text-center">
          Download the app to access everything Nike.{" "}
          <span className="underline decoration-solid underline-from-font font-bold">
            Get Your Great
          </span>
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full">
        <Image
          src="/home shoes.svg"
          alt="home shoes pic"
          width={1300}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Section 2 - Nike Air Max Pulse */}
      <div className="relative top-[50px] bg-white px-4 py-4">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-medium leading-[60px] text-center"
          style={{
            fontFamily: '"Helvetica Neue", sans-serif',
            textDecorationSkipInk: "none",
            textUnderlinePosition: "from-font",
          }}
        >
          Nike Air Max Pulse
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg font-normal leading-[24px] text-center"
          style={{
            fontFamily: '"Helvetica Neue", sans-serif',
            textDecorationSkipInk: "none",
            textUnderlinePosition: "from-font",
          }}
        >
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse <br /> —designed to push you past your limits and help you go to
          the max.
        </p>
      </div>

      {/* Button Section */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-[50px] py-4 bg-white justify-center px-4">
        {/* Notify Me Button */}
        <button className="px-6 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition">
          Notify Me
        </button>
        {/* Shop Air Max Button */}
        <button className="px-6 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition mt-4 sm:mt-0">
          Shop Air Max
        </button>
      </div>

    </main>
  );
};

export default Home;
