//Toogle function - 2funcs
let toggle_btn  = document.getElementById("toggled");
let no_toggle_btn = document.getElementById("no-toggled");
let header = document.getElementById("header")

toggle_btn.onclick = ()=> {
    header.classList.replace("toggled","no-toggled")
    
}

no_toggle_btn.onclick = ()=> {
    header.classList.replace("no-toggled","toggled")   
}

//Formation Panel - 2func
if (document.getElementById("btn-indus") != undefined) {
    let btn_indus = document.getElementById("btn-indus")
    let btn_terti = document.getElementById("btn-terti")
    let indus = document.getElementById("indus")
    let terti = document.getElementById("terti")
    btn_terti.onclick = ()=>{
        if (btn_terti.classList.contains("bg-white")) {
            btn_terti.classList.replace("bg-white", "bg-lgrey")
            btn_terti.classList.remove("bottom-shadow")
            btn_indus.classList.replace("bg-lgrey", "bg-white")
            btn_indus.classList.add("bottom-shadow")
            indus.classList.add("hidden")
            terti.classList.remove("hidden")
        }
    }
    btn_indus.onclick = ()=>{
        if (btn_indus.classList.contains("bg-white")) {
            btn_indus.classList.replace("bg-white", "bg-lgrey")
            btn_indus.classList.remove("bottom-shadow")
            btn_terti.classList.replace("bg-lgrey", "bg-white")
            btn_terti.classList.add("bottom-shadow")
            terti.classList.add("hidden")
            indus.classList.remove("hidden")
        }
    }
}

//login/sign_in alternate form - 4funcs
if (document.getElementById("form1") != undefined) {
    let form_title = document.getElementById("form_title")
    let login_form = document.getElementById("form1")
    let btn_to_sign_in = document.getElementById("to_form2")

    let sign_in_form = document.getElementById("form2")
    let btn_to_login = document.getElementById("to_form1")

    let sign_in = document.getElementById("sign_in")
    let login = document.getElementById("login")

    let f_nom = document.getElementById("nom")
    let f_prenom = document.getElementById("prenom")
    let f_email = document.getElementById("s_email")
    let f_mdp = document.getElementById("s_mdp")

    let form = document.getElementById("sign_in_form")

    btn_to_sign_in.onclick = () => {
        login_form.classList.remove("selected")
        sign_in_form.classList.add("selected")
        form_title.textContent = "S'inscrire"
    }
    
    btn_to_login.onclick = () => {
        sign_in_form.classList.remove("selected")
        login_form.classList.add("selected")
        form_title.textContent = "Se connecter"
    }

    form.onsubmit = ()=>{
        alert("Erreur d'inscription")
    }

    login.onclick = () => {
        alert("Erreur de connexion")
    }
}
