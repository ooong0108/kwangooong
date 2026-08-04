const images = [
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

const gallery = document.getElementById("gallery");
const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const count = document.getElementById("count");

const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let current = 0;

// 갤러리 생성
images.forEach((file, index)=>{

    const photo = document.createElement("div");
    photo.className = "photo";

    const img = document.createElement("img");

    img.src = `images/${file}`;
    img.alt = `photo ${index+1}`;
    img.loading = "lazy";

    img.addEventListener("click",()=>{

        current = index;

        openViewer();

    });

    photo.appendChild(img);

    gallery.appendChild(photo);

});

function openViewer(){

    viewer.classList.add("active");

    updateViewer();

    document.body.style.overflow="hidden";

}

function closeViewer(){

    viewer.classList.remove("active");

    document.body.style.overflow="";

}

function updateViewer(){

    viewerImage.src = `images/${images[current]}`;

    count.textContent =
        `${current+1} / ${images.length}`;

}

function next(){

    current++;

    if(current>=images.length){

        current=0;

    }

    updateViewer();

}

function prev(){

    current--;

    if(current<0){

        current=images.length-1;

    }

    updateViewer();

}

nextBtn.onclick = next;

prevBtn.onclick = prev;

closeBtn.onclick = closeViewer;

viewer.onclick=(e)=>{

    if(e.target===viewer){

        closeViewer();

    }

};

document.addEventListener("keydown",(e)=>{

    if(!viewer.classList.contains("active")) return;

    if(e.key==="ArrowRight") next();

    if(e.key==="ArrowLeft") prev();

    if(e.key==="Escape") closeViewer();

});

// 모바일 스와이프
let startX = 0;

viewer.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

viewer.addEventListener("touchend",(e)=>{

    const endX = e.changedTouches[0].clientX;

    if(endX-startX>60){

        prev();

    }

    if(startX-endX>60){

        next();

    }

});
