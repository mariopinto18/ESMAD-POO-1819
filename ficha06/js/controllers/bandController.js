import Band from "../models/bandModel.js"

// Define um array para guardar os objetos Band
export let bands = []

// Caso já exista uma chave bands na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos Band inseridos manualmente
if (localStorage.bands) {
    bands = JSON.parse(localStorage.bands)
} else {
    // Só vai entrar aqui a primeira vez
    const band1 = new Band("Muse", "Pop-Rock", "http://www.planckmachine.com/wp-content/uploads/2016/09/hysteria-muse-meaning-song.jpg", "The best band ever", "xxx")
    const band2 = new Band("RadioHead", "Pop-Rock", "https://ep01.epimg.net/elpais/imagenes/2017/05/17/icon/1495017818_647155_1495125183_noticia_normal.jpg", "The best band ever", "xxx")
    const band3 = new Band("James", "Pop-Rock", "http://ksassets.timeincuk.net/wp/uploads/sites/55/2013/01/2012JamesBandPress181212-2.jpg", "The best band ever", "xxx")
    const band4 = new Band("Metallica", "Metal", "https://images.impresa.pt/blitz/2016-08-19-metallica.jpg/original/mw-860", "The best band ever", "xxx")
    bands.push(band1, band2, band3, band4)
    localStorage.setItem("bands", JSON.stringify(bands))
}

/**
 * Função que recebe todos os detalhes de uma banda e adiciona-a
 * @param {string} txtName Nome da banda
 * @param {string} sltGenre género de música que a banda toca
 * @param {string} txtDescription descrição da banda
 * @param {string} txtPhoto link para foto da banda
 * @param {string} txtVideo link para veideoclip da banda
 */
export function addBand(txtName, sltGenre, txtPhoto, txtDescription, txtVideo) {
    let existBand = false
    for (const band of bands) {
        if (band.name === txtName) {
            existBand = true
        }
    }
    if (!existBand) {
        bands.push(new Band(txtName, sltGenre, txtPhoto, txtDescription, txtVideo))
        localStorage.setItem("bands", JSON.stringify(bands))
        alert(`Banda ${txtName} adicionada!`)
        // Redirecionamento do fluxo para a página principal
        location.href = "/ficha06/index.html"
    } else {
        alert(`Banda ${txtName} já existe!`)
    }
}

/**
 * Função que recebe o nome de uma banda e elimina a banda respetiva
 * @param {string} txtName Nome da banda
 */
export function removeBand(txtName) {
    let removeBand = confirm(`Deseja mesmo remover a banda ${txtName}?`)
    if (removeBand) {
        for (let i = 0; i < bands.length; i++) {
            if (bands[i].name === txtName) {
                bands.splice(i, 1)
            }
        }
        localStorage.setItem("bands", JSON.stringify(bands))
        location.reload()
    }
}

/**
 * Função que recebe o nome de uma banda e define-a como a banda atual (a ser exibida)
 * @param {string} txtName Nome da banda
 */
export function setCurrentBand(txtName) {
    localStorage.setItem("band", txtName)
    location.href = "html/band.html"
}

/**
 * Função que recebe o nome de uma banda e devolve o objeto Band associado
 * @param {string} txtName Nome da banda
 * @returns {object} o objeto Band
 */
export function getCurrentBand() {
    const band = localStorage.getItem("band")
    for (let i = 0; i < bands.length; i++) {
        if (bands[i].name === band) {
            return bands[i]
        }
    }
}

/**
 * Função que ordena o array de bandas pelo nomedas bandas e guarda o array ordenado na LocalStorage
 */
export function sortBands() {
    bands.sort(Band.compare)
    localStorage.setItem("bands", JSON.stringify(bands))
}