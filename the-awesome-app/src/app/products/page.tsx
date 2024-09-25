'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from './page.module.css';

const baseUrl = "http://localhost:9000/products";
export default function ListProducts(){

    console.log("rendering ListProducts");
    const [products, setProducts] = useState<Product[]>([])
    
    useEffect(() => {
        console.log("mounted ListProducts");
        fetchProducts();
        
    }, []);

    

    async function fetchProducts(){

        try {
            const response = await axios.get<Product []>(baseUrl);
            console.log(response.data);
            setProducts(response.data);
        } catch (error) {
            alert("Failed to fetch the data: " +  error);
        }

    }

    console.log("rendering ListProducts return the jsx", products);
    return(
        <div>
            <h4>List Products</h4>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {
                    return (
                        <div key={product.id} className={styles.product}>
                            <p>Id: {product.id}</p>
                            <p>Name: {product.name}</p>
                            <p>Price: {product.price}</p>
                            <p>Desc: {product.description}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}