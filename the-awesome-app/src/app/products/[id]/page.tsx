'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

export default function EditProduct() {


    const params = useParams();
    const [product, setProduct] = useState<Product>(new Product(0, "", 0, ""));
    const router = useRouter();
    useEffect(() => {

        fetchProduct();

    }, [])

    async function fetchProduct(){

        try {
            const url = `http://localhost:9000/products/${params.id}`;
            const response = await axios.get<Product>(url);
            setProduct(response.data);
        } catch (error) {
            alert("Failed to fetch the data: " +  error);
        }

    }
   
 
    
    async function handleSave(evt: MouseEvent<HTMLButtonElement>){

        evt.preventDefault();
        try {
            
            const url = `http://localhost:9000/products/${params.id}`;
            await axios.put(url, product);

            router.back();


        } catch {
            alert("Failed to update the product");
        }

       
        
    }
    function handleCancel(evt: MouseEvent<HTMLButtonElement>){
        evt.preventDefault();
        router.back();
    }

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){

        // const value = evt.target.value;
        // const temp = {...product};
        // temp.name = value;
        // setProduct(temp);

        //setProduct({...product, name: evt.target.value});
        setProduct(new Product(product.id, evt.target.value, product.price, product.description, product.imageUrl));
        

    }


    return (
        <div>
            <h4>Edit Product: {params.id}</h4>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" className="form-control" value={product.name} onChange={handleNameChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" className="form-control" name="price"
                        value={product.price}
                        onChange={e => setProduct({...product, price: Number(e.target.value)})}/>
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input id="desc" className="form-control" value={product.description}
                     onChange={e => setProduct({...product, description: e.target.value})}/>
                </div>

                <br/>
                <div>
                    <button className="btn btn-success" onClick={handleSave}>Save</button>&nbsp;
                    <button className="btn btn-warning" onClick={handleCancel}>Cancel</button>
                </div>


            </form>
        </div>
    )
}