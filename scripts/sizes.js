import { setSizeOption } from "./transientState.js"

//change listener
const handleSizeChoice = (event) =>{
    if(event.target.name === 'sizes'){
        setSizeOption(parseInt(event.target.value))
    }
}

//HTML component fucntion
export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")

    const sizesArray = await response.json()

    const sizesHTMLArray = sizesArray.map(
        (size)=>{
            return `<div>
            <input type="radio" name="sizes" value='${size.id}'/>${size.carets}
            </div>`
        }
    )
    
    const sizesHTML = sizesHTMLArray.join("")
    
    // let sizesHTML = `<div id="sizes">`
    
    // for (const size of sizesArray) {
    //     sizesHTML += `<input type="radio" name="sizes" value='${size.id}'/>${size.carets}`
    // }
    
    // sizesHTML += `</div>`

    document.addEventListener("change", handleSizeChoice)

    
    return sizesHTML

}