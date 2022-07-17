console.log("Bienvenido a Guitarras Caoba")

let guitarra = prompt ("¿Qué marca de guitarra está buscando?")

if((guitarra === "Gibson") || (guitarra === "gibson")){
    
    for (let i = 1; i <= 10; i++) {
        if (i == 5){
            break;
        }
        alert("Disponemos en stock: " + i + " Gibson.");
    }

} else if((guitarra === "Squier") || (guitarra === "squier")){

    for (let i = 1; i <= 10; i++) {
        if (i == 7){
            break;
        }
        alert("Disponemos en stock: " + i + " Squier.");
    }

} else if((guitarra === "Jackson") || (guitarra === "jackson")){

    for (let i = 1; i <= 10; i++) {
        if (i == 3){
            break;
        }
        alert("Disponemos en stock: " + i + " Jackson.");
    }

} else if((guitarra === "Epiphone") || (guitarra === "epiphone")){

    for (let i = 1; i <= 10; i++) {
        if (i == 2){
            break;
        }
        alert("Lo sentimos, no tenemos en stock.");
    } 

} else{
    alert("Lo sentimos, no trabajamos esa marca.");
}

alert("¡Gracias por su consulta!");