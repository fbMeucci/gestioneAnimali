const nome = document.querySelector("#nome")
const tipo = document.querySelector("#tipo")
const castrato = document.querySelector("#castrato")
const eta = document.querySelector("#eta")

const tbody = document.querySelector("#tbody")
const divButtons = document.querySelector("#divButtons")

const btnAdd = document.querySelector("#btnAdd");
const animali = []

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
        id: animali.length + 1,
        nome : nome.value,
        tipo: tipo.value,
        castrato: ( parseInt(castrato.value) ) ? 'SI' : 'NO',
        eta: parseInt(eta.value)
    }
    animali.push(animale)
    render(animali)
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
    
}

function modifica(id) {
    
}


