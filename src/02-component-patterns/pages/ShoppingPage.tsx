import { ProductButtons } from "../components/ProductButtons";
import { ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "coffee-mug.png",
};

export const ShoppingPage = () => {
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
        {/* <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title={"Cofee"} />
          <ProductButtons
            increaseBy={function (value: number): void {
              return;
            }}
            counter={0}
          />
        </ProductCard> */}

        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title={"Cofee"} />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
