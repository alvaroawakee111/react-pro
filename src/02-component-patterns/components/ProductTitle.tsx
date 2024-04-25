import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}

//Si tiene mas de 2 propiedades es mejor la interface
// export const ProductTitle = ({title,className}:{title?: string;className?: string;}) => {
export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
