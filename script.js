let pictures = [
    "./img/1_Bild.jpg",
    "./img/2_Bild.jpg",
    "./img/3_Bild.jpg",
    "./img/4_Bild.jpg",
    "./img/5_Bild.jpg",
    "./img/6_Bild.jpg",
    "./img/7_Bild.jpg",
    "./img/8_Bild.jpg",
    "./img/9_Bild.jpg",
    "./img/10_Bild.jpg",
    "./img/11_Bild.jpg",
    "./img/12_Bild.jpg"
]

let picturesName = [
    "Greenland",
    "Tokyo by night",
    "Rain sky",
    "Blue tit",
    "Hurricane",
    "Norway in winter",
    "Moore duck",
    "Sea at night",
    "Snow bunting",
    "Snow leopard",
    "Mountains",
    "Winter wonderland"
]

/**Bilder rendern */

function init() { //wird benötigt, um die Bilder beim Laden der Seite anzeigen zu lassen 
    renderPictures();
}

/**Hierüber lass ich meine Bilder in zwei Reihen anzeigen */
function renderPictures() {
    let imgSectionFirst = document.getElementById('imgs_first_row');
    let imgSectionSecond = document.getElementById('imgs_second_row');

    for (let i = 0; i < pictures.length; i++) {
        if (i <= 6) {
            imgSectionFirst.innerHTML += `
            <img src="${pictures[i]}" alt="${picturesName[i]}" onclick="openOverlay(${i})">`;
        } else {
            imgSectionSecond.innerHTML += `
            <img src="${pictures[i]}" alt="${picturesName[i]}" onclick="openOverlay(${i})">`;
        }

    }
}

/**Overlay */

let currentPicture = 0;

/** overlay Funktion, um das angeklickte Bild zu öffnen*/
function openOverlay(index) {
    
    currentPicture = index;

    let overlay = document.getElementById('overlay');
    let overlayImg = document.getElementById('overlay_img');
    let name = document.getElementById('overlay_Pictitel');

    overlay.classList.remove('d_none'); //d_none wird "entfernt", wenn Bild angeklickt wird

    name.innerHTML = picturesName[currentPicture]; //beim Klick wird der jeweilige Bildname hinzugefügt

    overlayImg.src = pictures[currentPicture]; //der ImgPath wird in die src eingesetzt und so kann das Bild angezeigt werden

    updateCounter(); //die Funktion wird aufgerufen und erneuert, sobald openOverlay verwendet wird (so ändert sich der Bildzähler)
}

/**Overlay kann geschlossen werden */
function closeOverlay() {
    let overlay = document.getElementById('overlay');

    overlay.classList.add('d_none'); //wenn das x gedrückt wird, wird die class d_none aktiviert
}

/**Funktion, um den Counter zu erneuern und an das jeweilige Bild anzupassen */
function updateCounter() {

    let counter = document.getElementById('img_counter');

    counter.innerHTML = `${currentPicture + 1}/${pictures.length}`; //wir müssen zum aktuellen Bild 1 addieren, da currentPicture den Index widerspiegelt
}

/**sorgt dafür, dass der rechte Pfeil den Index um 1 erhöht und so das jeweilige nächste Bild angezeigt werden kann */
function nextImg() {

    currentPicture++;

    if (currentPicture >= pictures.length) {//hiermit können wir vom 12 zum 1 Bild wieder springen
        currentPicture = 0;
    }

    document.getElementById('overlay_img').src = pictures[currentPicture];//in den Platzhalter wird die jeweilige src eingefügt
    document.getElementById('overlay_Pictitel').innerHTML = picturesName[currentPicture];//in den Platzhalter wird der jeweilige Bildname eingefügt
    

    updateCounter();//Counter wird aktualisiert
}

/**sorgt dafür, dass der linke Pfeil den Index um 1 verringert und so das jeweilige nächste Bild angezeigt werden kann */
function prevImg() {

    currentPicture--;

    if (currentPicture < 0) {//hiermit können wir vom 1. zum 12 Bild springen
        currentPicture = pictures.length - 1;
    }

    document.getElementById('overlay_img').src = pictures[currentPicture];//in den Platzhalter wird die jeweilige src eingefügt
    document.getElementById('overlay_Pictitel').innerHTML = picturesName[currentPicture];//in den Platzhalter wird der jeweilige Bildname eingefügt
    

    updateCounter();//Counter wird aktualisiert
}
