
// import React from 'react';

const ProductItem = (props) => {

    return (
    <div>  
        <p>Name : {props.product.name}</p>
        <p>Price : ${props.product.price}</p>
        <p>Description : {props.product.description}</p>
    </div>
    );
}
export default ProductItem;