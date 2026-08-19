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



function init() { 
    renderPictures();
}


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

let currentPicture = 0;

function openOverlay(index) {
    
    currentPicture = index;

    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay_img');
    const name = document.getElementById('overlay_Pictitel');

    name.innerHTML = picturesNames[currentPicture]; 

    overlayImg.src = pictures[currentPicture]; 

    updateCounter(); 

    overlay.showModal();
}


function closeOverlay() {
    const overlay = document.getElementById('overlay');

    overlay.close();
}


function updateCounter() {

    const counter = document.getElementById('img_counter');

    counter.innerHTML = `${currentPicture + 1}/${pictures.length}`; 
}


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