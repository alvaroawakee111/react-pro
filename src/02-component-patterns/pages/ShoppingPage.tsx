import { ProductButtons } from "../components/ProductButtons";
import { ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";

//Todo el product, pero aumentando el count.

export const ShoppingPage = () => {
  const { products, shoppingCart, onProductCardChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            // onChange={(event) => onProductCardChange(event)}
            onChange={onProductCardChange} // Ya que todo esta en el event, se puede enviar directamente
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2" }}
            />
            <ProductTitle title={"Cofee"} className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {
          // Por el tipo de objeto del shopping cart no se puede hacer el map.
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{ width: "100px" }}
              onChange={onProductCardChange}
              value={product.count}
            >
              <ProductImage
                img={product.img}
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2" }}
              />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: " center",
                }}
              />
            </ProductCard>
          ))
        }
      </div>
      {/* <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div> */}
    </div>
  );
};
