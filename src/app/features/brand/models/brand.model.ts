export interface Brand {
  id: number;
  name: string;
  description: string;
  logo: string;
  photo: string;
  state: number;
  created_at: string;
  updated_at: string;
}

export interface BrandApiResponse {
  data: Brand[];
  meta: {
    timestamp: string;
    path: string;
  };
}
