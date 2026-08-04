const files=Array.from({length:15},(_,i)=>`images/${String(i+1).padStart(2,'0')}.jpg`);
const g=document.getElementById('gallery');
const lb=document.getElementById('lightbox');
const img=document.getElementById('lightboxImg');
let idx=0;
files.forEach((f,i)=>{
 const im=document.createElement('img');
 im.src=f;
 im.alt=`photo ${i+1}`;
 im.onerror=()=>{im.style.display='none';};
 im.onclick=()=>{idx=i;show();}
 g.appendChild(im);
});
function show(){img.src=files[idx];lb.classList.remove('hidden');}
close.onclick=()=>lb.classList.add('hidden');
prev.onclick=()=>{idx=(idx-1+files.length)%files.length;show();}
next.onclick=()=>{idx=(idx+1)%files.length;show();}
document.addEventListener('keydown',e=>{
 if(lb.classList.contains('hidden'))return;
 if(e.key==='Escape')lb.classList.add('hidden');
 if(e.key==='ArrowLeft')prev.onclick();
 if(e.key==='ArrowRight')next.onclick();
});
