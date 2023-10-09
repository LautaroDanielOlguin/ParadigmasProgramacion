type Tarea = {
    nombre: String;
    estado: String;
    descripcion: String;
    vencimiento: String;
    creacion: String;
    edicion: String;
    dificultad: String;
};
let datosTarea: Tarea = {
    nombre: 'String',
    estado: 'String',
    descripcion: 'String',
    vencimiento: "String",
    creacion: 'Stri',
    edicion: 'str',
    dificultad: 'String'
};

let op: Number;
let c:Number = 0;
let listaTareas:Tarea []=[];
const date=new Date();
do{
    console.clear();
    console.log("Lista de Tareas\n[1] Agregar una nueva tarea\n[2] Buscar una tarea\n[3] Ver una tarea\n[4] Salir");
    op = Number(prompt("Ingrese una opcion: "));
    switch(op){
        case 1:
            console.clear();
            console.log("\n 1. Agregar una nueva tarea");
            /*datosTarea={
                nombre:String(prompt("Ingrese el titulo de la tarea: ")),
                estado:String(prompt("Ingrese el estado de la tarea: ")),
                descripcion:String(prompt("Ingrese la descripcion de la tarea: ")),
                vencimiento:String(prompt("Ingrese la fecha de vencimiento formato aaaa/mm/dd: ")),
                creacion:date.toLocaleDateString(),
                edicion:date.toLocaleDateString(),
                dificultad:String(prompt("Ingrese la dificultad: "))
            }
            listaTareas.push(datosTarea);
            console.log(datosTarea.nombre);*/
        break;
        case 2:
            console.clear();
            console.log("\n 2. Buscar una tarea");

        break;
        case 3:
            console.clear();
            console.log("\n 3. Ver una tarea");
        break;
        case 4:
            console.clear();
            console.log("\n 4. SALIENDO GORDO TETON");
        break;
    }
} while(op!==4);