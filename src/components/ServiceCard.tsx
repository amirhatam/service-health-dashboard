import { mockServices } from "../data/mockServices";
import type { ServiceStatus } from "../types/service";

const statusLabels: Record<ServiceStatus, string> = {
  operational: "Operational",
  degraded: "Degraded",
  down: "Down",
  unknown: "Unknown",
};

function ServiceList() {
  return (
    <main className="flex-1 min-w-0">
      <div className="mx-auto my-10 p-6">
        <h2 className="mb-4 text-2xl font-bold">Overview</h2>

        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <h4>Operational</h4>
            <p className="text-2xl font-bold">
              {mockServices.filter((s) => s.status === "operational").length}
            </p>
          </div>
          <div>
            <h4>Degraded</h4>
            <p className="text-2xl font-bold">
              {mockServices.filter((s) => s.status === "degraded").length}
            </p>
          </div>
          <div>
            <h4>Down</h4>
            <p className="text-2xl font-bold">
              {mockServices.filter((s) => s.status === "down").length}
            </p>
          </div>
          <div>
            <h4>Unknown</h4>
            <p className="text-2xl font-bold">
              {mockServices.filter((s) => s.status === "unknown").length}
            </p>
          </div>
          <div>
            <h4>Total Services</h4>
            <p className="text-2xl font-bold">{mockServices.length}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-0 mx-auto my-10 p-6">
        <h2 className="mb-4 text-2xl font-bold">Services Overview</h2>
        {/* <p className="my-3">Stage 1 — Service data model verification</p> */}
        {/* <h2>Monitored Services</h2> */}
        <ul className="grid grid-cols-2 gap-4 p-4">
          {mockServices.map((service) => (
            <li
              className="bg-blue-100 text-black"
              key={service.id}
              style={{
                marginBottom: "16px",
                padding: "16px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <h3 className="font-bold ">{service.name}</h3>

              <p>{service.description}</p>

              <p className="my-3">
                <strong>Status:</strong> {statusLabels[service.status]}
              </p>

              <p className="my-3">
                <strong>URL:</strong>{" "}
                <a href={service.url} target="_blank" rel="noopener noreferrer">
                  {service.url}
                </a>
              </p>

              <p className="my-3">
                <strong>Response time:</strong>{" "}
                {service.responseTimeMs === null
                  ? "Unavailable"
                  : `${service.responseTimeMs} ms`}
              </p>

              <p className="my-3">
                <strong>Last checked:</strong>{" "}
                {service.lastCheckedAt === null
                  ? "Never checked"
                  : new Date(service.lastCheckedAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ServiceList;
