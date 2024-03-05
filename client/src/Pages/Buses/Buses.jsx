import TravelServices from "../../components/shared/TravelServices";
import BusServiceBanner from "../../components/ui/Banner/BusServiceBanner";

const Buses = () => {
    const handleSearch = e => {
        e.preventDefault();
        const from = e.target.from.value;
        const to = e.target.to.value;
        const date = e.target.date.value;
        console.log(from, to, date);
    }
  return (
    <div>
      <BusServiceBanner />
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Find Your Journey
          </h2>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              name="from"
              placeholder="From"
              className="w-full sm:w-auto bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
            />
            <input
              type="text"
              name="to"
              placeholder="To"
              className="w-full sm:w-auto bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
            />
             <input
            type="date"
            name="date"
            placeholder="Date"
            className="w-full sm:w-auto bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
          />
            <button
              type="submit"
              className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 transition duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </section>
      <TravelServices />
    </div>
  );
};

export default Buses;
