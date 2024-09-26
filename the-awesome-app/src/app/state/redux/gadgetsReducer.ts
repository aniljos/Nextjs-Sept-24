import { CartItem } from "@/model/CartItem"

export type GadgetState = {
    cart: CartItem[]
};

const initState: GadgetState = {
    cart: []
}
export type GedgetAction ={
    type: string,
    payload? : CartItem
} 
export const gadgetReducer = (state= initState, action: GedgetAction)=> {


    return state;

}
