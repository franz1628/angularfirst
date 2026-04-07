export interface DocumentType {
  id: number;
  name: string;
  description: string;
  state: number;
  created_at: string;
  updated_at: string;
}

export interface DocumentTypeApiResponse {
  data: DocumentType[];
  meta: {
    timestamp: string;
    path: string;
  };
}
