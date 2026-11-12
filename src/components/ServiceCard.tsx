// import { mockServices } from "../data/mockServices";
// import type { ServiceStatus } from "../types/service";

// const statusLabels: Record<ServiceStatus, string> = {
//   operational: "Operational",
//   degraded: "Degraded",
//   down: "Down",
//   unknown: "Unknown",
// };

// function ServiceList() {
//   return (
//     <>
//       <div className="flex-1 min-w-0 mx-auto my-10 p-6">
//         <h2 className="mb-4 text-2xl font-bold">Services Overview</h2>
//         <ul className="grid grid-cols-2 gap-4 p-4">
//           {mockServices.map((service) => (
//             <li
//               className="bg-blue-100 text-black"
//               key={service.id}
//               style={{
//                 marginBottom: "16px",
//                 padding: "16px",
//                 border: "1px solid #ddd",
//                 borderRadius: "8px",
//               }}
//             >
//               <h3 className="font-bold ">{service.name}</h3>

//               <p>{service.description}</p>

//               <p className="my-3">
//                 <strong>Status:</strong> {statusLabels[service.status]}
//               </p>

//               <p className="my-3">
//                 <strong>URL:</strong>{" "}
//                 <a href={service.url} target="_blank" rel="noopener noreferrer">
//                   {service.url}
//                 </a>
//               </p>

//               <p className="my-3">
//                 <strong>Response time:</strong>{" "}
//                 {service.responseTimeMs === null
//                   ? "Unavailable"
//                   : `${service.responseTimeMs} ms`}
//               </p>

//               <p className="my-3">
//                 <strong>Last checked:</strong>{" "}
//                 {service.lastCheckedAt === null
//                   ? "Never checked"
//                   : new Date(service.lastCheckedAt).toLocaleString()}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default ServiceList;

import type { Service, ServiceStatus } from "../types/service";

interface ServiceCardProps {
  service: Service;
}

const statusLabels: Record<ServiceStatus, string> = {
  operational: "Operational",
  degraded: "Degraded",
  down: "Down",
  unknown: "Unknown",
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <li className="bg-blue-100 text-black p-4 rounded-lg">
      <h3 className="font-bold">{service.name}</h3>

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
  );
}

export default ServiceCard;
