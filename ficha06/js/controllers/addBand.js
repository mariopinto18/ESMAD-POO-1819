import {
    addBand
} from "../models/main.js"

// Clique no botão de filtro
document.querySelector("#frmAddBand").addEventListener("submit", function (event) {
    // Invocação a função importada do fx main.js chamada addBand
    addBand(
        document.querySelector("#txtName").value,
        document.querySelector("#sltGenre").value,
        document.querySelector("#txtPhoto").value,
        document.querySelector("#txtDescription").value,
        document.querySelector("#txtVideo").value)
    // Prevenção da submissão do formulário
    event.preventDefault()
})