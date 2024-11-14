/*e tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota 
máxima es 20, y que los estudiantes aprueban con un mínimo de 10. 
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que 
retorne los estudiantes de un semestre dado. 
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}

Función: estudiantesSemestre. 
Parámetros: estudiantes (array de objetos estudiante), semestre (un número). 
Retorno: array de objetos estudiante que pertenecen al semestre indicado.*/

let estudianteSemestre = (estudiantes, semestre) => {
    let estudiante = []
    estudiantes.forEach((estudiantes) => {
    if(estudiantes.semestre == semestre)
        estudiante.push({nombre: estudiantes.nombre, nota: estudiantes.nota});
    });
    return estudiante;
} 


let estudiantes = [
    {nombre: "jose", semestre: 5, nota: 18},
    {nombre: "ana",  semestre: 3, nota: 13},
    {nombre: "maria",  semestre: 5, nota: 15},
    {nombre: "jorge",  semestre: 1, nota: 20}]

let salida = document.getElementById("salida");

salida.innerHTML = `Los estudiantes del semestre 5 son:`;

salida.innerHTML += `<br>`+JSON.stringify(estudianteSemestre(estudiantes, 5));

salida.innerHTML += `<br><br> Los estudiantes del semestre 3 son:`;
salida.innerHTML += `<br>`+JSON.stringify(estudianteSemestre(estudiantes, 3));

salida.innerHTML += `<br><br> Los estudiantes del semestre 1 son:`;
salida.innerHTML += `<br>`+JSON.stringify(estudianteSemestre(estudiantes, 1));