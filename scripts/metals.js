import { setMetalOption } from "./transientState.js"

//metals change listener, used on line 37
const handleMetalChoice = (event) =>{
    if(event.target.name === 'metal'){
        setMetalOption(parseInt(event.target.value))
    }
}


//function that creates the metals HTML
export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
    
    // Use map() to generate new array of strings
    const divStringArray = metals.map(
        (metal) => {
            return `<div>
            <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
        </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    const metalsHTML = divStringArray.join("")


    // let metalsHTML = `<div id="metals">`

    // for (const metal of metals) {
    //     metalsHTML += `<input type="radio" name="metals" value='${metal.id}'/>${metal.metal}`
    // }

    // metalsHTML += `</div>`

    document.addEventListener("change", handleMetalChoice)

    return metalsHTML
}