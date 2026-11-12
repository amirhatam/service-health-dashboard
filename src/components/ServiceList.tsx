import ServiceCard from "./ServiceCard";
import type { Service } from "../types/service";

interface ServiceListProps {
  services: Service[];
}

function ServiceList({ services }: ServiceListProps) {
  return (
    <section className="mx-auto my-10 p-6">
      <h2 className="mb-4 text-2xl font-bold">Services Overview</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </section>
  );
}

export default ServiceList;
