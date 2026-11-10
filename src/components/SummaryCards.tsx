import { mockServices } from "../data/mockServices";

const serviceCounts = mockServices.reduce(
  (counts, service) => {
    counts[service.status]++;
    return counts;
  },
  {
    operational: 0,
    degraded: 0,
    down: 0,
    unknown: 0,
  },
);

function SummaryCards() {
  return (
    <div className="flex-1 min-w-0 mx-auto my-10 p-6">
      <h2 className="mb-4 text-2xl font-bold">Overview</h2>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <h4>Operational</h4>
          <p className="text-2xl font-bold">{serviceCounts.operational}</p>
        </div>
        <div>
          <h4>Degraded</h4>
          <p className="text-2xl font-bold">{serviceCounts.degraded}</p>
        </div>
        <div>
          <h4>Down</h4>
          <p className="text-2xl font-bold">{serviceCounts.down}</p>
        </div>
        <div>
          <h4>Unknown</h4>
          <p className="text-2xl font-bold">{serviceCounts.unknown}</p>
        </div>
        <div>
          <h4>Total Services</h4>
          <p className="text-2xl font-bold">{mockServices.length}</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCards;
