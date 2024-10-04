import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/LastCustomers";
import { SalesDistributors } from "./components/SalesDistributors";
import { TotalSuscribers } from "./components/TotalSuscribers";
import { ListIntegrations } from "./components/ListItegrations";

const dataCardsSummary = [
  {
    icon: UsersRound,
    total:"12.450",
    average: 15,
    title: "Companies created",
    tooltipText: "see all of the companies created" 
  },
  {
    icon: Waypoints,
    total: "86.144",
    average: 80,
    title: "Total Revenue",
    tooltipText: "Sell all of the summary" 
  },
  {
    icon: BookOpenCheck,
    total: "200.00$",
    average: 30,
    title: "Bounce Rate",
    tooltipText: "See all of the bounce rate" 
  },
]

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardsSummary.map(({icon, total, average, title, tooltipText}) => (
          <CardSummary
            key={title}
            average={average}
            icon={icon}
            title={title}
            tooltipText={tooltipText}
            total={total}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
        <LastCustomers />
        <SalesDistributors/>
      </div>
      <div className="flex-col md:gap-x-10 xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 mb:mb-10 justify-center">
        <TotalSuscribers/>
        <ListIntegrations/>
      </div>
    </div>
  );
}
