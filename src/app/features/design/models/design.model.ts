export interface Design {
  id: number;
  modelName: string;
  chassisCode: string;
  engineType: string;
  horsepower: number;
  topSpeed: number;
  bodyStyle: 'Coupe' | 'GT' | 'Hypercar' | 'SUV';
  designer: string;
  version: string;
  isProductionReady: boolean;
  state: number;
  created_at: Date;
}
