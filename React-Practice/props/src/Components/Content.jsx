import ProductItem from "./ProductItem";
import { useState } from "react";

const Content = () => {
    const [product, setProduct] = useState({
        name: "Laptop",
        price: 1000,
        description: "A high-performance laptop for work and play."
    });
    return (
    <div>  
        <h4>Product display using props</h4>
        <ProductItem name={product.name} price={product.price} description={product.description} />
    </div>
    );
}
export default Content;