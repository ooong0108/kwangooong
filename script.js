const files = [
'YUH00087.JPG',
'YUH00167.JPG',
'YUH00239.JPG',
'YUH00311.JPG',
'YUH00322.JPG',
'YUH00387.JPG',
'YUH01177.JPG',
'YUH01347.JPG',
'YUH01353.JPG',
'YUH01642.JPG',
'YUH01660.JPG',
'YUH01980.JPG',
'YUH02024.JPG',
'YUH02232.JPG',
'YUH02325.JPG',
'YUH02357.JPG',
'YUH02406.JPG',
'YUH02448.JPG',
'YUH02497.JPG',
'YUH02555.JPG',
'YUH02564.JPG',
'YUH02941.JPG',
'YUH03026.JPG',
'YUH03140.JPG',
'YUH03277.JPG',
'YUH03330.JPG',
'YUH03467.JPG',
'YUH03533.JPG',
'YUH03565.JPG',
'YUH03603.JPG'
];

const gallery = document.getElementById("gallery");
const moreBtn = document.getElementById("moreBtn");
const viewer = document.getElementById("viewer");
const closeBtn = document.getElementById("closeBtn");
const wrapper = document.getElementById("swiperWrapper");
const counter = document.getElementById("counter");

let swiper;

// 갤러리 생성
files.forEach((file, index) => {

    const img = document.createElement("img");

    img.src = "images/" + file;

    if(index >= 9){
        img.classList.add("hidden");
    }

    img.addEventListener("click", ()=>{

        openViewer(index);

    });

    gallery.appendChild(img);

});

// MORE
moreBtn.addEventListener("click",()=>{

    document
    .querySelectorAll(".hidden")
    .forEach(img=>{

        img.classList.remove("hidden");

    });

    moreBtn.style.display="none";

});


// Viewer 생성

files.forEach(file=>{

    const slide=document.createElement("div");

    slide.className="swiper-slide";

    slide.innerHTML=
    `<img src="images/${file}">`;

    wrapper.appendChild(slide);

});

function openViewer(index){

    viewer.style.display="flex";

    if(swiper){

        swiper.destroy(true,true);

    }

    swiper=new Swiper(".swiper",{

        initialSlide:index,

        speed:400,

        spaceBetween:0,

        on:{

            init(){

                counter.innerText=
                `${this.activeIndex+1} / ${files.length}`;

            },

            slideChange(){

                counter.innerText=
                `${this.activeIndex+1} / ${files.length}`;

            }

        }

    });

}

closeBtn.onclick=()=>{

    viewer.style.display="none";

}
