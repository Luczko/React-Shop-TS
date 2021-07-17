import Products from "./products.json";
import { Product } from "./interface";

class ProductService {
  static getProducts(): Product[] {
    return Products;
  }

  static getFilteredProducts(name: string, manufacture: string): Product[] {
    let filtered = Products.filter(
      (e) => e.manufacture === manufacture || manufacture === "All"
    );

    if (name) {
      return filtered.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
    } else {
      return filtered;
    }
  }

  static getManufacturers(): string[] {
    let manufacturers = Products.map((e) => e.manufacture);
    return ["All", ...Array.from(new Set(manufacturers))];
  }
}

export default ProductService;
