/**
 * Classe que modela um Dado
 */
class Dice {
    constructor() {
        this.quantity = 6
    }

    /**
     * Propriedade faceValue
     */
    get faceValue() {
        return this._faceValue
    }

    set faceValue(newValue) {
        this._faceValue = newValue
    }

    /**
     * Devolve o nº de faces do dado
     */
    getQuantityFaces() {
        return this.quantity
    }

    /**
     * Lança o dado e atibui o valor obtido à propriedade faceValue
     */
    roll() {
        const randomValue = Math.floor(Math.random() * this.quantity) + 1
        this.faceValue = randomValue
    }
}




// Definir a tabela de frequência
const frequencyTable = [0,0,0,0,0,0]

// Lançar o dado 100 vezes
for (let i = 0; i < 100; i++) {
    const dice = new Dice()
    dice.roll()
    const currentValue = dice.faceValue
    frequencyTable[currentValue - 1] += 1
}

// Mostrar o resultado na consola (debugging)
console.table(frequencyTable)

const table = document.querySelector("table")

table.innerHTML += `
        <tr>
            <td>Frequência</td>
            <td>${frequencyTable[0]}</td>
            <td>${frequencyTable[1]}</td>
            <td>${frequencyTable[2]}</td>
            <td>${frequencyTable[3]}</td>
            <td>${frequencyTable[4]}</td>
            <td>${frequencyTable[5]}</td>
        </tr>
    `





