
(()=>{
 const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
 const page=(location.pathname.split('/').pop()||'index.html').replace('.html','');
 document.body.classList.add('ll-page-'+page);
 // Shared animated universe
 const uni=document.createElement('div'); uni.className='ll-universe';
 for(let i=0;i<3;i++){let o=document.createElement('i');o.className='ll-orb '+String.fromCharCode(97+i);o.style.setProperty('--dur',(13+i*5)+'s');o.style.setProperty('--delay',(-i*3)+'s');uni.appendChild(o)}
 for(let i=0;i<58;i++){let p=document.createElement('i');p.className='ll-particle'+(i%9===0?' petal':'');p.style.left=Math.random()*100+'%';p.style.top=Math.random()*100+'%';p.style.setProperty('--dur',(8+Math.random()*18).toFixed(2)+'s');p.style.setProperty('--delay',(-Math.random()*20).toFixed(2)+'s');p.style.opacity=(.18+Math.random()*.55).toFixed(2);uni.appendChild(p)}
 document.body.prepend(uni);
 // Global control deck for interior pages only. The cinematic homepage owns its single primary navigation.
 if(page!=='index'){
   const bar=document.createElement('div');bar.className='ll-topbar';
   bar.innerHTML=`<a class="ll-brand" href="index.html">Lisa Liu <span>✦</span></a><span class="ll-context">science × art × story · ${page}</span><div class="ll-actions"><a class="ll-action" href="index.html">⌂ Home</a><a class="ll-action" href="research.html">✦ Work</a><a class="ll-action" href="music.html">♫ Lisa's Music Room</a><a class="ll-action hot" href="Lisa-Liu-CV.pdf" target="_blank">CV ↗</a><button class="ll-action optional" id="llMode" type="button">◎ Activate</button></div>`;
   document.body.append(bar);
 }
 const prog=document.createElement('div');prog.className='ll-progress';document.body.append(prog);
 // location and work rail are added inside each page's main card without removing anything
 const card=$('.card');
 if(card){
   const left=card.children[0];
   if(left){
     const loc=document.createElement('div');loc.className='ll-location';loc.innerHTML='<i class="fa-solid fa-location-dot"></i> Shanxi, China · UC Berkeley';
     const profile=left.firstElementChild;if(profile) profile.append(loc);
   }
   const rail=document.createElement('div');rail.className='ll-workrail';rail.innerHTML='<strong>Explore Lisa’s work</strong><a href="research.html">Research</a><a href="projects.html">Projects</a><a href="art.html">Art</a><a href="gallery.html">Gallery</a><a href="music.html">Music</a><a href="journal.html">Journal</a><a href="skills.html">Skills</a><a href="teaching.html">Teaching</a><a href="Lisa-Liu-CV.pdf" target="_blank">CV</a>';
   const right=card.children[1]; if(right) right.prepend(rail);
 }
 // add CV + location to navs if a page has a conventional sidebar
 $$('.nav-link').forEach(a=>{if(a.textContent.trim().toLowerCase()==='home') a.classList.add('ll-home-link')});
 // tilt cards gently from pointer position
 const tiltTargets=$$('.card,.art-card,.photo-item,.edu-item,.project-card,.research-card,.journal-entry,.skill-card,.memory');
 tiltTargets.forEach(el=>{
   el.addEventListener('pointermove',e=>{
     if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
     const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
     const amount=el.classList.contains('card')?2.2:5;
     el.style.transform=`perspective(900px) rotateX(${-y*amount}deg) rotateY(${x*amount}deg) translateY(-2px)`;
   });
   el.addEventListener('pointerleave',()=>{el.style.transform=''});
   el.addEventListener('click',e=>{if(e.target.closest('a,button,input,textarea,select')) return;el.classList.add('ll-activated');setTimeout(()=>el.classList.remove('ll-activated'),450)});
 });
 // Click portal ripple
 document.addEventListener('pointerdown',e=>{if(e.target.closest('a,button'))return;const r=document.createElement('i');r.className='ll-ripple';r.style.left=e.clientX+'px';r.style.top=e.clientY+'px';document.body.append(r);setTimeout(()=>r.remove(),850)});
 // Scroll progress
 const update=()=>{const h=document.documentElement.scrollHeight-innerHeight;prog.style.width=(h>0?scrollY/h*100:0)+'%'};addEventListener('scroll',update,{passive:true});update();
 // Activate mode: turns the site into a slightly more kinetic “movie” mode
 let active=false;const mode=$('#llMode');if(mode)mode.addEventListener('click',()=>{active=!active;document.body.classList.toggle('ll-hyper',active);mode.textContent=active?'◉ Live':'◎ Activate';$$('.card,.edu-item,.art-card,.photo-item,.journal-entry,.skill-card').forEach((el,i)=>el.style.setProperty('--ll-phase',(i%8)*.15+'s'))});
 // Reveal existing content as it enters the viewport
 const reveal=$$('.page-section,.bio-card,.art-card,.photo-item,.journal-entry,.skill-ecosystem,.skill-card,.edu-item,.research-card,.project-card,.teaching-card,.marketing-card');
 if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('ll-seen')}),{threshold:.08});reveal.forEach(e=>io.observe(e))}
 // Make gallery/photos keyboard-friendly and clickable with a visual activation
 $$('img').forEach(img=>{img.loading=img.loading||'lazy';img.addEventListener('click',()=>{img.classList.toggle('ll-image-focus')})});
 // Page-aware keyboard shortcuts: H home, C CV, M music, W work. Never intercept typing.
 addEventListener('keydown',e=>{if(e.target.matches('input,textarea,select,[contenteditable=true]'))return;const k=e.key.toLowerCase();if(k==='h')location.href='index.html';if(k==='c')window.open('Lisa-Liu-CV.pdf','_blank');if(k==='m')location.href='music.html';if(k==='w')location.href='research.html'});
 // Skill jar enhancement if present: expose a gentle automatic liquid pulse without changing its original controls.
 const jar=$('.skill-jar');if(jar){let t=0;const tick=()=>{t+=.025;const liquid=$('.jar-liquid',jar);if(liquid && !jar.matches(':hover'))liquid.style.height=(28+Math.sin(t)*7)+'%';requestAnimationFrame(tick)};tick()}
})();
