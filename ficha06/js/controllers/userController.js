import User from "../models/userModel.js"

// Define um array para guardar os objetos User
export let users = []
// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente
if (localStorage.users) {
    users = JSON.parse(localStorage.users)
} else {
    const user1 = new User("Ricardo", "12345")
    const user2 = new User("Maria", "54321")
    const user3 = new User("Pedro", "15243")
    users.push(user1, user2, user3)
    localStorage.setItem("users", JSON.stringify(users))
}

/**
 * Função que autentica um utilizador (atualização de chava na SessionStorage)
 * @param {string} txtUsername Nome do utilizador
 * @param {string} txtPassword Password do utilizador
 * @returns true se credenciais existem e false, caso contrário
 */
export function login(txtUsername, txtPassword) {
    let existUser = false
    for (const user of users) {
        if (user.username === txtUsername && user.password === txtPassword) {
            sessionStorage.setItem("loggedUser", txtUsername)
            existUser = true
        }
    }
    return existUser
}

/**
 * Função de logout (remoção de chave da sessionStorage)
 */
export function logout() {
    sessionStorage.removeItem("loggedUser")
}

/**
 * Função que regista um utilizador (atualização de chava na SessionStorage)
 * @param {string} txtUsername Nome do utilizador
 * @param {string} txtPassword Password do utilizador
 * @returns true se registo efetuado com sucesso e false, caso contrário
 */
export function register(txtUsername, txtPassword) {
    let existUser = false
    for (const user of users) {
        if (user.username === txtUsername && user.password === txtPassword) {
            existUser = true
        }
    }
    if (!existUser) {
        users.push(new User(txtUsername, txtPassword))
        localStorage.setItem("users", JSON.stringify(users))
        sessionStorage.setItem("loggedUser", txtUsername)
        return true
    }
    return false
}