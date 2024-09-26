// <ProductView product={} />
import React from 'react';
import styles from '../page.module.css';
import { Product } from "@/model/Product"

type ProductViewProps = {
    product: Product
};
const ProductView: React.FC<ProductViewProps> = ({ product }) => {

    console.log("rendering product-view...");
    return (
        <div className={styles.product}>

            <p>Id: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Desc: {product.description}</p>

            {/* <div>
                <button className="btn btn-danger"
                    onClick={() => handleDelete(product)}>Delete</button>&nbsp;
                <button className="btn btn-info"
                    onClick={() => handleEdit(product)}>Edit</button>
            </div> */}
        </div>
    );
}

export default React.memo(ProductView);

