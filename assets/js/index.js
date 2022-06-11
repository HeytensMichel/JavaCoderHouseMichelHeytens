const patientList = ["Marcos Zabala", "Nicolas Hernandez", "Beatriz Girafales"]
let turns = 10
let nameEntry = prompt('Ingrese su nombre y apellido'); {
    do {
        patientList.push(nameEntry.toLowerCase())
    } while (patientList.lenght <= turns)
}

let ageEntry = parseInt(prompt('Ingrese su edad'));
let motiveEntry = parseInt(prompt(`Indique con el numero correspondiente si tuvo alguno de los siguientes: 
1-Dolor de cabeza 
2-Movimientos anormales en extremidades
3-Traumatismo en la cabeza
4-Perdida del conocimiento
5-Pérdida de fuerzas de una mitad del cuerpo
0-Ninguno`));
let selection;
let simptoms = simpDesc();
let hospitalSelection = parseInt(prompt('Seleccione su lugar de consulta: 1- Hospital Español 2- Hospital de clinicas.'))

function name() {
    console.log('Nombre del paciente: ' + nameEntry.toLowerCase())
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
    } console.log("Pacientes registrados hasta el momento: "+ patientList)
}

function triage() {
    switch (motiveEntry) {
        case 1:
            motiveEntry = "1";
            console.log("El paciente ha indicado dolores de cabeza")
            console.log("Descripcion de sintomatologia: " + simptoms)
            break;
        case 2:
            motiveEntry = "2";
            console.log("El paciente ha indicado movimientos anormales en extremidades")
            console.log("Descripcion de sintomatologia: " + simptoms)
            break;
        case 3:
            motiveEntry = "3";
            console.log("El paciente ha indicado traumatismo en la cabeza")
            console.log("Descripcion de sintomatologia: " + simptoms)
            alert('Es recomedable que asista a un centro de salud previo a su visita.')
            break;
        case 4:
            motiveEntry = "4";
            console.log("El paciente ha indicado perdida del conocimiento")
            console.log("Descripcion de sintomatologia: " + simptoms)
            alert('Se exhorta a asistir a un centro de salud a la brevedad previo a su consulta')
            break;
        case 5:
            motiveEntry = "5";
            console.log("El paciente ha indicado perdida de fuerza en un hemisferio")
            console.log("Descripcion de sintomatologia: " + simptoms)
            alert('Asistir inmediatamente a un centro de salud. La Dra. Beltrame sera informada de su situacion.')
            break;
        case 6:
            motiveEntry = "0";
            console.log("El paciente no ha indicado sintomas.")
            alert('Su cita ha sido confirmada con exito')
            break;
    }
}

function simpDesc() {
    return prompt('De ser necesario, escriba brevemente su sintomatologia');
}

class Doctor {
    constructor(nombre, especialidad, consultorio) {
        this.name = nombre;
        this.especialty = especialidad;
        this.place = consultorio;
    }
    hablar() {
        console.log("Hola soy "+ this.name)
}
}
const doctor1 = new Doctor("Beltrame Valentina", "Neurologia", "Hospital de Clinicas")
const doctor2 = new Doctor("Beltrame Pablo", "Neurologia", "Hospital Español")

function hospSelect() {
    if (hospitalSelection === 1) {
        console.log('Usted sera atendido en: ' + doctor2.place + ' por: ' + doctor2.name + " TURNO: " + (patientList.length))
    } else if (hospitalSelection === 2) {
        console.log('Usted sera atendido en: ' + doctor1.place + ' por: ' + doctor1.name + " TURNO: " + (patientList.length))
    } else { alert('Ingrese un dato valido') }
}

name()
age()
hospSelect()
appointmentDay()
appointmentTime()
triage()


