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

let currentPicture = 0;

function openOverlay(index) {//overlay Funktion, um das angeklickte Bild zu öffnen
    
    currentPicture = index;

    let overlay = document.getElementById('overlay');
    let overlayImg = document.getElementById('overlay_img');

    overlay.classList.remove('d_none'); //d_none wird "entfernt", wenn Bild angeklickt wird    

    overlayImg.src = pictures[currentPicture]; //der ImgPath wird in die src eingesetzt und so kann das Bild angezeigt werden

    updateCounter(); //die Funktion wird aufgerufen und erneuert, sobald openOverlay verwendet wird (so ändert sich der Bildzähler)
}

function closeOverlay() { //Overlay kann geschlossen werden
    let overlay = document.getElementById('overlay');

    overlay.classList.add('d_none'); //wenn das x gedrückt wird, wird die class d_none aktiviert
}

function updateCounter() { //Funktion, um den Counter zu erneuern und an das jeweilige Bild anzupassen

    let counter = document.getElementById('img_counter');

    counter.innerHTML = `${currentPicture + 1}/${pictures.length}`; //wir müssen zum aktuellen Bild 1 addieren, da currentPicture den Index widerspiegelt
}

function nextImg() {//sorgt dafür, dass der rechte Pfeil den Index um 1 erhöht und so das jeweilige nächste Bild angezeigt werden kann

    currentPicture++;

    if (currentPicture >= pictures.length) {//hiermit können wir vom 12 zum 1 Bild wieder springen
        currentPicture = 0;
    }

    document.getElementById('overlay_img').src = pictures[currentPicture];//in den Platzhalter wird die jeweilige src eingefügt

    updateCounter();//Counter wird aktualisiert
}

function prevImg() {//sorgt dafür, dass der linke Pfeil den Index um 1 verringert und so das jeweilige nächste Bild angezeigt werden kann

    currentPicture--;

    if (currentPicture < 0) {//hiermit können wir vom 1. zum 12 Bild springen
        currentPicture = pictures.length - 1;
    }

    document.getElementById('overlay_img').src = pictures[currentPicture];//in den Platzhalter wird die jeweilige src eingefügt

    updateCounter();//Counter wird aktualisiert
}
