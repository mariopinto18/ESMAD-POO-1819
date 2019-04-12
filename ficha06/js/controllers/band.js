import {
    getCurrentBand
} from "../models/main.js"

const band = getCurrentBand()

document.querySelector("#bandName").innerHTML = band.name
document.querySelector("#bandGenre").innerHTML = band.genre
document.querySelector("#bandDescription").innerHTML = band.desc
document.querySelector("#bandPhoto").src = band.photo