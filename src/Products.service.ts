import { Producto } from "./interface";

class ProductService {
  // static async getProducts(): Producto[] {
  //   let products =
  //   await axios
  //     .get("http://jsdeveloper-shop-api.s3-website-eu-west-1.amazonaws.com"),
  //   return products.data;
  // }

  static getFilteredProducts(
    products: Producto[],
    name: string,
    manufacture: string
  ): Producto[] {
    let filtered = products.filter(
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

  static getManufacturers(products: Producto[]): string[] {
    let manufacturers = products.map((e) => e.manufacture);
    return ["All", ...Array.from(new Set(manufacturers))];
  }
}

export default ProductService;
