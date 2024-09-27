import { CartItem } from "@/model/CartItem"

export type GadgetState = {
    cart: CartItem[]
};

const initState: GadgetState = {
    cart: []
}
export type GedgetAction = {
    type: string,
    payload?: CartItem,
    id? : number
}
export const gadgetReducer = (state = initState, action: GedgetAction) => {


    if (action.type === "add_to_cart" && action.payload) {
        
            
        
        const copyOfCart = [...state.cart];
        const index = copyOfCart.findIndex(item => item.product?.id === action.payload?.product?.id );
        if(index === -1){
            copyOfCart.push(action.payload);
        }
        else {
            const cartItem = {...copyOfCart[index]};
            cartItem.quantity!++;
            copyOfCart[index] = cartItem;
        }

        
        
        return { ...state, cart: copyOfCart };
      
    }
    if (action.type === "remove_from_cart") {

        const filteredProducts = state.cart.filter(item => item.product?.id !== action.id);
        
        
        return { ...state, cart: filteredProducts };

    }
    return state;
}


