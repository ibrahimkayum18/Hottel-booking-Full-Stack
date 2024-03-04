const HomeBanner = () => {
  return (
    <div className="relative h-72 sm:h-96 md:h-112 lg:h-screen xl:h-144 overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://i.ibb.co/DW9m7Gm/pexels-pixabay-262048.jpg"
        alt="Luxury hotel"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white text-center flex flex-col justify-center h-full px-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">
          Book Your Dream Stay Now!
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Experience luxury at its finest.
        </p>
        <button className="bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg mt-4 sm:mt-6 md:mt-8 hover:bg-purple-500 hover:text-white transition duration-300 lg:w-1/4 mx-auto">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
