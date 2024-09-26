import { Product } from "@/model/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { AuthState } from "@/app/state/redux/authReducer";
import { AppState } from "@/app/state/redux/store";

export function useProducts(url: string){

    const [products, setProducts] = useState<Product[]>([]);
    const auth = useSelector((state: AppState) => state.auth) as AuthState
    const router = useRouter();

    useEffect(() => {

        fetchProducts();

    }, []);

    async function fetchProducts(){

        if(!auth.isAuthenticated){
            router.push("/login");
            return;
        }

        try {

            const headers = {"Authorization": `Bearer ${auth.accessToken}`};
            const response = await axios.get<Product []>(url, {headers});

            setProducts(response.data);
        } catch (error) {
            alert("Failed to fetch the data: " +  error);
        }

    }

    return {products, setProducts};

}