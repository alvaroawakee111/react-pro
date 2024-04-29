import { useState } from "react";
import { Product, ProductIntCart } from "../interfaces/pinterfaces";
import { products } from "../data/products";

export const useShoppingCart = () => {
  // Lo Primero es identificar como se vera el objeto. Luego se crea la notacion. el [key: string] nos dice que pueden ser varios
  // "1": { ...product1, count: 10 },
  // "2": { ...product2, count: 2 },
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductIntCart;
  }>({});

  const onProductCardChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    // console.log("On product card change", count, product);
    setShoppingCart((oldShoppingCart) => {
      console.log({ count });
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    products,
    shoppingCart,
    onProductCardChange,
  };
};
