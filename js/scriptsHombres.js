let pregunta = document.querySelector(".pregunta")
let opcion1 = document.querySelector(".opcion1")
let opcion2 = document.querySelector(".opcion2")
let opcion3 = document.querySelector(".opcion3")
let siguiente = document.querySelector(".siguiente")
let puntaje = document.querySelector(".puntaje")
let feedback = document.querySelector(".feedback")
let info = document.querySelector(".info")
let footer = document.querySelector(".footerCuestionario")

let respuestasCorrectas = 0

function correcto1(){
    if(pregunta.classList.item(1) == "1"){
        opcion2.style.backgroundColor = "green"
        respuestasCorrectas++
        siguiente.style.display = "block"
        opcion1.removeEventListener("click", incorrecto1)
        opcion2.removeEventListener("click", correcto1)
        opcion3.removeEventListener("click", incorrecto1)
    }
}

function incorrecto1(){
    if(pregunta.classList.item(1) == "1"){
        opcion3.style.backgroundColor = "red"
        opcion1.style.backgroundColor = "red"
        opcion2.style.backgroundColor = "green"
        siguiente.style.display = "block"
        opcion1.removeEventListener("click", incorrecto1)
        opcion2.removeEventListener("click", correcto1)
        opcion3.removeEventListener("click", incorrecto1)
    }
}

function correcto2(){
    if(pregunta.classList.item(1) == "2"){
        opcion1.style.backgroundColor = "green"
        respuestasCorrectas++
        siguiente.style.display = "block"
        opcion1.removeEventListener("click", correcto2)
        opcion2.removeEventListener("click", incorrecto2)
        opcion3.removeEventListener("click", incorrecto2)
    }
}

function incorrecto2(){
    if(pregunta.classList.item(1) == "2"){
        opcion2.style.backgroundColor = "red"
        opcion3.style.backgroundColor = "red"
        opcion1.style.backgroundColor = "green"
        siguiente.style.display = "block"
        opcion1.removeEventListener("click", correcto2)
        opcion2.removeEventListener("click", incorrecto2)
        opcion3.removeEventListener("click", incorrecto2)
    }
}

function correcto3(){
    if(pregunta.classList.item(1) == "3"){
        opcion3.style.backgroundColor = "green"
        respuestasCorrectas++
        siguiente.style.display = "block"
        opcion1.removeEventListener("click", incorrecto3)
        opcion2.removeEventListener("click", incorrecto3)
        opcion3.removeEventListener("click", correcto3)
    }
}

function incorrecto3(){
    if(pregunta.classList.item(1) == "3"){
        opcion2.style.backgroundColor = "red"
        opcion1.style.backgroundColor = "red"
        opcion3.style.backgroundColor = "green"
        siguiente.style.display = "block"
        opcion1.removeEventListener("click", incorrecto3)
        opcion2.removeEventListener("click", incorrecto3)
        opcion3.removeEventListener("click", correcto3)
    }
}

function Fsiguiente(){
    siguiente.style.display = "none"
    opcion1.style.backgroundColor = "white"
    opcion2.style.backgroundColor = "white"
    opcion3.style.backgroundColor = "white"

    if(pregunta.classList.item(1) == "1"){
        pregunta.classList.remove("1")
        pregunta.classList.add("2")
        opcion1.classList.remove("1")
        opcion1.classList.add("2")
        opcion2.classList.remove("1")
        opcion2.classList.add("2")
        opcion3.classList.remove("1")
        opcion3.classList.add("2")
    } else if(pregunta.classList.item(1) == "2"){
        pregunta.classList.remove("2")
        pregunta.classList.add("3")
        opcion1.classList.remove("2")
        opcion1.classList.add("3")
        opcion2.classList.remove("2")
        opcion2.classList.add("3")
        opcion3.classList.remove("2")
        opcion3.classList.add("3")
    } else if(pregunta.classList.item(1) == "3"){
        pregunta.style.display = "none"
        opcion1.style.display = "none"
        opcion2.style.display = "none"
        opcion3.style.display = "none"
        puntaje.innerHTML = "Tu puntaje ha sido de " + respuestasCorrectas + "/3" 
        puntaje.style.display = "block"
        if(respuestasCorrectas == 0){
            feedback.innerHTML = "No sabes mucho del tema, por suerte te podemos dar bastante informacion abajo."
            feedback.style.display = "block"
            info.style.display = "block"
            footer.style.display = "block"
        } else if(respuestasCorrectas == 1){
            feedback.innerHTML = "Sabes algo del tema, abajo puedes ampliar tus conocimientos."
            feedback.style.display = "block"
            info.style.display = "block"
            footer.style.display = "block"
        } else if(respuestasCorrectas == 2){
            feedback.innerHTML = "Sabes bastante del tema, abajo hay informacion util para seguir aprendiendo."
            feedback.style.display = "block"
            info.style.display = "block"
            footer.style.display = "block"
        } else if(respuestasCorrectas == 3){
            feedback.innerHTML = "Felicidades, sabes mucho del tema, igualmente tienes informacion abajo por si la necesitas."
            feedback.style.display = "block"
            info.style.display = "block"
            footer.style.display = "block"
        } 
    }

    if(pregunta.classList.item(1) == "2"){
        pregunta.innerHTML = "¿Cuándo empiezan los hombres a producir semen?"
        opcion1.innerHTML = "Desde la pubertad."
        opcion2.innerHTML = "Desde que nacen."
        opcion3.innerHTML = "Desde la adultez."
    }
    if(pregunta.classList.item(1) == "3"){
        pregunta.innerHTML = "¿Cuánto dura la operación de la vasectomía?"
        opcion1.innerHTML = "Entre 70 y 90 minutos."
        opcion2.innerHTML = "Entre 45 y 60 minutos."
        opcion3.innerHTML = "Entre 10 y 30 minutos."
    }
}

opcion1.addEventListener("click", incorrecto1)
opcion2.addEventListener("click", correcto1)
opcion3.addEventListener("click", incorrecto1)
opcion1.addEventListener("click", correcto2)
opcion2.addEventListener("click", incorrecto2)
opcion3.addEventListener("click", incorrecto2)
opcion1.addEventListener("click", incorrecto3)
opcion2.addEventListener("click", incorrecto3)
opcion3.addEventListener("click", correcto3)
siguiente.addEventListener("click", Fsiguiente)