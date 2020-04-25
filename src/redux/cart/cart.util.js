export const addItemToCart = (currentCartItems, itemToAdd) => {
    const existingItem = currentCartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if(existingItem) {
        return currentCartItems.map(cartItem => 
            cartItem.id === itemToAdd.id ? {...cartItem, quantity:cartItem.quantity+1 } : cartItem )
    }
    
    return [...currentCartItems, {...itemToAdd, quantity:1}]
}

export const reduceItemFromCart = (currentCartItems, itemToRemove) => {
    const existingItem = currentCartItems.find(cartItem => cartItem.id === itemToRemove.id);

    if(existingItem.quantity === 1) {
        return currentCartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    if(existingItem) {
        return currentCartItems.map(cartItem => 
            cartItem.id === itemToRemove.id ? {...cartItem, quantity:cartItem.quantity-1 } : cartItem )
    }
    
    return [...currentCartItems, {...itemToRemove, quantity:1}]
}