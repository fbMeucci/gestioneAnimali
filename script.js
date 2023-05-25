const id = document.querySelector("#idAnimale")
const nome = document.querySelector("#nome")
const tipo = document.querySelector("#tipo")
const castrato = document.querySelector("#castrato")
const eta = document.querySelector("#eta")

const tbody = document.querySelector("#tbody")
const btnAdd = document.querySelector("#btnAdd");
const btnMod = document.querySelector("#btnMod");

const animali = []
let counter = 1

btnAdd.addEventListener('click', () => {
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
    // INSERISCI QUI IL CODICE
}

function modifica(id) {
    // INSERISCI QUI IL CODICE
    // Fai sparire i bottoni Elimina e Modifica
    // Mostra nei campi della form i dati selezionati da modificare
    // Fai apparire il bottone "Registra Modifica" accanto al  bottone "Aggiungi"
    // Metti nel campo nascosto idAnimale il valore dell'id selezionato
}

// Scrivi il codice del bottone RegistraModifica
btnMod.addEventListener('click', () => {
    // Controlla se i campi nome ed eta sono valorizzati
    // modifica l'array animali con i dati modificati usando il metodo map()
    // Fai apparire i bottoni Elimina e Modifica
    // Fai sparire il bottone "Registra Modifica"
})


