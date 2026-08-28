const channels = [
  {id:'tf1', name:'TF1', cat:'general', color:'#004B96', type:'tnt', prog:'20H • Koh-Lanta', viewers: '18,2k', url:'https://www.tf1.fr/tf1/direct', embedBlocked:true},
  {id:'fr2', name:'France 2', cat:'general', color:'#E5292E', type:'tnt', prog:'Journal 20H', viewers: '15,4k', url:'https://www.france.tv/france-2/direct.html', embedBlocked:true},
  {id:'fr3', name:'France 3', cat:'general', color:'#0A4DA1', type:'tnt', prog:'Régions', viewers: '9,1k', url:'https://www.france.tv/france-3/direct.html', embedBlocked:true},
  {id:'fr5', name:'France 5', cat:'general', color:'#7AC143', type:'tnt', prog:'C à vous', viewers: '7,8k', url:'https://www.france.tv/france-5/direct.html', embedBlocked:true},
  {id:'m6', name:'M6', cat:'general', color:'#FF1A1A', type:'tnt', prog:'Top Chef', viewers: '12,9k', url:'https://www.m6.fr/m6/direct', embedBlocked:true},
  {id:'arte', name:'ARTE', cat:'general', color:'#FF4D00', type:'tnt', prog:'Docu 21H', viewers: '6,3k', url:'https://www.arte.tv/fr/direct/', embedBlocked:false, embed:'https://www.arte.tv/fr/direct/'},
  {id:'c8', name:'C8', cat:'general', color:'#1A1A1A', type:'tnt', prog:'TPMP', viewers: '10,2k', url:'https://www.c8.fr/direct', embedBlocked:true},
  {id:'w9', name:'W9', cat:'general', color:'#7B00FF', type:'tnt', prog:'Enquêtes', viewers: '5,4k', url:'https://www.w9.fr/direct', embedBlocked:true},
  {id:'tmc', name:'TMC', cat:'general', color:'#0047FF', type:'tnt', prog:'Quotidien', viewers: '8,7k', url:'https://www.tf1.fr/tmc/direct', embedBlocked:true},
  {id:'tfx', name:'TFX', cat:'general', color:'#FF0080', type:'tnt', prog:'Séries', viewers: '4,1k', url:'https://www.tf1.fr/tfx/direct', embedBlocked:true},
  {id:'lci', name:'LCI', cat:'info', color:'#D50000', type:'info', prog:'24/24 Info', viewers: '3,2k', url:'https://www.tf1info.fr/direct/', embedBlocked:true},
  {id:'bfm', name:'BFMTV', cat:'info', color:'#081A8A', type:'info', prog:'Info en continu', viewers: '11,5k', url:'https://www.bfmtv.com/en-direct/', embedBlocked:false, embed:'https://www.bfmtv.com/en-direct/'},
  {id:'cnews', name:'CNEWS', cat:'info', color:'#003366', type:'info', prog:'Débat', viewers: '4,8k', url:'https://www.cnews.fr/direct', embedBlocked:true},
  {id:'frinfo', name:'franceinfo:', cat:'info', color:'#FFC700', type:'info', prog:'Info', viewers: '2,9k', url:'https://www.francetvinfo.fr/en-direct/tv.html', embedBlocked:false, embed:'https://www.francetvinfo.fr/en-direct/tv.html'},
  {id:'gulli', name:'Gulli', cat:'general', color:'#FFD500', type:'jeunesse', prog:'Jeunesse', viewers: '3,6k', url:'https://www.gulli.fr/direct', embedBlocked:true},
  {id:'lcp', name:'LCP', cat:'info', color:'#0A3D62', type:'info', prog:'Parlement', viewers: '1,2k', url:'https://www.lcp.fr/direct', embedBlocked:false, embed:'https://www.lcp.fr/direct'},
  // BOOST MAX - SPORT
  {id:'lequipe', name:"L'Équipe", cat:'sport', color:'#0A7A2E', type:'sport', prog:'Live Sport 24/24', viewers: '9,8k', url:'https://www.lequipe.fr/Football/direct/', embedBlocked:true},
  {id:'eurosport1', name:'Eurosport 1', cat:'sport', color:'#0A1A4A', type:'sport', prog:'Tennis • Cyclisme', viewers: '7,4k', url:'https://www.eurosport.fr/', embedBlocked:true},
  {id:'rmcsport', name:'RMC Sport', cat:'sport', color:'#D50000', type:'sport', prog:'Ligue des Champions', viewers: '6,1k', url:'https://rmcsport.bfmtv.com/', embedBlocked:true},
  {id:'beinsport', name:'beIN SPORTS', cat:'sport', color:'#00A651', type:'sport', prog:'Foot Live', viewers: '5,9k', url:'https://www.beinsports.com/fr/', embedBlocked:true},
  {id:'canalplus', name:'Canal+', cat:'sport', color:'#000000', type:'sport', prog:'Top 14 • F1', viewers: '4,7k', url:'https://www.canalplus.com/live/', embedBlocked:true},
  {id:'sportfrance', name:'Sport en France', cat:'sport', color:'#003087', type:'sport', prog:'JO • Direct', viewers: '2,8k', url:'https://www.sportenfrance.com/direct/', embedBlocked:false, embed:'https://www.sportenfrance.com/direct/'},
  // JEUNESSE & FAMILLE
  {id:'canalj', name:'Canal J', cat:'jeunesse', color:'#FF6B00', type:'jeunesse', prog:'Dessins animés', viewers: '3,1k', url:'https://www.canalplus.com/enfant/canal-j/', embedBlocked:true},
  {id:'tiji', name:'TiJi', cat:'jeunesse', color:'#E52994', type:'jeunesse', prog:'Petits', viewers: '2,4k', url:'https://www.tiji.fr/', embedBlocked:true},
  {id:'teletoon', name:'Télétoon+', cat:'jeunesse', color:'#FFD500', type:'jeunesse', prog:'Manga', viewers: '2,1k', url:'https://www.teletoonplus.fr/', embedBlocked:true},
  {id:'boomerang', name:'Boomerang', cat:'jeunesse', color:'#00BFFF', type:'jeunesse', prog:'Tom & Jerry', viewers: '1,9k', url:'https://www.boomerangtv.fr/', embedBlocked:true},
  // DECOUVERTE & CULTURE
  {id:'rmcdec', name:'RMC Découverte', cat:'decouverte', color:'#0A2A4A', type:'tnt', prog:'Wheeler Dealers', viewers: '4,3k', url:'https://rmcdecouverte.bfmtv.com/direct/', embedBlocked:true},
  {id:'rmcstory', name:'RMC Story', cat:'decouverte', color:'#1A1A5A', type:'tnt', prog:'Enquêtes', viewers: '3,9k', url:'https://rmcstory.bfmtv.com/direct/', embedBlocked:true},
  {id:'ushaia', name:'Ushuaïa TV', cat:'decouverte', color:'#0A7A52', type:'decouverte', prog:'Nature 4K', viewers: '2,2k', url:'https://www.ushuaiatv.fr/', embedBlocked:true},
  {id:'euronews', name:'Euronews', cat:'info', color:'#003366', type:'info', prog:'Europe Info', viewers: '1,8k', url:'https://fr.euronews.com/live', embedBlocked:false, embed:'https://fr.euronews.com/live'},
  {id:'france24', name:'France 24', cat:'info', color:'#0099CC', type:'info', prog:'Monde 24/24', viewers: '3,3k', url:'https://www.france24.com/fr/direct', embedBlocked:false, embed:'https://www.france24.com/fr/direct'},
  // MUSIQUE & DIVERTISSEMENT
  {id:'nrjhits', name:'NRJ Hits', cat:'musique', color:'#FF0080', type:'musique', prog:'Clips non-stop', viewers: '2,6k', url:'https://www.nrj.fr/nrj-hits', embedBlocked:true},
  {id:'mtv', name:'MTV', cat:'musique', color:'#000000', type:'musique', prog:'Hits', viewers: '2,1k', url:'https://www.mtv.fr/', embedBlocked:true},
  {id:'mcm', name:'MCM', cat:'musique', color:'#FFD500', type:'musique', prog:'Top 50', viewers: '1,7k', url:'https://www.mcm.fr/', embedBlocked:true},
  {id:'gameone', name:'Game One', cat:'musique', color:'#7B00FF', type:'musique', prog:'Gaming • Esport', viewers: '1,4k', url:'https://www.gameone.net/', embedBlocked:true},
];

const tonight = [
  {ch:'TF1', title:'Koh-Lanta — Finale', hour:'21:10', badge:'🔥 Top', color:'#004B96'},
  {ch:'France 2', title:'Envoyé Spécial', hour:'21:05', badge:'Nouveau', color:'#E5292E'},
  {ch:'M6', title:'Top Chef — Demi-finale', hour:'21:10', badge:'Inédit', color:'#FF1A1A'},
  {ch:'Arte', title:'Docu : Les océans', hour:'20:50', badge:'4K', color:'#FF4D00'},
];

// storage helpers
const favKey='hexa_fav', histKey='hexa_hist';
const getFav=()=>JSON.parse(localStorage.getItem(favKey)||'[]');
const setFav=(a)=>localStorage.setItem(favKey, JSON.stringify(a));
const getHist=()=>JSON.parse(localStorage.getItem(histKey)||'[]');
const setHist=(a)=>localStorage.setItem(histKey, JSON.stringify(a.slice(0,8)));

function toggleFav(id){
  let fav=getFav();
  if(fav.includes(id)) fav=fav.filter(x=>x!==id);
  else fav.push(id);
  setFav(fav);
  render(); renderFav(); renderContinue();
  toast(fav.includes(id)?'Ajouté aux favoris ♡':'Retiré des favoris');
  // update hero heart
  updateHeroHeart();
}
function addHistory(ch){
  let h=getHist().filter(x=>x.id!==ch.id);
  h.unshift({id:ch.id, name:ch.name, color:ch.color, prog:ch.prog, at:Date.now()});
  setHist(h); renderContinue();
}
function clearHistory(){ localStorage.removeItem(histKey); renderContinue(); }

function toast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2200);
}

// rendering
const grid=document.getElementById('gridChannels');
let currentFilter='all';
let currentSearch='';
function render(){
  const fav=getFav();
  grid.innerHTML='';
  let list=channels.filter(c=>{
    if(currentFilter==='fav') return fav.includes(c.id);
    if(currentFilter!=='all' && c.type!==currentFilter) return false;
    if(currentSearch && !c.name.toLowerCase().includes(currentSearch) && !c.prog.toLowerCase().includes(currentSearch)) return false;
    return true;
  });
  if(list.length===0){
    grid.innerHTML='<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:20px">Aucun résultat — essaye "TF1" ou "info"</p>';
    return;
  }
  list.forEach(ch=>{
    const isFav=fav.includes(ch.id);
    const div=document.createElement('div');
    div.className='channel-card';
    div.innerHTML=`
      <span class="ch-live">● LIVE</span>
      <button class="ch-heart ${isFav?'active':''}" data-heart="${ch.id}">${isFav?'♥':'♡'}</button>
      <div class="ch-logo" style="color:${ch.color};border-color:${ch.color}30;background:${ch.color}12">${ch.name}</div>
      <div class="ch-name">${ch.name}</div>
      <div class="ch-meta">${ch.prog}</div>
      <div class="ch-viewers">👁 ${ch.viewers} • HD</div>
    `;
    div.querySelector('.ch-heart').onclick=(e)=>{e.stopPropagation(); toggleFav(ch.id)};
    div.onclick=()=>playInHero(ch);
    grid.appendChild(div);
  });
}
function renderFav(){
  const fav=getFav();
  const row=document.getElementById('rowFav');
  const g=document.getElementById('favGrid');
  if(fav.length===0){ row.style.display='none'; return;}
  row.style.display='block';
  g.innerHTML='';
  fav.forEach(id=>{
    const ch=channels.find(c=>c.id===id);
    if(!ch) return;
    const d=document.createElement('div');
    d.className='mini-card';
    d.innerHTML=`<div class="ch-logo" style="color:${ch.color}">${ch.name}</div><div class="ch-name">${ch.name}</div><div class="ch-meta">${ch.prog}</div>`;
    d.onclick=()=>playInHero(ch);
    g.appendChild(d);
  });
}
function renderContinue(){
  const h=getHist();
  const row=document.getElementById('rowContinue');
  const g=document.getElementById('continueGrid');
  if(h.length===0){ row.style.display='none'; return;}
  row.style.display='block';
  g.innerHTML='';
  h.forEach(item=>{
    const d=document.createElement('div');
    d.className='mini-card';
    d.innerHTML=`<div class="ch-logo" style="color:${item.color}">${item.name}</div><div class="ch-name">${item.name}</div><div class="ch-meta">${item.prog}</div><div class="ch-viewers">Reprendre ▶</div>`;
    d.onclick=()=>{ const ch=channels.find(c=>c.id===item.id); if(ch) playInHero(ch);};
    g.appendChild(d);
  });
}
function renderTonight(){
  const g=document.getElementById('tonightGrid');
  g.innerHTML='';
  tonight.forEach(t=>{
    const d=document.createElement('div');
    d.className='tonight-card';
    d.innerHTML=`<div class="tonight-thumb" style="background:${t.color}18;border-bottom:1px solid ${t.color}30"><span style="color:${t.color}">${t.ch}</span><span class="tonight-badge">${t.badge} • ${t.hour}</span></div><div class="tonight-info"><h4>${t.title}</h4><p>${t.ch} • Ce soir</p></div>`;
    d.onclick=()=>{ const ch=channels.find(c=>c.name===t.ch); if(ch) playInHero(ch);};
    g.appendChild(d);
  });
}
render(); renderFav(); renderContinue(); renderTonight();

// HERO PLAYER - integrated
let currentChannel=null;
const heroIframe=document.getElementById('heroIframe');
const heroPlaceholder=document.getElementById('heroPlaceholder');
const heroChannelName=document.getElementById('heroChannelName');
const heroMeta=document.getElementById('heroMeta');
const viewerCountEl=document.getElementById('viewerCount');
const btnOpenOfficial=document.getElementById('btnOpenOfficial');
function playInHero(ch){
  currentChannel=ch;
  addHistory(ch);
  heroChannelName.textContent=ch.name+' — '+ch.prog;
  viewerCountEl.textContent=ch.viewers;
  btnOpenOfficial.style.display='inline-flex';
  btnOpenOfficial.onclick=()=>{ window.open(ch.url,'_blank'); showWatchBar(ch); };
  updateHeroHeart();
  // show ad simulation
  heroPlaceholder.innerHTML=`<div style="background:rgba(245,158,11,0.12);border:1px dashed #F59E0B;border-radius:10px;padding:10px;margin-bottom:10px;color:#F59E0B;font-size:12px;font-weight:700">⏳ Pub 5s — Ton revenu AdSense</div><p>Chargement de ${ch.name}...</p>`;
  heroPlaceholder.style.display='block';
  heroIframe.style.display='none';
  heroMeta.textContent= ch.embedBlocked ? 'Ouverture officielle • Tu gardes HexaLive en arrière-plan' : 'Lecture intégrée • Reste sur HexaLive';

  setTimeout(()=>{
    if(ch.embedBlocked){
      // FRANCE.TV / TF1 bloquent l'iframe par sécurité (X-Frame-Options) — c'est normal et légal
      heroPlaceholder.innerHTML=`
        <div style="width:72px;height:72px;background:${ch.color};color:white;border-radius:16px;display:flex;align-items:center;justify-content:center;font-weight:800;margin:0 auto 12px;font-size:22px;box-shadow:0 8px 24px ${ch.color}40">${ch.name[0]}</div>
        <h4 style="margin-bottom:6px">${ch.name} — ${ch.prog}</h4>
        <p style="color:#8A94AD;font-size:12px;max-width:380px;margin:0 auto 12px">France.tv / TF1 bloquent l'affichage intégré par sécurité (c'est la loi). Clique ci-dessous, le direct s'ouvre dans un nouvel onglet, mais <strong>tu restes sur HexaLive</strong> pour zapper et revoir tes favoris.</p>
        <a href="${ch.url}" target="_blank" class="hero-open-link" style="display:inline-flex;background:linear-gradient(135deg,#00E5CC,#0EA5E9);color:#02141A;padding:12px 22px;border-radius:999px;font-weight:800;text-decoration:none;box-shadow:0 8px 20px rgba(0,229,204,0.3)">▶ Ouvrir ${ch.name} en HD sur ${new URL(ch.url).hostname} →</a>
        <p style="font-size:10px;color:#5A6A90;margin-top:10px">💡 Business : l'utilisateur revient sur HexaLive après → il voit ta pub 300x250 qui reste affichée. Tu gagnes même sans iframe.</p>
      `;
      heroIframe.style.display='none';
      heroPlaceholder.style.display='block';
      setTimeout(()=>{
        const a=heroPlaceholder.querySelector('.hero-open-link');
        if(a) a.addEventListener('click', ()=>showWatchBar(ch));
      }, 50);
      // auto show bar after preview too
      setTimeout(()=>{ if(ch.embedBlocked) showWatchBar(ch); }, 1500);
    } else {
      heroPlaceholder.style.display='none';
      heroIframe.style.display='block';
      heroIframe.src=ch.embed;
    }
  }, 900);
  if(window.innerWidth<900) document.getElementById('heroPlayerCard').scrollIntoView({behavior:'smooth', block:'center'});
  toast('▶ '+ch.name+' prêt — '+(ch.embedBlocked?'ouverture officielle':'lecture intégrée'));
}
function updateHeroHeart(){
  const btn=document.getElementById('heroFavBtn');
  if(!currentChannel){ btn.textContent='♡'; btn.classList.remove('active'); return;}
  const fav=getFav();
  const isFav=fav.includes(currentChannel.id);
  btn.textContent=isFav?'♥':'♡';
  btn.classList.toggle('active', isFav);
}
document.getElementById('heroFavBtn').onclick=()=>{
  if(!currentChannel) return toast('Choisis une chaîne d\'abord');
  toggleFav(currentChannel.id);
};
document.getElementById('btnFavHero').onclick=()=>{
  if(!currentChannel) return document.getElementById('direct').scrollIntoView({behavior:'smooth'});
  toggleFav(currentChannel.id);
};

// filters
document.querySelectorAll('.filter').forEach(b=>{
  b.onclick=()=>{
    document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    currentFilter=b.dataset.filter;
    render();
  }
});
// search
function onSearch(v){ currentSearch=v.toLowerCase().trim(); render(); }
document.getElementById('searchInput').addEventListener('input', e=>onSearch(e.target.value));
const mob=document.getElementById('searchInputMobile');
if(mob) mob.addEventListener('input', e=>{ document.getElementById('searchInput').value=e.target.value; onSearch(e.target.value); });

// modal still available for extra
const modal=document.getElementById('modal');
const modalTitle=document.getElementById('modalTitle');
const modalPlayer=document.getElementById('modalPlayer');
const modalLink=document.getElementById('modalLink');
function openModal(ch){
  modalTitle.textContent=ch.name;
  modalLink.href=ch.url;
  if(ch.embedBlocked){
    modalPlayer.innerHTML=`<div style="text-align:center;padding:20px"><div style="width:64px;height:64px;background:${ch.color};color:white;border-radius:14px;display:flex;align-items:center;justify-content:center;font-weight:800;margin:0 auto 12px">${ch.name[0]}</div><p style="font-weight:700">${ch.name} — Flux protégé</p><p style="font-size:12px;color:#8A94AD;margin:8px 0">Ce diffuseur bloque l'iframe (France.tv/TF1). Utilise le bouton ci-dessous.</p><a href="${ch.url}" target="_blank" style="display:inline-flex;background:linear-gradient(135deg,#00E5CC,#0EA5E9);color:#02141A;padding:10px 18px;border-radius:999px;font-weight:700;text-decoration:none">Ouvrir sur ${new URL(ch.url).hostname} →</a></div>`;
  } else {
    modalPlayer.innerHTML=`<iframe src="${ch.embed}" allowfullscreen></iframe>`;
  }
  modal.classList.add('open');
}
document.getElementById('modalClose').onclick=()=>modal.classList.remove('open');
modal.onclick=(e)=>{ if(e.target===modal) modal.classList.remove('open'); }
document.getElementById('modalFavBtn').onclick=()=>{
  const ch=channels.find(c=>c.name===modalTitle.textContent);
  if(ch) toggleFav(ch.id);
};

// burger
document.getElementById('burger').onclick=()=>document.getElementById('mobileNav').classList.toggle('open');

// live count animation
setInterval(()=>{
  const el=document.getElementById('liveCount');
  let n=parseInt(el.textContent.replace(/\s/g,''));
  n+=Math.floor(Math.random()*40-20);
  el.textContent=n.toLocaleString('fr-FR');
  const v=document.getElementById('viewerCount');
  if(currentChannel){
    let vv=parseInt(currentChannel.viewers.replace(',','.').replace('k',''))*1000;
    vv+=Math.floor(Math.random()*80-40);
    v.textContent=(vv/1000).toFixed(1)+'k';
  }
},3000);

// PWA
let deferredPrompt;
const btnInstall=document.getElementById('btnInstall');
const btnInstall2=document.getElementById('btnInstall2');
window.addEventListener('beforeinstallprompt', e=>{
  e.preventDefault(); deferredPrompt=e;
  btnInstall.style.display='inline-flex';
  if(btnInstall2) btnInstall2.style.display='inline-flex';
});
function installApp(){
  if(deferredPrompt){ deferredPrompt.prompt(); deferredPrompt.userChoice.then(()=>deferredPrompt=null); }
  else alert('iPhone : Partager → Sur l\'écran d\'accueil\nAndroid : Menu ⋮ → Installer l\'application');
}
if(btnInstall) btnInstall.onclick=installApp;
if(btnInstall2) btnInstall2.onclick=installApp;

// watch bar sticky
function showWatchBar(ch){
  const bar=document.getElementById('watchBar');
  const txt=document.getElementById('watchText');
  const btn=document.getElementById('watchReopen');
  if(!bar||!ch) return;
  txt.innerHTML=`Tu regardes <strong>${ch.name}</strong> en direct — <span style="opacity:0.85">reviens zapper quand tu veux</span>`;
  btn.onclick=()=>window.open(ch.url,'_blank');
  bar.style.display='block';
  // keep PWA prompt visible
  localStorage.setItem('hexa_last_watch', ch.id);
}
window.showWatchBar=showWatchBar;
// auto restore bar if user returns
const lastWatch=localStorage.getItem('hexa_last_watch');
if(lastWatch){
  const ch=channels.find(c=>c.id===lastWatch);
  if(ch) setTimeout(()=>showWatchBar(ch), 800);
}

// newsletter fake
function subscribe(){
  const v=document.getElementById('emailInput').value.trim();
  if(!v.includes('@')) return toast('Entre un vrai email');
  localStorage.setItem('hexa_email', v);
  toast('✅ Inscrit ! Tu recevras le programme à 18h (gratuit)');
  document.getElementById('emailInput').value='';
}
window.subscribe=subscribe;
window.clearHistory=clearHistory;
window.openModal=openModal;

// auto play France 2 after 1s to show integrated effect
setTimeout(()=>playInHero(channels[1]), 800);
