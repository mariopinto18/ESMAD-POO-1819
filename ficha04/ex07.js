// Array de filmes
const movies = []



const frmMovie = document.querySelector("form")
// alterar o atributo max da caixa de texto do ano
document.querySelector("#txtMovieYear").max = new Date().getFullYear()


frmMovie.addEventListener("submit", function(event) {
    // Obter os valores dos elementos do formulário
    const txtMovieTitle = document.querySelector("#txtMovieTitle").value
    const txtMovieYear = document.querySelector("#txtMovieYear").value
    const txtMovieGenre = document.querySelector("#txtMovieGenre").value
    const txtMovieCover = document.querySelector("#txtMovieCover").value
    const txtMovieTrailer = document.querySelector("#txtMovieTrailer").value

    // 1. Verificar se o titulo do filme ja existe no array
    
    if(isTitleAvailable(txtMovieTitle) === true) {
            // 2.1 Criar um objeto Movie
            const movie = {
                title: txtMovieTitle,
                year: txtMovieYear,
                genre: txtMovieGenre,
                cover: txtMovieCover,
                trailer: txtMovieTrailer
            }
            // 2.2 inserir o objeto Movie no array movies
            movies.push(movie)
            renderTable()
            console.table(movies)
    } else {
        alert("Titulo já existe!!!")
    }

    
    event.preventDefault()

})


// Funções auxiliares
function isTitleAvailable(txtMovieTitle) {
    for (const movie of movies) {
        if(movie.title.toLowerCase() === txtMovieTitle.toLowerCase()) {
            return false;
        }
    }
    return true;
}

// Preencher a tabela com o array movies
function renderTable() {
    // 1. Obter uma referenia à tabela
    const table = document.querySelector("table")
    // 2. Preencho o cabçalho
    table.innerHTML = `<tr>
        <th>Titulo</th>                
        <th>Género</th>
        <th>Opções</th>
    </tr>`
    // 3. Alimento a tabela com os dados do array
    for (const movie of movies) {
        table.innerHTML += `<tr>
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>
                <button onClick='showMovieCover("${movie.cover}")'>VER CAPA</button>
                <button>VER TRAILER</button>
                <button>REMOVER</button>
            </td>
        </tr>
        `
    }
}

function showMovieCover(txtMovieCover) {
    const dialog = document.querySelector("#dlgCover")
    const img = dialog.querySelector("img")
    img.src = txtMovieCover
    dialog.showModal();
}



