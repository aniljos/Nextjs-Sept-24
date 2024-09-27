'use client'
import {useDispatch} from 'react-redux'
import React from 'react';
import { useProducts } from "@/hooks/useProducts";
import { AppDispatch } from "../state/redux/store";
import { CartItem } from "@/model/CartItem";
import { Product } from "@/model/Product";


const GadgetStore: React.FC = () => {

    const {products} = useProducts("http://localhost:9000/products")
    const dispatch = useDispatch<AppDispatch>();
   
    
    
    

    function addToCart(product: Product): void {
       
        const cartItem = new CartItem(product, 1);
        dispatch({type: 'add_to_cart', payload: cartItem});
        //dispatch(addToRedux(cartItem));
        
    }
    function renderProducts() {

        const productsView =  products.map((item, index) => {
           

            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }


    return (
        <div>
            <h1>Gadget Store</h1>

            <div>
                {renderProducts()}
            </div>
        </div>

    );
}

export default GadgetStore;