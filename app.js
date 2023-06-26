const button = document.querySelector("button")
const h1 = document.querySelector("h1")

const colorCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

const generateColor = () => {
    let color = "#"

    for (let i = 0; i < 6; i++) {
        console.log(Math.floor(Math.random() * colorCodes.length));
        color += `${colorCodes[Math.floor(Math.random() * colorCodes.length)]}`
    }

    return color
}

button.addEventListener("click", (e) => {
    let colorCode = generateColor()
    document.body.style.backgroundColor = colorCode
    h1.innerHTML = colorCode
})
