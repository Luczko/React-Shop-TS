export interface Producto {
  id: string;
  name: string;
  image: string;
  manufacture: string;
  amount: string;
  category: string;
  featured: boolean;
  quantity?: number;
  deleteId?: number;
}
