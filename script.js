/* ==========================================
   Wedding Gallery
========================================== */

const TOTAL_IMAGES = 40;
const IMAGE_PATH = "images";

const grid = document.querySelector(".grid");

let currentIndex = 0;
let startX = 0;

/* ==========================================
   Create Gallery
========================================== */

for (let i = 1; i <= TOTAL_IMAGES; i++) {

    const number = String(i).padStart(2, "0");

    const photo = document.createElement("div");
    photo.className = "photo reveal";

    const img = document.createElement("img");

    img.src = `${IMAGE_PATH}/${number}.jpg`;
    img.loading = "lazy";
    img.alt = `Wedding ${number}`;

    img.onload = () => {
        photo.classList.add("loaded");
    };

    photo.appendChild(img);
    grid.appendChild(photo);
}

/* ==========================================
   Lightbox
========================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const counter = document.getElementById("counter");

const photos = () => [...document.querySelectorAll(".photo img")];

/* ==========================================
   Open
========================================== */

function openLightbox(index){

    currentIndex = index;

    lightbox.classList.add("active");

    updateImage();

    document.body.style.overflow = "hidden";

}

/* ==========================================
   Close
========================================== */

function closeLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}

/* ==========================================
   Update
========================================== */

function updateImage(){

    const items = photos();

    lightboxImage.src = items[currentIndex].src;

    counter.innerText =
        `${currentIndex + 1} / ${items.length}`;

}

/* ==========================================
   Next
========================================== */

function nextImage(){

    const items = photos();

    currentIndex++;

    if(currentIndex >= items.length){

        currentIndex = 0;

    }

    updateImage();

}

/* ==========================================
   Prev
========================================== */

function prevImage(){

    const items = photos();

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = items.length - 1;

    }

    updateImage();

}

/* ==========================================
   Click Event
========================================== */

document.addEventListener("click",(e)=>{

    if(e.target.matches(".photo img")){

        const index = photos().indexOf(e.target);

        openLightbox(index);

    }

});

/* ==========================================
   Buttons
========================================== */

closeBtn.onclick = closeLightbox;

nextBtn.onclick = nextImage;

prevBtn.onclick = prevImage;

/* ==========================================
   Background Click
========================================== */

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        closeLightbox();

    }

});

/* ==========================================
   Keyboard
========================================== */

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape") closeLightbox();

    if(e.key==="ArrowRight") nextImage();

    if(e.key==="ArrowLeft") prevImage();

});

/* ==========================================
   Swipe
========================================== */

lightbox.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

    const endX = e.changedTouches[0].clientX;

    const distance = endX - startX;

    if(distance > 70){

        prevImage();

    }

    if(distance < -70){

        nextImage();

    }

});

/* ==========================================
   Fade Animation
========================================== */

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:0.15

}

);

function observePhotos(){

document
.querySelectorAll(".reveal")
.forEach(item=>observer.observe(item));

}

observePhotos();

/* ==========================================
   Image Error
========================================== */

document.addEventListener("error",(e)=>{

if(e.target.tagName==="IMG"){

e.target.style.display="none";

}

},true);

/* ==========================================
   Prevent Drag
========================================== */

document.addEventListener("dragstart",(e)=>{

e.preventDefault();

});

/* ==========================================
   Double Tap Zoom Prevent
========================================== */

let lastTouchEnd = 0;

document.addEventListener("touchend",(event)=>{

const now = Date.now();

if(now-lastTouchEnd<=300){

event.preventDefault();

}

lastTouchEnd=now;

},{passive:false});

/* ==========================================
   End
========================================== */
