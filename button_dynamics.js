const product_quantity = document.getElementById("product_quantity");
function product_quantity_decrease(){
    if (parseInt(product_quantity.innerText) > 0){
        product_quantity.innerHTML = parseInt(product_quantity.innerText) - 1;
    }
}
function product_quantity_increase(){
    product_quantity.innerHTML = parseInt(product_quantity.innerText) + 1;
}