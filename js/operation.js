const aInput = document.querySelector("input#a")
const bInput = document.querySelector("input#b")
const operatorSelect = document.querySelector("select#operator")
const resButton = document.querySelector("button")
const resultSpan = document.querySelector("span#result")

resButton.addEventListener("click" ,calculate)

function calculate() {
    const aVal = parseInt(aInput.value)
    const bVal = parseInt(bInput.value)
    //const result = aVal + bVal
    const op = operatorSelect.value
    let result

    if(op === "+") {
        result = aVal + bVal
    }

    if(op === "-") {
        result = aVal - bVal
    }

    if(op === "*") {
        result = aVal * bVal
    }

    if(op === "/") {
        result = aVal / bVal
    }
    resultSpan.innerText = result
    //alert(result)

}

