//cible l'element btn qui va ouvrir la modal
const btnOpen = document.querySelector('#btnOpen');
//cible l'element modal qui porte la class modalContainer
const modal = document.querySelector('.modalContainer');

function openModal(){
    //dans l'element modal, utilise la function classlist pour enlever la string displayNone de l'attribus class
    modal.classList.remove('displayNone');
}

// au click sur btnOpen, déclanche la function openModal
btnOpen.addEventListener('click', openModal);