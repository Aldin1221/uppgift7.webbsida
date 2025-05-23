
const images = ["hotelbild.webp", "hall.webp", "room.webp"];
let index = 0;

function changeImage() {
    const img = document.getElementById("slideshow");
    index = (index + 1) % images.length;
    img.src = images[index];
}

setInterval(changeImage, 3000); // Byt bild var tredje sekund
