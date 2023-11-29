// product es un array de la lista de compra
export function totalPrice(products) {
    let initialValue = 0;
    return products.reduce((acon,product) => acon + product.price, initialValue);
}