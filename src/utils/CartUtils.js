export const Subtotal = (cartItems) => {
    let sum = cartItems.reduce((sum, p) => sum + p.price*p.count, 0);
    return sum
}