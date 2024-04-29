import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/pinterfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    //Para obtener el valor de un ref se usa el current
    console.log("Is controller", isControlled.current);

    if (isControlled.current) {
      //Este signo de admiracion le dira a typescript que evitara el error
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
