const AboutBanner = () => {
  return (
    <div className="relative h-96 sm:h-112 md:h-128 lg:h-144 xl:h-160 overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://i.ibb.co/DW9m7Gm/pexels-pixabay-262048.jpg"
        alt="Hotel lobby"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-75"></div>
      <div className="relative z-10 text-white text-center flex flex-col justify-center h-full px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2">
          Welcome to Our Story
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Discover the essence of luxury and comfort.
        </p>
        <p className="text-sm sm:text-base mt-4 sm:mt-6 md:mt-8">
          At our hotel, we strive to provide an unforgettable experience for
          every guest.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
