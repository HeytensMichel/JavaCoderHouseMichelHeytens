function name () {
    let nameEntry = prompt('Ingrese su nombre')
    console.log ((nameEntry.toLowerCase()))
}

function age () {
    let ageEntry = parseInt(prompt('Ingrese su edad'));
    if (ageEntry <= 17) { 
        alert('Usted debe acudir a un Neurologo/a pediatrico')
    } else (console.log(ageEntry))
}

name()
age()