/**
 * Classe que modela uma banda de música
 */
export default class Band {
    constructor(name, genre, photo, desc, music) {
        this.name = name
        this.genre = genre
        this.photo = photo
        this.desc = desc
        this.music = music
    }
}