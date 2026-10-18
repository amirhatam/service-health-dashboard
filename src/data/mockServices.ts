import type { Service } from "../types/service";

export const mockServices: Service[] = [
  {
    id: "website",
    name: "Main Website",
    url: "https://website.example.com",
    description: "The main website used by customers.",
    status: "operational",
    responseTimeMs: 120,
    lastCheckedAt: "2026-10-18T13:55:00.000Z",
  },
  {
    id: "auth-api",
    name: "Authentication API",
    url: "https://auth.example.com",
    description: "Handles user authentication.",
    status: "operational",
    responseTimeMs: 85,
    lastCheckedAt: "2026-10-18T13:55:10.000Z",
  },
  {
    id: "payment-api",
    name: "Payment API",
    url: "https://payments.example.com",
    description: "Processes payment requests.",
    status: "degraded",
    responseTimeMs: 1450,
    lastCheckedAt: "2026-10-18T13:55:20.000Z",
  },
  {
    id: "storage",
    name: "File Storage",
    url: "https://storage.example.com",
    description: "Stores and retrieves uploaded files.",
    status: "down",
    responseTimeMs: null,
    lastCheckedAt: "2026-10-18T13:55:30.000Z",
  },
  {
    id: "email",
    name: "Email Delivery",
    url: "https://email.example.com",
    description: "Handles outgoing email delivery.",
    status: "unknown",
    responseTimeMs: null,
    lastCheckedAt: null,
  },
];
