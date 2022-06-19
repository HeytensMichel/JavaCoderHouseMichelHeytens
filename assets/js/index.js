let motiveEntry = parseInt(prompt(`Indique el nivel de triage del paciente: 
1-Sintomatologia sin urgencia.
2-Sintomatologia leve sin riesgo de vida.
3-Sintomatologia moderada con dolores o impedimentos.
4-Sintomatologia con dolores o impedimentos considerables.
5-Sintomatologia con riesgo de vida, dolores fuertes, impedimentos severos.
0-Ninguna sintomatologia`));

let triageLevel = motiveEntry;


class Patient {
    constructor(nombre, edad, patologias, medicacion, motivo, triage) {
        this.name = nombre;
        this.age = edad;
        this.pats = patologias;
        this.meds = medicacion;
        this.motive = motivo;
        this.triage = triage;
    }
}
//
const patient1 = new Patient("Marcos Zabala", "22", "Asma severa con internaciones", "Ventolin, Prednisona", "Falta de aire, tos, fiebre", "3",)
const patient2 = new Patient("Martina Zaldivar", "55", "Osteoporosis", "Tramadol", "Poca movilidad en piernas", "3")
const patient3 = new Patient(prompt("NOMBRE DEL PACIENTE"), prompt("EDAD DEL PACIENTE"), prompt("PATOLOGIAS PREVIAS"), prompt("MEDICACION RECETADA"), prompt("MOTIVO DE CONSULTA"), triageLevel,)
const patientList = [patient1, patient2,]
let turns = 10
let patEntry = patient3; {
    do {
        patientList.push(patient3)
    } while (patientList.length >= turns)
}

class Doctor {
    constructor(nombre, especialidad, consultorio) {
        this.name = nombre;
        this.especialty = especialidad;
        this.place = consultorio;
    }
}
const doctor1 = new Doctor("Beltrame Valentina", "Neurologia", "Hospital de Clinicas")
const doctor2 = new Doctor("Michel Heytens", "Emergencia", "Hospital Español")

function triage() {
    switch (motiveEntry) {
        case 1:
            motiveEntry = "1";
            console.log("El paciente " + patient3.name + " sera atendido en: " + doctor2.place + " por " + doctor2.name)
            console.log("Descripcion de sintomatologia: " + patient3.motive)
            let day = (prompt('¿Asistira el dia: Lunes, Martes o Sabado?'))
            console.log('Asistira el dia: ' + (day.toLowerCase() + " con el numero: " + (patientList.length)))
            if (patient3.age >= 18 && patient3.age <= 40) {
                console.log('Horario de atencion: 08:00am-12:00am')
            } else (console.log('Horario de atencion: 13:00pm-18-00pm'))
            break;
        case 2:
            motiveEntry = "2";
            console.log("El paciente " + patient3.name + " sera atendido en: " + doctor2.place + " por " + doctor2.name)
            console.log("Descripcion de sintomatologia: " + patient3.motive)
            let dayTwo = (prompt('¿Asistira el dia: Lunes, Martes o Sabado?'))
            console.log('Asistira el dia: ' + (dayTwo.toLowerCase() + " con el numero: " + (patientList.length)))
            if (patient3.age >= 18 && patient3.age <= 40) {
                console.log('Horario de atencion: 08:00am-12:00am')
            } else (console.log('Horario de atencion: 13:00pm-18-00pm'))
            break;
        case 3:
            motiveEntry = "3";
            console.log("El paciente " + patient3.name + " sera atendido en: " + doctor2.place + " por " + doctor2.name)
            console.log("Descripcion de sintomatologia: " + patient3.motive)
            let dayThree = (prompt('¿Asistira el dia: Lunes, Martes o Sabado?'))
            console.log('Asistira el dia: ' + (dayThree.toLowerCase() + " con el numero: " + (patientList.length)))
            if (patient3.age >= 18 && patient3.age <= 40) {
                console.log('Horario de atencion: 08:00am-12:00am')
            } else (console.log('Horario de atencion: 13:00pm-18-00pm'))
            break;
            break;
        case 4:
            motiveEntry = "4";
            console.log("El paciente " + patient3.name + " sera atendido en: " + doctor1.place + " por " + doctor1.name)
            console.log("Descripcion de sintomatologia: " + patient3.motive)
            console.log("El paciente " + patient3.name + " debe ser trasladado a emergencia y ser atendido con el numero: " + (patientList.length))
            break;
        case 5:
            motiveEntry = "5";
            console.log("El paciente " + patient3.name + " sera atendido en: " + doctor1.place + " por " + doctor1.name)
            console.log("Descripcion de sintomatologia: " + patient3.motive)
            console.log("El paciente " + patient3.name + " debe ser trasladado a emergencia para ser atendido de manera urgente, se ha comunicado a la emergencista " + doctor1.name)
            break;
        case 6:
            motiveEntry = "0";
            console.log("El paciente " + patient3.name + " sera atendido en: " + doctor2.place + " por " + doctor2.name)
            console.log("Descripcion de sintomatologia: " + patient3.motive)
            let dayFour = (prompt('¿Asistira el dia: Lunes, Martes o Sabado?'))
            console.log('Asistira el dia: ' + (dayFour.toLowerCase() + " con el numero: " + (patientList.length)))
            if (patient3.age >= 18 && patient3.age <= 40) {
                console.log('Horario de atencion: 08:00am-12:00am')
            } else (console.log('Horario de atencion: 13:00pm-18-00pm'))
            break;
    }
}

triage()


function patientHistory() {

    let historySearch = prompt("Busqueda por nombre: ");

    let history = (patientList.find((p) => p.name == historySearch))

    console.log(history)

}

patientHistory()

function patientTriage() {

    let triageSearch = +prompt("Busqueda por triage: ");

    let history = (patientList.filter((p) => p.triage == triageSearch))

    if (history.length == 0) {

        console.log("no se encontraron resultados con triage de ese nivel")

    } else {

        console.log(history)

    }

}

patientTriage()