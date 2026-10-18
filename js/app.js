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


// PWA: install affordance uses the official RENAI STORE OPTIMA logo-derived app icons.
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault(); deferredInstallPrompt = event;
  const button = document.querySelector('[data-install-app]'); if (button) button.hidden = false;
});
window.addEventListener('appinstalled', () => { deferredInstallPrompt = null; const button=document.querySelector('[data-install-app]'); if(button) button.hidden=true; });
document.addEventListener('DOMContentLoaded', () => {
  // Keep the site installable through the browser menu, without showing a page-level install button.
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    const basePath = location.pathname.startsWith('/php/') ? '/php/' : location.pathname.slice(0, location.pathname.lastIndexOf('/') + 1);
    navigator.serviceWorker.register(basePath + 'sw.js').catch(() => {});
  }
});

// Product gallery lightbox: tap a gallery image to view it larger; close with button, backdrop, or Escape.
document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
  if (!galleryImages.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'product-lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Tampilan foto produk');
  overlay.hidden = true;
  overlay.innerHTML = `
    <button type="button" class="lightbox-close" aria-label="Tutup foto">×</button>
    <button type="button" class="lightbox-prev" aria-label="Foto sebelumnya">‹</button>
    <figure class="lightbox-figure">
      <img class="lightbox-image" alt="">
      <figcaption class="lightbox-caption"></figcaption>
    </figure>
    <button type="button" class="lightbox-next" aria-label="Foto berikutnya">›</button>
    <div class="lightbox-help">Ketuk di luar foto atau tekan Esc untuk menutup</div>`;
  document.body.appendChild(overlay);

  const largeImage = overlay.querySelector('.lightbox-image');
  const caption = overlay.querySelector('.lightbox-caption');
  let current = 0;
  let previousFocus = null;

  function showImage(index) {
    current = (index + galleryImages.length) % galleryImages.length;
    const thumb = galleryImages[current];
    largeImage.src = thumb.currentSrc || thumb.src;
    largeImage.alt = thumb.alt || 'Foto produk';
    caption.textContent = thumb.closest('figure')?.querySelector('figcaption')?.textContent || `Foto ${current + 1}`;
  }
  function open(index) {
    previousFocus = document.activeElement;
    showImage(index);
    overlay.hidden = false;
    document.body.classList.add('lightbox-open');
    overlay.querySelector('.lightbox-close').focus();
  }
  function close() {
    overlay.hidden = true;
    document.body.classList.remove('lightbox-open');
    if (previousFocus && previousFocus.focus) previousFocus.focus();
  }

  galleryImages.forEach((img, index) => {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `Perbesar ${img.alt || 'foto produk'}`);
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => open(index));
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open(index);
      }
    });
  });
  overlay.querySelector('.lightbox-close').addEventListener('click', close);
  overlay.querySelector('.lightbox-prev').addEventListener('click', () => showImage(current - 1));
  overlay.querySelector('.lightbox-next').addEventListener('click', () => showImage(current + 1));
  overlay.addEventListener('click', event => { if (event.target === overlay) close(); });
  document.addEventListener('keydown', event => {
    if (overlay.hidden) return;
    if (event.key === 'Escape') close();
    else if (event.key === 'ArrowLeft') showImage(current - 1);
    else if (event.key === 'ArrowRight') showImage(current + 1);
  });
});
