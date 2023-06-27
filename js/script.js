
// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell'immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.


// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci
//  prima sulla creazione del markup statico: costruiamo il container
//   e inseriamo l'immagine grande in modo da poter stilare lo slider.


// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo
//  l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra,
//  l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello.
//  Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra,
//   la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura
//    se l'utente clicca la freccia verso sinistra.




//------------------------------------OBJECT ARRAY-----------------------------------------------------------------------------------------------------------------------------------------------

const imageList = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// const imageList = [
//     "img/01.webp",
//     "img/02.webp",
//     "img/03.webp",
//     "img/04.webp",
//     "img/05.webp"
// ];




//----------------------------------CAROUSEL------------------------------------------------------------------------------------------------------------------------





const imageCarousel = document.getElementById(`imageCarousel`)

console.log(imageList);

for (let i = 0; i < imageList.length; i++){

    const newImg = document.createElement("div");
    
    if(i === 0 ) {
        newImg.innerHTML = `<img src="${imageList[i].image}">`;
        newImg.classList.add("_image");
        newImg.classList.add("selected");

    }
      
    else{
        newImg.innerHTML = `<img src="${imageList[i].image}">`;
        newImg.classList.add("_image");
    }

    console.log(i);

    imageCarousel.append(newImg);

}









//  ----------------------------BUTTONS-------------------------------------------------------





let j = 0;

const _Button = document.getElementById('_Button');

_Button.addEventListener('click', function() {

    let next = document.getElementsByClassName(`_image`);

    console.log(next);
        
    next[j].classList.remove('selected');

    j += 1;

    if(j > 4){

        j = 0;

    }

    next[j].classList.add('selected');

    console.log(j);
    
});

const _ButtonUp = document.getElementById('_ButtonUp');

_ButtonUp.addEventListener('click', function() {

    let next = document.getElementsByClassName(`_image`);

    console.log(next);
        
    next[j].classList.remove('selected');

    j -= 1;

    if(j < 0){

        j = 4;

    }

    next[j].classList.add('selected');

    console.log(j);
    
});


