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
        <ProductItem product = { product } />
    </div>
    );
}
export default Content;