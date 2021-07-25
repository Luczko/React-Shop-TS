import React, { useEffect, useState } from "react";
import axios from "axios";
import { Producto } from "./interface";

interface GetProducts {
  products: Producto[];
  loading: boolean;
  error: string;
}

const useGetProducts = (): GetProducts => {
  const [products, setProducts] = useState<Producto[]>([]);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get<Producto[]>(
  //         "http://jsdeveloper-shop-api.s3-website-eu-west-1.amazonaws.com"
  //       )
  //       .then((res) => {
  //         setProducts(res.data);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         const error =
  //           err.response.status === 404
  //             ? "Resource not found 404"
  //             : "An unexpected error has occured";
  //         setError(error);
  //         setLoading(false);
  //       });
  //   }, []);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get<Producto[]>(
          "http://jsdeveloper-shop-api.s3-website-eu-west-1.amazonaws.com"
        )
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          const error =
            err.response.status === 404
              ? "Resource not found 404"
              : "An unexpected error has occured";
          setError(error);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return { products, loading, error };
};

export default useGetProducts;
