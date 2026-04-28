import { DocumentType } from "../../document-type/models/document-type.model";

export interface Seller {
  id: number;
  name: string;
  last_name: string;
  second_last_name?: string;
  email: string;
  password?: string;
  id_document_type: number;
  number_document: string;
  phone?: string;
  photo?: string;
  birth_date?: string;
  address?: string;
  state: number;
  created_at: string;
  updated_at: string;
  document_type?: DocumentType;
}

export interface SellerApiResponse {
  data: Seller[];
  meta?: {
    timestamp: string;
    path: string;
  };
}
