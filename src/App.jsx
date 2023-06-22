import FilterCard from "./components/FilterCard";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle";
import InfoCard from "./components/InfoCard";
import CarouselButtons from "./components/CarouselButtons";

import { cancel_card, bag_card, order_card, delivered_card } from "./assets";
import Charts from "./components/Charts";
import CustomerReviews from "./components/CustomerReviews";
import TotalRevenueCard from "./components/TotalRevenueCard";
import BarChart from "./components/Charts/BarChart";
import WeeklyCard from "./components/WeeklyCard";

// import './App.css'

const infoCardData = [
  {
    key: 1,
    icon: delivered_card,
    title: "357",
    desc: "Total Delivered",
    percent: -5,
  },
  {
    key: 2,
    icon: order_card,
    title: "485",
    desc: "Total Ordered",
    percent: 25,
  },
  {
    key: 3,
    icon: cancel_card,
    title: "388",
    desc: "Total Canceled",
    percent: -8,
  },
  {
    key: 4,
    icon: bag_card,
    title: "$888",
    desc: "Total Ordered",
    percent: 25,
  },
];

function App() {
  const name = "Samantha";
  return (
    <div className=" bg-dashboard w-full sm:px-5 px-2">
      <div className="w-full py-3 px-1">
        <Navbar />
      </div>
      <div className=" flex flex-row w-full justify-between py-3 px-3">
        <SectionTitle
          title="Dashboard"
          desc={`Hi, ${name}, Welcome back to your Dashboard!`}
        />
        <FilterCard />
      </div>
      <div className=" flex justify-center w-full  py-3 px-3">
        <InfoCard data={infoCardData} />
      </div>
      <div className=" flex  justify-center w-full  py-3 px-3">
        <Charts />
      </div>
      <div className=" flex flex-row py-3 px-3 items-center justify-center">
        <div>
          <TotalRevenueCard />
        </div>
        <div><WeeklyCard /></div>
      </div>

      <div className=" w-full py-5  px-3">
        <CustomerReviews />
      </div>
    
    </div>
  );
}

export default App;
