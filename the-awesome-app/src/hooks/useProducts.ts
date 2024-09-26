import { Product } from "@/model/Product";
import { useEffect, useState } from "react";
import axios from "axios";

export function useProducts(url: string){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    async function fetchProducts(){

        try {
            const response = await axios.get<Product []>(url);

            setProducts(response.data);
        } catch (error) {
            alert("Failed to fetch the data: " +  error);
        }

    }

    return {products, setProducts};

}