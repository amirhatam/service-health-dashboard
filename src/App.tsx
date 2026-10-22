import { mockServices } from "./data/mockServices";
import type { ServiceStatus } from "./types/service";

const statusLabels: Record<ServiceStatus, string> = {
  operational: "Operational",
  degraded: "Degraded",
  down: "Down",
  unknown: "Unknown",
};

function App() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header>
        <h1 className="mb-4 text-2xl font-bold">Service Health Dashboard</h1>

        <p className="m-0">Stage 1 — Service data model verification</p>
      </header>

      <section>
        <h2>Monitored Services</h2>

        <ul className="grid grid-cols-2 gap-4 p-4">
          {mockServices.map((service) => (
            <li
              key={service.id}
              style={{
                marginBottom: "16px",
                padding: "16px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <h3>{service.name}</h3>

              <p>{service.description}</p>

              <p>
                <strong>Status:</strong> {statusLabels[service.status]}
              </p>

              <p>
                <strong>URL:</strong>{" "}
                <a href={service.url} target="_blank" rel="noopener noreferrer">
                  {service.url}
                </a>
              </p>

              <p>
                <strong>Response time:</strong>{" "}
                {service.responseTimeMs === null
                  ? "Unavailable"
                  : `${service.responseTimeMs} ms`}
              </p>

              <p>
                <strong>Last checked:</strong>{" "}
                {service.lastCheckedAt === null
                  ? "Never checked"
                  : new Date(service.lastCheckedAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <p>
          This dashboard currently displays sample data. No real monitoring is
          performed.
        </p>
      </footer>
    </main>
  );
}

export default App;
