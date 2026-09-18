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

//popup 2 funcs
function closepopup(element) {
    document.querySelector(element).style.display = "none"
}

function openpopup(element) {
    document.querySelector(element).style.display = "flex"
}

//increment 2 func
function increment(element,inc,once) {
    if (document.querySelector(element) != undefined) {
        document.querySelector(element).textContent = parseInt(document.querySelector(element).textContent) + inc
    if (once[0]) {
        document.querySelector(element).setAttribute("id", "")
        document.querySelector(once[1]).classList.add("p-0")
        document.querySelector(once[1]).classList.add("raduis-100")
        document.querySelector(once[1]).classList.add("bg-blue")
    }
    }
}

//verification commentaire 2func
if (document.querySelector('#objet') != undefined) {
    ['#objet', '#mes'].forEach(element => {
        document.querySelector(element).onchange = () => {
            checkComment(['#objet', '#mes'],'.danger','.success','#submit')
        }
    })
}

function checkComment(toverify,ondanger,onsuccess,sendbtn) {
    let success = true
    let found = []
    let btn = document.querySelector(sendbtn)
    const grosMots = [
        "putain", "merde", "con", "connard", "salope", "pute", "enculé", 
        "bite", "couille", "cul", "foutre", "baise", "enfoiré", "bordel", 
        "salaud", "niquer", "connasse", "bâtard", "chier", "branler"
    ];
    toverify.forEach(element => {
        let el = document.querySelector(element)
        grosMots.forEach( (gm) => {
            if (el.value.includes(gm)) {
                success = false
                if (!found.includes(gm)) {
                    found.push(gm)
                } 
            }
        })
    });
    if (success) {
        document.querySelector(onsuccess).style.display = "initial"
        document.querySelector(ondanger).style.display = "none"
        btn.style.display = "initial"
    }else {
        document.querySelector(onsuccess).style.display = "none"
        document.querySelector(ondanger).style.display = "initial"
        document.querySelector(ondanger).innerHTML = 'Commentaire inapproprié, gros mots trouvés: <br> <ul>'
        for (const fgm of found) {
            document.querySelector(ondanger).innerHTML += '<li>'+fgm+'</li>'  
        }
        document.querySelector(ondanger).innerHTML += '</ul>'
        btn.style.display = "none";
    }
}

//pseudo commande 3func
let data = []
function command(lib, price, time) {
    let commanded = false
    data.forEach((dt) => {
        if (dt[0] == lib) {
            commanded = true    
        }    
    })

    if (commanded) {
        alert('Vous avez déja commandé cet article')    
    }else{
        alert("L'article a été ajouté au panier avec succès")
        data.push([lib,price,time])
        tableUpd()
    }
}

let totprice = 0
let tottime = 0
function tableUpd () {
    totprice = 0
    tottime = 0
    let table = document.querySelector('#table')
    table.innerHTML = `<thead><th>Formation</th><th>Prix</th><th>Durée</th></thead><tbody>`
    for (const td of data) {
        table.innerHTML += `<tr><td>${td[0]}</td><td>${td[1]}fcfa</td><td>${td[2]}jours</td></tr>`
        totprice += td[1]
        tottime += td[2]
    }
    table.innerHTML += `</tbody><tfoot><td class="bg-orange">Total</td><td>${totprice}fcfa</td><td>${tottime}jours</td></tfoot>`
}

function buy() {
    if (data.length == 0) {
        alert("Il n'ya rien à payer")
    }else {
        data = []
        alert("Achat effectué avec succès. Montant total: "+totprice+" fcfa")
        tableUpd()
    }
}

function cancel() {
    if (data.length == 0) {
        alert("Le panier est déja vide")
    }else {
        data = []
        tableUpd()
    }
}

//search 1 func
let input = document.querySelector(".input")
input.oninput = () => {
    let titles = document.querySelectorAll(".title")
    titles.forEach((title) => {
        if (!title.textContent.toLowerCase().includes(input.value.toLowerCase())) {
            title.parentNode.style.display = "none"
            if (input.value == "") {
                title.parentNode.style.display = "initial"
            }
        }else{
            title.parentNode.style.display = "initial"
        }
    })
}

//19 functions