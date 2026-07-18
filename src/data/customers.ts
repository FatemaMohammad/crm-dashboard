export type CustomerStatus = "active" | "lead" | "inactive";

export interface Customer {
  name: string;
  company: string;
  revenue: string;
  status: CustomerStatus;
}

export const customers: Customer[] = [
  { name: "Anna Krüger", company: "Nordic Retail ApS", revenue: "$18,400", status: "active" },
  { name: "Mikkel Holm", company: "Bilka Wholesale", revenue: "$12,900", status: "active" },
  { name: "Sofia Lindqvist", company: "Finmatic", revenue: "$9,750", status: "lead" },
  { name: "Jonas Berg", company: "GreenLine Logistics", revenue: "$6,300", status: "active" },
  { name: "Camilla Skov", company: "Ørsted Studio", revenue: "$4,100", status: "inactive" },
];
