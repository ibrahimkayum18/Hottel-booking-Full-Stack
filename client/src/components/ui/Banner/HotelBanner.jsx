
const HotelBanner = () => {
  return (
    <div className="relative h-96 sm:h-112 md:h-128 lg:h-144 xl:h-160 overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://i.ibb.co/crx2Rb9/pexels-pixabay-258154.jpg"
        alt="Hotel service"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-75"></div>
      <div className="relative z-10 text-white text-center flex flex-col justify-center h-full px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2">Escape to Luxury</h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Indulge in unparalleled comfort and hospitality.</p>
        <p className="text-sm sm:text-base mt-4 sm:mt-6 md:mt-8">Experience a memorable stay with exquisite dining, spa, and recreational facilities.</p>
      </div>
    </div>
  );
};

export default HotelBanner;
