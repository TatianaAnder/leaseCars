export type CarCategory = 'retro' | 'trucks' | 'suv' | 'electro';

export interface Car {
  id: string;
  title: string;
  image: string;
  startingPrice: number;
  monthlyPrice: number;
  category: CarCategory;
}

export interface TabDefinition {
  id: CarCategory;
  label: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
