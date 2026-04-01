export interface Brand {
  id: number;
  name: string;
  headquarters: string;
  segment: string;
  foundedYear: number;
  heritage: string;
  logoUrl?: string;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
}