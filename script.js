const imageFiles = [
"YUH00087.JPG",
"YUH00167.JPG",
"YUH00239.JPG",
"YUH00311.JPG",
"YUH00322.JPG",
"YUH00387.JPG",
"YUH01177.JPG",
"YUH01347.JPG",
"YUH01353.JPG",
"YUH01642.JPG",
"YUH01660.JPG",
"YUH01980.JPG",
"YUH02024.JPG",
"YUH02232.JPG",
"YUH02325.JPG",
"YUH02357.JPG",
"YUH02406.JPG",
"YUH02448.JPG",
"YUH02497.JPG",
"YUH02555.JPG",
"YUH02564.JPG",
"YUH02941.JPG",
"YUH03026.JPG",
"YUH03140.JPG",
"YUH03277.JPG",
"YUH03330.JPG",
"YUH03467.JPG",
"YUH03533.JPG",
"YUH03565.JPG",
"YUH03603.JPG"
];

const grid = document.querySelector(".grid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const counter = document.getElementById("counter");

let current = 0;

imageFiles.forEach((file, index) => {

    const photo = document.createElement("div");
    photo.className = "photo";

    const img = document.createElement("img");
    img.src = "images/" + file;
    img.loading = "lazy";

    img.onclick = () => {
        current = index;
        showImage();
    };

    photo.appendChild(img);
    grid.appendChild(photo);

});

function showImage() {

    lightbox.style.display = "flex";

    lightboxImage.src = "images/" + imageFiles[current];

    counter.textContent =
        `${current + 1} / ${imageFiles.length}`;

}

document.getElementById("close").onclick = () => {

    lightbox.style.display = "none";

};

document.getElementById("next").onclick = () => {

    current++;

    if(current >= imageFiles.length){

        current = 0;

    }

    showImage();

};

document.getElementById("prev").onclick = () => {

    current--;

    if(current < 0){

        current = imageFiles.length - 1;

    }

    showImage();

};

document.addEventListener("keydown", e=>{

    if(lightbox.style.display!=="flex") return;

    if(e.key==="ArrowRight"){

        document.getElementById("next").click();

    }

    if(e.key==="ArrowLeft"){

        document.getElementById("prev").click();

    }

    if(e.key==="Escape"){

        document.getElementById("close").click();

    }

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});
