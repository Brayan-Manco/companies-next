import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/LastCustomers";

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
      <div className="grid grid-cols-1 xl-:grid-cols-2 md:gap-x-10 mt-12">
        <LastCustomers />
        <p>Sales Distributors</p>
      </div>
    </div>
  );
}
