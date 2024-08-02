/* eslint-disable react/prop-types */
import Product from "./Product";

export default function Products({ products }) {
  return (
    <div className="products">
      {products.map((item) => {
        const { id, title, price, description, category, image, rating } = item;
        return (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        );
      })}
    </div>
  );
}
