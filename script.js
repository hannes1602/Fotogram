const pictures = [
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

const picturesNames = [
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

/**Hierüber lass ich meine Bilder anzeigen */
function renderPictures() {
    const imgSection = document.getElementById('img_section');

    for (let i = 0; i < pictures.length; i++) {
            imgSection.innerHTML += `
            <figure>
            <button class="img_button" onclick="openOverlay(${i})">
            <img src="${pictures[i]}" alt="${picturesNames[i]}" >
            </button>
            </figure>`;
        }

    }

/**Overlay */

let currentPicture = 0;

/** overlay Funktion, um das angeklickte Bild zu öffnen*/
function openOverlay(index) {
    
    currentPicture = index;

    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay_img');
    const name = document.getElementById('overlay_Pictitel');

    name.innerHTML = picturesNames[currentPicture]; //beim Klick wird der jeweilige Bildname hinzugefügt

    overlayImg.src = pictures[currentPicture]; //der ImgPath wird in die src eingesetzt und so kann das Bild angezeigt werden

    updateCounter(); //die Funktion wird aufgerufen und erneuert, sobald openOverlay verwendet wird (so ändert sich der Bildzähler)

    overlay.showModal();
}

/**Overlay kann geschlossen werden */
function closeOverlay() {
    const overlay = document.getElementById('overlay');

    overlay.close();
}

/**Funktion, um den Counter zu erneuern und an das jeweilige Bild anzupassen */
function updateCounter() {

    const counter = document.getElementById('img_counter');

    counter.innerHTML = `${currentPicture + 1}/${pictures.length}`; //wir müssen zum aktuellen Bild 1 addieren, da currentPicture den Index widerspiegelt
}

/**Funktion, um die Bilder zu switchen. Sowohl für linken als auch rechten Button */
function imgSwitcher(direction) {
    currentPicture += direction;

    if (currentPicture >= pictures.length) {
         currentPicture = 0;
    } 
    
    if (currentPicture < 0){
        currentPicture = pictures.length - 1;
    }

    document.getElementById('overlay_img').src = pictures[currentPicture];
    document.getElementById('overlay_Pictitel').innerHTML = picturesNames[currentPicture];

    updateCounter();
}