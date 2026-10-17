document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 document.querySelectorAll('.menu-toggle').forEach(btn=>{
  const nav=btn.parentElement.querySelector('.nav'); if(!nav)return;
  btn.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);btn.textContent=open?'☰':'×';btn.setAttribute('aria-label',open?'Buka menu':'Tutup menu');});
  const closeMenu=()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.textContent='☰';btn.setAttribute('aria-label','Buka menu');};
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
 });
 const search=document.getElementById('brand-search'),grid=document.getElementById('brand-grid');
 if(search&&grid)search.addEventListener('input',()=>{const q=search.value.toLocaleLowerCase('id').trim();grid.querySelectorAll('.brand-card').forEach(card=>card.hidden=!card.textContent.toLocaleLowerCase('id').includes(q));});
 const main=document.getElementById('gallery-main-image');
 if(main)document.querySelectorAll('[data-gallery-src]').forEach(btn=>btn.addEventListener('click',()=>{main.src=btn.dataset.gallerySrc;main.alt=btn.dataset.galleryAlt||'Foto produk';document.querySelectorAll('.gallery-thumb').forEach(b=>b.classList.toggle('active',b===btn));}));
});
