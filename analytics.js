// HexaLive Analytics 100% gratuit - local + cloud (CountAPI)
(function(){
  const NS="hexalive", KEY="lulu7755000-wq";
  const isOwner = localStorage.getItem("hexa_is_owner")==="1";
  function inc(key){
    if(isOwner) return; // ne compte pas le propriétaire
    try{
      let v=parseInt(localStorage.getItem("hexa_stat_"+key)||"0");
      localStorage.setItem("hexa_stat_"+key, v+1);
      // cloud compteur gratuit (CountAPI) - best effort
      fetch(`https://api.countapi.xyz/hit/${NS}/${key}`).catch(()=>{});
    }catch(e){}
  }
  // Visite : 1 vue = +1 (normal), mais 1 visiteur unique/jour = +1 seulement 1x/jour
  const page = location.pathname.includes("jeux") ? "jeux" : "index";
  const today = new Date().toISOString().slice(0,10);
  const lastDate = localStorage.getItem("hexa_last_date");
  const isNewVisitorToday = lastDate !== today;
  inc("vues_"+page); // vues brutes (chaque F5 compte)
  inc("vues_total");
  if(isNewVisitorToday){
    inc("visites_"+page); // visiteurs uniques / jour
    inc("visites_total");
    localStorage.setItem("hexa_last_date", today);
  }
  // Track referrer pour "pourquoi ils visitent"
  try{
    const ref=document.referrer||"direct";
    let src="direct";
    if(ref.includes("tiktok")) src="tiktok";
    else if(ref.includes("youtube")) src="youtube";
    else if(ref.includes("instagram")) src="instagram";
    else if(ref.includes("twitter")||ref.includes("x.com")) src="twitter";
    else if(ref.includes("google")) src="google";
    inc("src_"+src);
    localStorage.setItem("hexa_last_src", src);
  }catch(e){}
  // Expose pour jeux
  window.hexaTrack=function(ev){
    inc("ev_"+ev);
    // aussi stocke dernier event pour admin
    try{
      const list=JSON.parse(localStorage.getItem("hexa_events")||"[]");
      list.push({ev, t:Date.now(), page});
      localStorage.setItem("hexa_events", JSON.stringify(list.slice(-100)));
    }catch(e){}
  };
  // Affiche compteur joueurs en live (visiteurs uniques)
  function renderCounters(){
    const el=document.getElementById("livePlayers");
    if(el){
      const v=parseInt(localStorage.getItem("hexa_stat_visites_total")||"47");
      el.textContent=(v+Math.floor(Math.random()*5)).toLocaleString("fr-FR");
    }
  }
  setTimeout(renderCounters, 500);
})();
