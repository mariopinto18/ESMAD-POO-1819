import {
    bands
} from "../models/main.js"

const myCatalog = document.querySelector("#myCatalog")
const btnFilter = document.querySelector("#btnFilter")

// Clique no botão de filtro
btnFilter.addEventListener("click", function () {
    const txtBand = document.querySelector("#txtBand").value
    const sltGenre = document.querySelector("#sltGenre").value
    // Chama a função responsável pela exibição do catálogo com os filtros respetivos
    renderCatalog(txtBand, sltGenre)
})

// Chamada da função responsável pela exibição do catálogo
// Por emissão, não passa qualquer filtro, ou seja, são exibidas todas as bandas 
renderCatalog()

/**
 * Função que exibe o catálogo mediante um conjunto de filtros opcionais
 * @param {string} filterName Filtro para o nome da banda
 * @param {string} filterGenre Filtro para o género de música tocado pela banda
 */
function renderCatalog(filterName = "", filterGenre = "") {
    let result = ""
    let i = 0
    for (const band of bands) {
        // Aplicação do filtro
        if ((filterName !== "" && !band.name.startsWith(filterName)) ||
            (filterGenre !== "" && band.genre !== filterGenre)
        ) {
            continue;
        }
        // Criação de linha
        if (i % 3 === 0) {
            result += `<div class="row">`
        }
        // Geração do card
        result += `
        <div class="col-sm-4">
            <div class="card">
                <img src="${band.photo}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${band.name}</h5>
                    <p class="card-text">${band.genre}</p>
                    <a href="#" class="btn btn-primary">Ver mais</a>
                    <a href="#" class="btn btn-danger">Remover</a>
                </div>
            </div>
        </div>
    `
        i++
        // Criação do fecho da linha
        if (i % 3 === 0) {
            result += `</div>`
        }
    }
    // Atribuição de todos os cards gerados ao elemento com id myCatalog
    myCatalog.innerHTML = result
}