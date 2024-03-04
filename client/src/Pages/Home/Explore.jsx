const Explore = () => {
  const locations = [
    {
      name: "Cox's Bazar",
      image: "https://i.ibb.co/94J5MFs/cox-bazar.jpg",
      hotels: ["Hotel Eiffel", "Hotel Le Meurice", "Hotel de Crillon"],
    },
    {
      name: "Sylhet",
      image: "https://i.ibb.co/Z6YMZmv/97.jpg",
      hotels: [
        "Park Hyatt Tokyo",
        "Mandarin Oriental Tokyo",
        "The Peninsula Tokyo",
      ],
    },
    {
      name: "Sundarban",
      image: "https://i.ibb.co/R0pR1t8/sundarbans-1.webp",
      hotels: [
        "The Plaza Hotel",
        "The Ritz-Carlton New York, Central Park",
        "The St. Regis New York",
      ],
    },
    {
      name: "Kuakata",
      image: "https://i.ibb.co/j3Nccg0/sea-beach.jpg",
      hotels: [
        "Burj Al Arab Jumeirah",
        "Jumeirah Beach Hotel",
        "Atlantis, The Palm",
      ],
    },
  ];
  return (
    <div className="lg:w-[85%] mx-auto mt-10 px-5">
      <h2 className="text-3xl font-bold py-5">Explore Bangladesh</h2>
      <p className="lg:w-3/4 pb-5">
        Prepare to experience Bangladesh's rich culture and explore the majestic
        beauties of Cox’s Bazar, Sylhet, Bandarban, Sajek Valley, Rangamati etc.
        Plan your trip now!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {locations.map((location, index) => (
          <div key={index} className="relative overflow-hidden  group rounded-lg shadow-lg ">
          <img
            src={location?.image}
            alt="Image 3"
            className="w-full h-[350px]  object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300 rounded-md"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 transition-opacity duration-300 group-hover:opacity-0 rounded-md"></div>
          <div className="absolute inset-0 top-[260px] left-5">
            <p className="text-white text-xl font-bold ">
              {location?.name}
            </p>
            <div className="text-white font-semibold">
                Hotel Available: {location?.hotels?.length}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
