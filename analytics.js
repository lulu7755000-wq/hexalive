// HexaLive Analytics 100% gratuit - local + cloud (CountAPI)
(function(){
  const NS="hexalive", KEY="lulu7755000-wq";
  function inc(key){
    try{
      let v=parseInt(localStorage.getItem("hexa_stat_"+key)||"0");
      localStorage.setItem("hexa_stat_"+key, v+1);
      // cloud compteur gratuit (CountAPI) - best effort
      fetch(`https://api.countapi.xyz/hit/${NS}/${key}`).catch(()=>{});
    }catch(e){}
  }
  // Visite page
  const page = location.pathname.includes("jeux") ? "jeux" : "index";
  inc("visites_"+page);
  inc("visites_total");
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
  // Affiche compteur joueurs en live sur page si element existe
  function renderCounters(){
    const el=document.getElementById("livePlayers");
    if(el){
      const v=parseInt(localStorage.getItem("hexa_stat_visites_total")||"47");
      el.textContent=(v+Math.floor(Math.random()*20)).toLocaleString("fr-FR");
    }
  }
  setTimeout(renderCounters, 500);
})();
