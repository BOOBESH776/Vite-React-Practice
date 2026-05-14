
// import React from 'react';

const ProductItem = ({name, price, description}) => {

    return (
    <div>  
        <p>Name : {name}</p>
        <p>Price : ${price}</p>
        <p>Description : {description}</p>
    </div>
    );
}
export default ProductItem;