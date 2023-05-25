import { setStyleOption } from "./transientState.js"

//change listener used on line 35
const handleStyleChoice = (event) =>{
    if(event.target.name === 'styles'){
        setStyleOption(parseInt(event.target.value))
    }
}


//HTML component function
export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")

    const stylesArray = await response.json()

    const stylesHTMLArray = stylesArray.map(
        (style) =>{
            return `<div>
            <input type="radio" name="styles" value='${style.id}'/>${style.style}
            </div>`
        }
    )

    const stylesHTML = stylesHTMLArray.join("")

    // let stylesHTML = `<div id="styles">`
    
    // for (const style of stylesArray) {
    //     stylesHTML += `<input type="radio" name="styles" value='${style.id}'/>${style.style}`
    // }
    
    // stylesHTML += `</div>`

    document.addEventListener("change", handleStyleChoice)
    
    return stylesHTML
}