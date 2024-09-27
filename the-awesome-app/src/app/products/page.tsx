'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useCallback, useMemo, useState } from "react";
//import styles from './page.module.css';
import { useRouter } from "next/navigation";
import ProductView from "./components/ProductView";
import { useTitle } from "@/hooks/useTitle";
import { useProducts } from "@/hooks/useProducts";


const baseUrl = "http://localhost:9000/products";
//const baseUrl = "http://localhost:9000/secure_products";
export default function ListProducts(){
   
    const {products, setProducts} =  useProducts(baseUrl);
    const [isMessageVisible, setIsVisible] = useState(false);

    const router = useRouter();
    useTitle("List products");
    

    // async function fetchProducts(){

    //     try {
    //         const response = await axios.get<Product []>(baseUrl);
    //         console.log(response.data);
    //         setProducts(response.data);
    //     } catch (error) {
    //         alert("Failed to fetch the data: " +  error);
    //     }

    // }

    const handleDelete = useCallback( async (product: Product)=>{

      
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

    }, [products]);

    const handleEdit = useCallback( (product: Product)=>{
        router.push("/products/" + product.id)
    }, []);

    const calculateTotalPrice = useMemo( () => {

        console.log("calculateTotalPrice..");
        let totalPrice = 0;
        products.forEach(p => {
            if(p.price){
                totalPrice += p.price;
            }
            
        });
        return totalPrice;
    }, [products])
    
    return(
        <div>
            <h4>List Products</h4>

            <div className="alert alert-primary">Total Price: {calculateTotalPrice}</div>

            {isMessageVisible ? <div className="alert alert-info">This is a sample message</div>: null}
            {/* <br/> */}
            <button className="btn btn-info" 
                        onClick={() => setIsVisible(p => !p)}>
                                    {isMessageVisible ? "Hide Message" : "Show Message"}</button>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {
                    return (
                        // <div key={product.id} className={styles.product}>
                            
                        //     <p>Id: {product.id}</p>
                        //     <p>Name: {product.name}</p>
                        //     <p>Price: {product.price}</p>
                        //     <p>Desc: {product.description}</p>
                            
                        //     <div>
                        //         <button className="btn btn-danger" 
                        //                     onClick={() => handleDelete(product)}>Delete</button>&nbsp;
                        //         <button className="btn btn-info"
                        //                     onClick={() => handleEdit(product)}>Edit</button>
                        //     </div>
                        // </div>
                        <ProductView 
                                key={product.id} product={product} 
                                            onDelete={handleDelete} onEdit={handleEdit}/>
                    )
                })}
            </div>

        </div>
    )
}