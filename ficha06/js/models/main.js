import User from "./user.js"
import Band from "./band.js"

// Define um arry para guarda os objetos User
export const users = []
// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente
if (localStorage.users) {
    users = JSON.parse(localStorage.users)
} else {
    const user1 = new User("Ricardo", "12345")
    const user2 = new User("Maria", "54321")
    const user3 = new User("Pedro", "15243")
    users.push(user1, user2, user3)
}

// Define um arry para guarda os objetos Band
export const bands = []

// Caso já exista uma chave bands na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos Band inseridos manualmente
if (localStorage.bands) {
    bands = JSON.parse(localStorage.bands)
} else {
    const band1 = new Band("Muse", "Pop-Rock", "http://www.planckmachine.com/wp-content/uploads/2016/09/hysteria-muse-meaning-song.jpg", "The best band ever", "xxx")
    const band2 = new Band("RadioHead", "Pop-Rock", "https://ep01.epimg.net/elpais/imagenes/2017/05/17/icon/1495017818_647155_1495125183_noticia_normal.jpg", "The best band ever", "xxx")
    const band3 = new Band("James", "Pop-Rock", "http://ksassets.timeincuk.net/wp/uploads/sites/55/2013/01/2012JamesBandPress181212-2.jpg", "The best band ever", "xxx")
    const band4 = new Band("Metallica", "Metal", "https://images.impresa.pt/blitz/2016-08-19-metallica.jpg/original/mw-860", "The best band ever", "xxx")
    bands.push(band1, band2, band3, band4)
}