
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
            //creazione
    const newImg = document.createElement("div");
    const myH1 = document.createElement("h1");
    const myP = document.createElement("p");

    if(i === 0 ) {
        
            //inserimento
        newImg.innerHTML = `<img src="${imageList[i].image}">`;
        myH1.innerHTML = `${imageList[i].title}`;
        myP.innerHTML = `${imageList[i].text}`;

            //classi
        newImg.classList.add("_image");
        newImg.classList.add("selected");

        myH1.classList.add("title_d_none");
        myH1.classList.add("selected");

        myP.classList.add("text_d_none");
        myP.classList.add("selected");

    }
      
    else{

            //inserimento
        newImg.innerHTML = `<img src="${imageList[i].image}">`;
        myH1.innerHTML = `${imageList[i].title}`;
        myP.innerHTML =`${imageList[i].text}`;

            //classi
        newImg.classList.add("_image");
        myH1.classList.add("title_d_none");
        myP.classList.add("text_d_none");
    }

    console.log(i);

            //inserimento elementi html
    imageCarousel.append(newImg);
    imageCarousel.append(myH1);
    imageCarousel.append(myP);
}









//  ----------------------------BUTTONS-------------------------------------------------------


            //dichiarazione variabili img , p e h1 (rispettivamente j, p, t)
let j = 0;
let t = 0;
let p = 0;

const _Button = document.getElementById('_Button');

_Button.addEventListener('click', function() {

            //inserimento in nuove variabili prendendo gli elementi creati attraverso le classi aggiunte
    let next = document.getElementsByClassName(`_image`);
    let nextT = document.getElementsByClassName(`title_d_none`);
    let nextP = document.getElementsByClassName(`text_d_none`);
            
    console.log(next);
    console.log(nextT);
    console.log(nextP);

            //rimozione delle classi con d-block
    next[j].classList.remove('selected');
    nextT[t].classList.remove('selected');
    nextP[p].classList.remove('selected');

            //aumento valore variabili e controlli if
    j += 1;
    t += 1;
    p += 1;

    if(j > 4){

        j = 0;

    };

    if(t > 4){

        t = 0;

    };

    if(p > 4){

        p = 0;

    };

            //aggiunta delle classi con d-block
    next[j].classList.add('selected');
    nextT[t].classList.add('selected');
    nextP[p].classList.add('selected');

    console.log(j);
    console.log(t);
    console.log(p);
    
});

const _ButtonUp = document.getElementById('_ButtonUp');

_ButtonUp.addEventListener('click', function() {

    let next = document.getElementsByClassName(`_image`);
    let nextT = document.getElementsByClassName(`title_d_none`);
    let nextP = document.getElementsByClassName(`text_d_none`);

    console.log(next);
    console.log(nextT);
    console.log(nextP);
    
    next[j].classList.remove('selected');
    nextT[t].classList.remove('selected');
    nextP[p].classList.remove('selected');

    j -= 1;
    t -= 1;
    p -= 1;
    
    if(j < 0){

        j = 4;

    };

    if(t < 0){

        t = 4;

    };

    if(p < 0){

        p = 4;

    };
    
    
    next[j].classList.add('selected');
    nextT[t].classList.add('selected');
    nextP[p].classList.add('selected');

    console.log(j);
    console.log(t);
    console.log(p);
    
});


