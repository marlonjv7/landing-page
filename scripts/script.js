import mostrarText from "../modules/mostrarTexto.js"

let texto1 = document.querySelector('.divMostrar1');
let texto2 = document.querySelector('.divMostrar2');
let texto3 = document.querySelector('.divMostrar3');
let texto4 = document.querySelector('.divMostrar4');


document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('mostrarText')) {
        
        if (target.id == 1) {
            mostrarText(texto1, target.id)
        } else if (target.id == 2) {
            mostrarText(texto2, target.id)
        } else if (target.id == 3) {
            mostrarText(texto3, target.id)
        } else if (target.id == 4) {
            mostrarText(texto4, target.id)
        } else { }
    }
});
