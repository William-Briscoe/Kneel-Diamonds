export const Orders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await response.json()
    

    const ordersHTMLarray = orders.map(
        (order) => {
            let orderPrice = order.metal.price + order.style.price + order.size.price
            return `<div>Order #${order.id} costs $${orderPrice}</div>`
        }
    )
    let ordersHTML = ordersHTMLarray.join("")

    return ordersHTML
}