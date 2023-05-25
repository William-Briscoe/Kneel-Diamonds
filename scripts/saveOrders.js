import { placeOrderCheck } from "./transientState.js"

export const placeOrderButtonHTML = () =>{
    document.addEventListener('click', placeOrderCheck)

    return `<button id='placeOrder'>Place Order</button>`
}

