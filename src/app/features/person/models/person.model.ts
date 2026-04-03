export interface Person {
  id: number;
  documentNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
}
