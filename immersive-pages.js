(()=>{
 const root=document.querySelector('.immersive-page-body');
 const particles=document.querySelector('.page-particles');
 for(let i=0;i<34;i++){const p=document.createElement('i');p.style.left=Math.random()*100+'%';p.style.top=Math.random()*100+'%';p.style.setProperty('--d',(7+Math.random()*14)+'s');p.style.animationDelay=(-Math.random()*12)+'s';particles.appendChild(p)}
 const progress=document.querySelector('.page-progress');
 const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'};addEventListener('scroll',update,{passive:true});update();
 const live=document.getElementById('pageLive');let on=false;live?.addEventListener('click',()=>{on=!on;root.classList.toggle('page-live-mode',on);live.classList.toggle('page-live',on);live.textContent=on?'◉ Live':'◎ Live';document.querySelectorAll('.legacy-content>div').forEach((x,i)=>x.style.animationDelay=(i%7)*.05+'s')});
 document.querySelectorAll('img').forEach(img=>img.addEventListener('click',()=>img.classList.toggle('ll-image-focus')));
 addEventListener('keydown',e=>{if(e.target.matches('input,textarea,select,[contenteditable=true]'))return;const k=e.key.toLowerCase();if(k==='h')location.href='index.html';if(k==='c')window.open('Lisa-Liu-CV.pdf','_blank');if(k==='m')location.href='music.html';});
})();
