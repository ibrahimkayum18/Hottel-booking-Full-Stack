
const BusServiceBanner = () => {
  return (
    <div className="relative h-96 sm:h-112 md:h-128 lg:h-144 xl:h-160 pt-20 overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://i.ibb.co/p07hBsc/pexels-timcompound-3608967.jpg"
        alt="Bus service"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white text-center flex flex-col justify-center h-full px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2">Ride in Comfort and Style</h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Discover the convenience of our bus services.</p>
        <p className="text-sm sm:text-base mt-4 sm:mt-6 md:mt-8">We offer comfortable seating, Wi-Fi, and onboard entertainment for a delightful journey.</p>
      </div>
    </div>
  );
};

export default BusServiceBanner;
