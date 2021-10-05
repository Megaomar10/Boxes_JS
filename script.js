//Declaración de variables para DOM
const cajas = document.querySelectorAll('.cajas');
const btn_Par = document.querySelector('#btn_Par');
const btn_Impar = document.querySelector('#btn_Impar');
const btn_Clear = document.querySelector('#btn_Clear');
const btn_Contar = document.querySelector('#btn_Contar');

//Botón Pares
btn_Par.addEventListener('click', () => {
    for (let i = 0; i <= cajas.length; i++) {
        if (i % 2 == 0) {
            cajas[i].style.background = "blue";
        }
    }
});

//Boton Impares
btn_Impar.addEventListener('click', () => {
    for (let i = 0; i <= cajas.length; i++) {
        if (i % 2 != 0) {
            cajas[i].style.background = "orange";
        }
    }
});

//Boton Contar
btn_Contar.addEventListener('click', () => {
    for (let i = 0; i <= cajas.length; i++) {

        cajas[i].innerHTML = i;

    }
});

//Boton limpiar
btn_Clear.addEventListener('click', () => {
    for (let i = 0; i <= cajas.length; i++) {

        cajas[i].style.background = "silver";
        cajas[i].innerHTML = "";
    }
});