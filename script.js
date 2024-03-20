const mainButton = document.querySelector("#main-button")
const showResult = document.querySelector("#show-result")

function generateNumber(){
    const minNumber = Math.ceil(document.querySelector("#input-min").value)
    const maxNumber = Math.floor(document.querySelector("#input-max").value)

    if (maxNumber > minNumber) {
        const result = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

        showResult.textContent = `Resultado: ${result}`
    } else {
        console.log("Digite um número maior que o primeiro")
    }
}

mainButton.addEventListener("click", generateNumber)
