//data structure and initial values
const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0,
}

//functions to modify properties
export const setMetalOption = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setSizeOption = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setStyleOption = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}


//function to save transcient state to permanent state
const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */

    const postOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    //custom event
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)

}

export const placeOrderCheck = (clickEvent) => {
    if (clickEvent.target.id === 'placeOrder') {
        placeOrder()
    }
}