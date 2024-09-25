'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from './page.module.css';
import { useRouter } from "next/navigation";

const baseUrl = "http://localhost:9000/products";
export default function ListProducts(){

    console.log("rendering ListProducts");
    const [products, setProducts] = useState<Product[]>([])
    const router = useRouter();
    
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

    async function handleDelete(product: Product){

        try{

            const url = `${baseUrl}/${product.id}`;
            await axios.delete(url);
            alert(`Product with id: ${product.id} deleted`);
            //await fetchProducts();

            //remove the product from the state(products)
            const copy_of_products = [...products];
            const index = copy_of_products.findIndex(item => item.id === product.id);
            if(index != -1){
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products); 
            }

               

        }
        catch{
            alert(`Product with id: ${product.id} not found`);
        }

    }

    function handleEdit(product: Product){
        router.push("/products/" + product.id)
    }
    
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
                            <div>
                                <button className="btn btn-danger" 
                                            onClick={() => handleDelete(product)}>Delete</button>&nbsp;
                                <button className="btn btn-info"
                                            onClick={() => handleEdit(product)}>Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}