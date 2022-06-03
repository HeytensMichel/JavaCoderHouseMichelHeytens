let nameEntry = prompt('Ingrese su nombre');
let ageEntry = parseInt(prompt('Ingrese su edad'));





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

let motiveEntry = parseInt(prompt(`Indique con el numero correspondiente si tuvo alguno de los siguientes: 
1-Dolor de cabeza 
2-Movimientos anormales en extremidades
3-Traumatismo en la cabeza
4-Perdida del conocimiento
5-Pérdida de fuerzas de una mitad del cuerpo
6-Ninguno`))

function triage () { 
    switch (motiveEntry) {
        case 1:
            motiveEntry = "1";
            console.log("El paciente ha indicado dolores de cabeza")
            alert('Su cita ha sido confirmada con exito')
            break;
            case 2:
            motiveEntry = "2";
            console.log("El paciente ha indicado movimientos anormales en extremidades")
            alert('Su cita ha sido confirmada con exito')
            break;
            case 3:
            motiveEntry = "3";
            console.log("El paciente ha indicado traumatismo en la cabeza")
            alert('Su cita ha sido confirmada con exito, es recomedable que asista a un centro de salud previo a su visita.')
            break;
            case 4:
            motiveEntry = "4";
            console.log("El paciente ha indicado perdida del conocimiento")
            alert('Su cita ha sido confirmada con exito, se exhorta a asistir a un centro de salud a la brevedad previo a su consulta')
            break;
            case 5:
            motiveEntry = "5";
            console.log("El paciente ha indicado perdida de fuerza en un hemisferio")
            alert('Asistir inmediatamente a un centro de salud. La Dra. Beltrame sera informada de su situacion.')
            break;
            case 6:
            motiveEntry = "6";
            console.log("El paciente no ha indicado sintomas.")
            alert('Su cita ha sido confirmada con exito')
            break;
    } 
        
}
name()
age()
appointmentTime()
appointmentDay()
triage()
