const files = [
'YUH00087.JPG','YUH00167.JPG','YUH00239.JPG','YUH00311.JPG','YUH00322.JPG','YUH00387.JPG',
'YUH01177.JPG','YUH01347.JPG','YUH01353.JPG','YUH01642.JPG','YUH01660.JPG','YUH01980.JPG',
'YUH02024.JPG','YUH02232.JPG','YUH02325.JPG','YUH02357.JPG','YUH02406.JPG','YUH02448.JPG',
'YUH02497.JPG','YUH02555.JPG','YUH02564.JPG','YUH02941.JPG','YUH03026.JPG','YUH03140.JPG',
'YUH03277.JPG','YUH03330.JPG','YUH03467.JPG','YUH03533.JPG','YUH03565.JPG','YUH03603.JPG'
];

const gallery = document.getElementById("g");

files.forEach((name,index)=>{

    const img=document.createElement("img");
    img.src="images/"+name;

    if(index>=6){
        img.classList.add("hidden");
    }

    gallery.appendChild(img);

});

const btn=document.createElement("button");
btn.id="moreBtn";
btn.innerHTML="MORE";

gallery.after(btn);

btn.onclick=()=>{

    document.querySelectorAll(".hidden").forEach(img=>{
        img.classList.remove("hidden");
    });

    btn.style.display="none";

};
