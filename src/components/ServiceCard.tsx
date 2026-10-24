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
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 className="mb-4 text-2xl font-bold">Service Health Dashboard</h1>
      <p className="my-3">Stage 1 — Service data model verification</p>
      <h2>Monitored Services</h2>
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
  );
}

export default ServiceList;

// import { mockServices } from "../data/mockServices";
// import type { ServiceStatus } from "../types/service";

// const statusLabels: Record<ServiceStatus, string> = {
//   operational: "Operational",
//   degraded: "Degraded",
//   down: "Down",
//   unknown: "Unknown",
// };

// type Props = {
//   service: Service;
// };

// function ServiceCard({ service }: Props) {
//   return (
//     <div
//       style={{
//         maxWidth: "900px",
//         margin: "40px auto",
//         padding: "24px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h2>Monitored Services</h2>
//       <ul className="grid grid-cols-2 gap-4 p-4">
//         {mockServices.map((service) => (
//           <li
//             className="bg-blue-100 text-black"
//             key={service.id}
//             style={{
//               marginBottom: "16px",
//               padding: "16px",
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//             }}
//           >
//             <h3 className="font-bold ">{service.name}</h3>

//             <p>{service.description}</p>

//             <p className="my-3">
//               <strong>Status:</strong> {statusLabels[service.status]}
//             </p>

//             <p className="my-3">
//               <strong>URL:</strong>{" "}
//               <a href={service.url} target="_blank" rel="noopener noreferrer">
//                 {service.url}
//               </a>
//             </p>

//             <p className="my-3">
//               <strong>Response time:</strong>{" "}
//               {service.responseTimeMs === null
//                 ? "Unavailable"
//                 : `${service.responseTimeMs} ms`}
//             </p>

//             <p className="my-3">
//               <strong>Last checked:</strong>{" "}
//               {service.lastCheckedAt === null
//                 ? "Never checked"
//                 : new Date(service.lastCheckedAt).toLocaleString()}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ServiceCard;
