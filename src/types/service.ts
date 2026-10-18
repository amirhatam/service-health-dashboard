export type ServiceStatus = "operational" | "degraded" | "down" | "unknown";

export interface Service {
  id: string;
  name: string;
  url: string;
  description: string;
  status: ServiceStatus;
  responseTimeMs: number | null;
  lastCheckedAt: string | null;
}
