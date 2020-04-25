export const addItemToCart = (currentCartItems, itemToAdd) => {
    const existingItem = currentCartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if(existingItem) {
        return currentCartItems.map(cartItem => 
            cartItem.id === itemToAdd.id ? {...cartItem, quantity:cartItem.quantity+1 } : cartItem )
    }
    
    return [...currentCartItems, {...itemToAdd, quantity:1}]
}