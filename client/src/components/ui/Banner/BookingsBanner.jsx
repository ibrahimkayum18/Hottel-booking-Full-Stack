const BookingsBanner = () => {
  return (
    <div className="relative h-96 sm:h-80 md:h-100 lg:h-112 xl:h-160 overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://i.ibb.co/DW9m7Gm/pexels-pixabay-262048.jpg"
        alt="Hotel lobby"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-75"></div>
      <div className="relative z-10 text-white text-center flex flex-col justify-center h-full px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2">
          My Bookings
        </h2>
      </div>
    </div>
  );
};

export default BookingsBanner;
