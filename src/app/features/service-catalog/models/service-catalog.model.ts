export interface ServiceCatalog {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
  duration_minutes: number;
  state: number;
  created_at?: string;
  updated_at?: string;
}

export interface ServiceCatalogApiResponse {
  data: ServiceCatalog[];
  meta: {
    timestamp: string;
    path: string;
  };
}
