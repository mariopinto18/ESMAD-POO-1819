import {
    login,
    logout,
    register
} from "../controllers/userController.js"

// Atualização da barra de navegação
updateNavbar()

// Mapeamento dos cliques nos botões de Login/Register/Logout
if (sessionStorage.getItem("loggedUser")) {
    // Apresentação do nome do utilizador autenticado
    document.querySelector("#loggedUser").innerHTML = `Olá <a href="#">${sessionStorage.getItem("loggedUser")}</a>`
    // Clique no botão de logout
    document.querySelector("#btnLogout").addEventListener("click", function () {
        logout()
        location.reload()
    })
} else {
    // Clique no botão de Login
    document.querySelector("#frmLogin").addEventListener("submit", function (event) {
        // Invocação da função importada para autenticação de utilizador
        const loginResult = login(
            document.querySelector("#txtUsername").value,
            document.querySelector("#txtPassword").value)

        if (loginResult == true) {
            // Fecho da janela modal
            $('#mdlLogin').modal('hide')
            // Apresentação do nome do utilizador autenticado
            document.querySelector("#loggedUser").innerHTML = `Olá <a href="#">${sessionStorage.getItem("loggedUser")}</a>`
        } else {
            alert("Credenciais inválidas!")
        }
        // Prevenção da submissão do formulário
        event.preventDefault()
    })

    // Clique no botão de Register
    document.querySelector("#frmRegister").addEventListener("submit", function (event) {

        const pass1 = document.querySelector("#txtPasswordRegister").value
        const pass2 = document.querySelector("#txtPasswordRegister2").value
        if (pass1 !== pass2) {
            alert("Passwords should be equal")
        } else {
            // Invocação da função importada para registo de utilizador
            const registerResult = register(
                document.querySelector("#txtUsernameRegister").value,
                document.querySelector("#txtPasswordRegister").value)
            if (registerResult == true) {
                // Fecho da janela modal
                $('#mdlRegister').modal('hide')
                // Apresentação do nome do utilizador autenticado
                document.querySelector("#loggedUser").innerHTML = `Olá <a href="#">${sessionStorage.getItem("loggedUser")}</a>`
            } else {
                alert("Credenciais já existentes!")
            }
        }
        // Prevenção da submissão do formulário
        event.preventDefault()
    })
}

/**
 * Função para atualizar a barra de navageação tendo em conta se existe (ou não) algum utilizador autenticado
 */
function updateNavbar() {
    const nav = document.querySelector("nav")
    let result = ""
    result =
        `
        <a class="navbar-brand" href="../index.html">MyMusic</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">            
            `
    if (sessionStorage.getItem("loggedUser")) {
        result += `<ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a id="addNewBand" class="nav-link" href="html/newBand.html">Add band</a>
                </li>
                </ul>
                <!-- Descrição do utilizador autenticado -->
                <div id="authButtons">
                    <a id="loggedUser" href=""></a>
                    <button id="btnLogout" class="btn btn-outline-success my-2 my-sm-0">
                        Logout
                    </button>
                </div>
            `
    } else {
        result += `  
                <ul class="navbar-nav mr-auto"></ul>
                <!-- Botão para ativar a janela modal de login -->
                <div id="authButtons">                    
                    <button class="btn btn-outline-success m-2 my-sm-0" data-toggle="modal" data-target="#mdlLogin">
                        Login
                    </button>
                    <button class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#mdlRegister">
                        Register
                    </button>                
                </div>            
            `
    }
    result += `</div>`
    // Injeção do conteúdo na barra de navegação
    nav.innerHTML = result
}