import { ProductButtons } from "../components/ProductButtons";
import { ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";

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

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage
            img={product.img}
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2" }}
          />
          <ProductTitle title={"Cofee"} className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage
            img={product.img}
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2" }}
          />
          <ProductTitle title={"Cofee"} style={{ fontWeight: "bold" }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
