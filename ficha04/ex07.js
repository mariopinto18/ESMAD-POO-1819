// Definição do array que vai guardar todos os objetos Movie
const movies = []

//Definir o atributo max da caixa de texto do ano com o ano atual
document.querySelector("#txtYear").max = new Date().getFullYear()

const myForm = document.querySelector("form")
myForm.addEventListener("submit", function (event) {
    // 1. Obter todos os valores dos elementos do formulário
    const newTitle = document.querySelector("#txtTitle").value
    const newGenre = document.querySelector("#sltGenre").value
    const newYear = document.querySelector("#txtTitle").value
    const newCover = document.querySelector("#txtCover").value
    const newTrailer = document.querySelector("#txtTrailer").value

    // 2. Verificar se o título do filme inserido já existe no array
    const result = isMovie(newTitle)

    if (result === true) {
        alert("Filme existente!")
    } else {
        // 3. Criar objeto Movie
        const newMovie = {
            title: newTitle,
            genre: newGenre,
            year: newYear,
            cover: newCover,
            trailer: newTrailer
        }

        // 4. Adicionar o o objeto no array
        movies.push(newMovie)
        //ou movies[movies.length] = newMovie

        // 5. Renderizar a tabela com todos os dados do array
        renderTable()
    }

    // 6. Prevenir que o form seja submetido ao servidor
    event.preventDefault()
})

// Função para verificar se um título existe no array
function isMovie(newTitle) {
    for (const movie of movies) {
        if (movie.title === newTitle) {
            return true
        }
    }
    return false
}

// Função para renderizar uma tabela
function renderTable() {
    const table = document.querySelector("table")

    // Injetar o cabeçalho na tabela
    table.innerHTML = `
        <tr>
            <th>TITULO</th><th>GÉNERO</th>
        </tr>
    `
    // Percorrer todo o array e injetar cada objeto movie como uma nova linha da tabela
    for (const movie of movies) {
        table.innerHTML += `
            <tr>
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>
                    <button onclick="showCoverWindow('${movie.cover}')">VER CAPA</button>
                    <button onclick="showTrailerWindow('${movie.trailer}')">VER TRAILLER</button>
                    <button onclick="removeMovie('${movie.title}')">REMOVER</button>
                </td>
            </tr>
        `
    }
}


// Função para mostrar a capa do filme numa janela modal
function showCoverWindow(cover) {
    const dlgCover = document.querySelector("#dlgCover")
    const imgCover = document.querySelector("#imgCover")
    imgCover.src = cover
    dlgCover.showModal()
}

// Função para fechar a janela modal da capa do filme
const btnCloseCoverDialog = document.querySelector("#btnCloseCoverDialog")
btnCloseCoverDialog.addEventListener("click", function () {
    document.querySelector("#dlgCover").close()
})

// Função para mostrar o trailer do filme numa janela modal
function showTrailerWindow(trailer) {
    const dlgTrailer = document.querySelector("#dlgTrailer")
    const ifrTrailer = document.querySelector("#ifrTrailer")
    ifrTrailer.src = trailer + "?autoplay=1"
    dlgTrailer.showModal()
}

// Função para fechar a janela modal da capa do filme
const btnCloseTrailerDialog = document.querySelector("#btnCloseTrailerDialog")
btnCloseTrailerDialog.addEventListener("click", function () {
    document.querySelector("#dlgTrailer").close()
})

// Função para remover um objeto movi do array
function removeMovie(title) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title === title) {
            // Uso do método splice (existem muitas outras alternativas)
            movies.splice(i, 1);
        }
    }
    renderTable()
}