export interface ToolCatalog {
  id: number;
  name: string;
  description?: string;
  photo?: string;
  state: number;
  created_at?: string;
  updated_at?: string;
}

export interface ToolCatalogApiResponse {
  data: ToolCatalog[];
  meta: {
    timestamp: string;
    path: string;
  };
}
