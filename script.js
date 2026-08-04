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
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

// 이미지 생성
files.forEach((file, index) => {

    const img = document.createElement("img");

    img.src = `images/${file}`;
    img.loading = "lazy";

    // 처음 6장만 노출
    if(index >= 6){
        img.classList.add("hidden");
    }

    // 클릭 시 원본 비율 보기
    img.addEventListener("click", () => {

        viewer.style.display = "flex";
        viewerImage.src = img.src;

    });

    gallery.appendChild(img);

});

// MORE 버튼
moreBtn.addEventListener("click", () => {

    document.querySelectorAll(".hidden").forEach(img => {

        img.classList.remove("hidden");

    });

    moreBtn.style.display = "none";

});

// 닫기
closeViewer.addEventListener("click", () => {

    viewer.style.display = "none";

});

viewer.addEventListener("click",(e)=>{

    if(e.target===viewer){

        viewer.style.display="none";

    }

});

// ESC 키
window.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        viewer.style.display="none";

    }

});
