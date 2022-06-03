let nameEntry = prompt('Ingrese su nombre');
let ageEntry = parseInt(prompt('Ingrese su edad'));
let appointmentDayMinusForty
let appointmentDayPlusForty




function name() {
    console.log(('Nombre del paciente: ' + nameEntry.toLowerCase()))
}

function age() {
    if (ageEntry <= 17) {
        alert('Usted debe acudir a un especialista pediatrico')
    } else (console.log('Edad del paciente: ' + ageEntry))
}

function appointmentTime() {
    if (ageEntry >= 18 && ageEntry <= 40) {
        console.log('Horario de atencion: 08:00am-12:00am')
    } else (console.log('Horario de atencion: 13:00pm-18-00pm'))
}

function appointmentDay() {
    if (ageEntry <= 40 && ageEntry >= 18) {
        let selection = (prompt('¿Asistira el dia: Lunes, Martes o Sabado?'))
        console.log('Asistira el dia: ' + (selection.toLowerCase()))
    } else {
        let selection = prompt('¿Asistira el dia: Miercoles, Jueves o Viernes?')
        console.log('Asistira el dia: ' + (selection.toLowerCase()))
}
}

name()
age()
appointmentTime()
appointmentDay()