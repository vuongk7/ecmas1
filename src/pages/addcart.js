const cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
export const addToCarr = (newsProducts) => {
    const exitsProducts = cart.find((item) => item === newsProducts.id);
    if (!exitsProducts) {
        cart.push(newsProducts);
    }
    console.log(cart);
};