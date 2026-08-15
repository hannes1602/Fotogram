function openOverlay(imagePath) {//overlay Funktion, um das angeklickte Bild zu öffnen
    let overlay = document.getElementById('overlay');
    let overlayImg = document.getElementById('overlay_img');


    overlay.classList.remove('d_none'); //d_none wird "entfernt", wenn Bild angeklickt wird

    overlayImg.src = imagePath; //der ImgPath wird in die src eingesetzt und so kann das Bild angezeigt werden
}

function closeOverlay() { //Overlay kann geschlossen werden
    let overlay = document.getElementById('overlay');

    overlay.classList.add('d_none'); //wenn das x gedrückt wird, wird die class d_none aktiviert
}