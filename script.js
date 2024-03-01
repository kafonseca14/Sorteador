const mainButton = document.querySelector("#main-button")

function generateNumber(){
    const minNumber = Math.ceil(document.querySelector("#input-min").value)
    const maxNumber = Math.floor(document.querySelector("#input-max").value)

    if (maxNumber > minNumber) {
        const result = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

        alert(result)
    } else {
        alert("Digite um número maior que o primeiro")
    }
}

mainButton.addEventListener("click", generateNumber)
