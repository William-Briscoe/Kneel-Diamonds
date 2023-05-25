import { MetalOptions } from './metals.js'
import { Orders } from './orders.js'
import { placeOrderButtonHTML } from './saveOrders.js'
import { SizeOptions } from './sizes.js'
import { StyleOptions } from './styles.js'

const container = document.querySelector("#maingoeshere")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const orderButtonHTML = placeOrderButtonHTML()
    const customOrders = await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
        ${orderButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${customOrders}
        </article>
    `

    container.innerHTML = composedHTML
    
}

render()

//rerenders HTML everytime an order is made
document.addEventListener("newOrderPlaced", (customEvent) => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})