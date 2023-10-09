const prompt=require("prompt-sync")({sigint:true});

let op, e, x, a;
const date=new Date();
let c=0;
let listaTareas=[];
let titulo, descripcion, vencimiento,estado,dificultad;
do{
    console.clear();
    console.log("Lista de Tareas\n[1] Agregar una nueva tarea\n[2] Buscar una tarea\n[3] Ver una tarea\n[4] Salir");
    op = prompt("Ingrese una opcion: ");
    switch(op){
        case "1":
            console.clear();
            console.log("\n 1. Agregar una nueva tarea");
            titulo=prompt("Ingrese el titulo de la tarea: ");
            descripcion=prompt("Ingrese la descripcion de la tarea: ");
            vencimiento=prompt("Ingrese la fecha de vencimiento de la tarea: ");
            estado="Pendiente";
            const creacion=date.toLocaleDateString(); 
            const edicion=date.toLocaleDateString();
            dificultad="Facil";
            let array=[titulo,descripcion,estado,creacion,edicion,vencimiento,dificultad];
            listaTareas.push(array);
            c++;
            console.log("Datos Guardados!");
            e=prompt("Ingrese cualquier tecla...");
            console.clear();
        break;
        case "2":
            console.clear();
            console.log("\n 2. Buscar una tarea");
            if(c===0){
                console.log("Se debe cargar una tarea antes de ingresar a esta opcion\n");
            } else{
                console.log("Introduce el titulo de la tarea que deseas buscar");
                x=prompt("");
                let z=0;
                if(x.trim()===""){
                    console.log("Ingrese un titulo o palabra clave valido");
                } else{
                    for(let i=0;i<c;i++){
                        if(listaTareas[i][0].toLowerCase().includes(x.toLowerCase())){
                            console.log("[" + i + "] "+listaTareas[i][0]);
                        }
                    }
                    console.log("¿De que tarea deseas ver los detalles? Ingresa su numero");
                    a=prompt("");
                    console.log("\nEsta es la tarea que elegiste\n");
                    console.log(listaTareas[a][0] + "\n");
                    console.log(listaTareas[a][1]);
                    console.log("Estado: " + listaTareas[a][2]);
                    console.log("Dificultad: " + listaTareas[a][6]);
                    console.log("Vencimiento: " + listaTareas[a][5]);
                    console.log("Creacion: " + listaTareas[a][3]);
                }
            }
            e=prompt("Ingrese cualquier tecla...");
            console.clear();
        break;
        case "3":
            console.clear();
            console.log("\n 3. Ver una tarea");
            if(c===0){
                console.log("Se debe cargar una tarea antes de ingresar a esta opcion\n");
            } else{
                console.log("\nEstas son todas las tareas");
                for(let i=0;i<c;i++){
                    console.log("["+i+"] " + listaTareas[i][0]);
                }
                console.log("¿Deseas ver los detalles de una tarea?");
                let x=prompt("Introduce el numero para verla o N para ir atras: ");
                if(x=="N"){
                    break;
                } else{
                    console.clear();
                    console.log("Esta es la tarea que elegiste");
                    console.log(listaTareas[x][0]);
                    console.log(listaTareas[x][1]);
                    console.log("Estado: " + listaTareas[x][2]);
                    console.log("Dificultad: " + listaTareas[x][6]);
                    console.log("Vencimiento: " + listaTareas[x][5]);
                    console.log("Creacion: " + listaTareas[x][3]);
                    console.log("Si deseas editarla presiona E o 0 para ir atras");
                    a=prompt("");
                    if(a!=="E"){
                        break;
                    } else{
                        console.log("Estas editando la tarea: " + listaTareas[x][0]);
                        console.log("Que desea modificar?\n[0]Descripcion\n[1]Estado\n[2]Dificultad\n[3]Vencimiento");
                        let mod=prompt("");
                        while(mod<0 || mod>3){
                            console.log("Ingrese un numero valido");
                            mod=prompt("");
                        }
                        switch(mod){
                            case "0":
                                console.log("Ingrese la nueva descripcion");
                                descripcion=prompt("");
                                listaTareas[x][1]=descripcion;
                            break;
                            case "1":
                                console.log("Ingrese el nuevo estado");
                                estado=prompt("");
                                listaTareas[x][2]=estado;
                            break;
                            case "2":
                                console.log("Ingrese la nueva dificultad");
                                dificultad=prompt("");
                                listaTareas[x][6]=dificultad;
                            break;
                            case "3":
                                console.log("Ingrese el nuevo vencimiento");
                                vencimiento=prompt("");
                                listaTareas[x][5]=vencimiento;
                            break;
                        }
                        console.log("Dato editado correctamente!");
                    }
                }
            }
            e=prompt("Ingrese cualquier tecla...");
            console.clear();
        break;
        case "4":
            console.clear();
            console.log("\nSaliendo...");
            e=prompt("Ingrese cualquier tecla...");
            console.clear();
        break;
        default:
            console.log("Ingrese una opcion valida");
        break;
    }
} while(op!=4);