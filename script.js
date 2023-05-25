const idA = document.querySelector("#idAnimale")
const nome = document.querySelector("#nome")
const tipo = document.querySelector("#tipo")
const castrato = document.querySelector("#castrato")
const eta = document.querySelector("#eta")

const tbody = document.querySelector("#tbody")
const btnAdd = document.querySelector("#btnAdd");
const btnMod = document.querySelector("#btnMod");

let animali = []
let counter = 1

btnAdd.addEventListener('click', () => {
    if ( btnAdd.innerHTML == "Annulla Modifica") {
        btnAdd.innerHTML = "Aggiungi"
        btnMod.style.display = "none"
        nome.value = ""
        eta.value = ""
        let buttons = tbody.querySelectorAll('button')
        buttons.forEach( btn => btn.style.display = "inline" )        
        return 
    }
    if ( nome.value.trim().length < 3 ) {
        alert("Inserire il nome dell'animale")
        return false;
    }
    if ( eta.value.trim().length == 0 ) {
        alert("Inserire l'età dell'animale")
        return false;
    }
    const animale = {   
        id: counter,
        nome : nome.value,
        tipo: tipo.value,
        castrato: castrato.value,
        eta: parseInt(eta.value)
    }
    animali.push(animale)
    render(animali)
    counter += 1
    nome.value = ""
    eta.value = ""
})

function render() {
    let content = ""
    animali.map( animale => {
        content += "<tr>"
        Object.keys(animale).map( (item, index) => {
            if ( index > 0 )
                content += `<td scope="col">${animale[item]}</td>`
        }) 
        // BOTTONI 
        content += `<td scope="col">
                <button class="btn-outline-danger" onclick="elimina(${animale.id})" >Elimina</button>
                <button class="btn-outline-danger" onclick="modifica(${animale.id})">Modifica</button>
                </td>`
        content += "</tr>"
    })
    tbody.innerHTML = content
}


function elimina(id) {
    // INSERISCI QUI IL CODICE usando il metodo filter
    // filtro l'array animali togliendo l'animale da cancellare
    // renderizzo l'array
    animali = animali.filter( animale => animale.id != id )
    render()
}

function modifica(id) {
    let animale = animali.find( animale => animale.id == id )
    // Mostra nei campi della form i dati selezionati da modificare
    idA.value = animale.id
    nome.value = animale.nome
    tipo.value = animale.tipo
    castrato.value = animale.castrato
    eta.value = animale.eta
    btnMod.style.display = "inline"
    btnAdd.innerHTML ="Annulla Modifica"
    // INSERISCI QUI IL CODICE
    // Fai sparire i bottoni Elimina e Modifica

    let buttons = tbody.querySelectorAll('button')
    buttons.forEach( btn => btn.style.display = "none" )


    // Fai apparire il bottone "Registra Modifica" accanto al  bottone "Aggiungi"
    // Metti nel campo nascosto idAnimale il valore dell'id selezionato
}

// Scrivi il codice del bottone RegistraModifica
btnMod.addEventListener('click', () => {
    // Controlla se i campi nome ed eta sono valorizzati
    if ( nome.value.trim().length < 3 ) {
        alert("Inserire il nome dell'animale")
        return false;
    }
    if ( eta.value.trim().length == 0 ) {
        alert("Inserire l'età dell'animale")
        return false;
    }
    animali.map ( animale => {
        if ( animale.id == idA.value ) {
            animale.id = idA.value 
            animale.nome = nome.value
            animale.tipo = tipo.value 
            animale.castrato = castrato.value 
            animale.eta = eta.value  
        }
    })
    render()
    btnMod.style.display = "none"
    btnAdd.innerHTML = "Aggiungi"
    let buttons = tbody.querySelectorAll('button')
    buttons.forEach( btn => btn.style.display = "inline" )        

})


