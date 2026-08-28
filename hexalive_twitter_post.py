import sys, random
from datetime import datetime
from pathlib import Path
sys.stdout.reconfigure(encoding='utf-8')
sys.path.insert(0, r"C:\Users\gg_77\Documents\Default Project\breaknews-bot-tech-ia")
from twitter_poster import post_tweet_with_video
# Variation anti-duplicate X : ajoute heure/minute
variations = [
    "🚨 Nouveauté HexaLive : 40+ chaînes françaises en DIRECT gratuit & légal !",
    "📺 HexaLive — 40 chaînes en 1 clic : TF1 • France 2 • M6 • Arte • Sport !",
    "⚽ HexaLive boosté : Sport • Info • Jeunesse • Musique en DIRECT !",
]
base = random.choice(variations)
text = f"""{base}
TF1 • France 2 • M6 • Arte • BFMTV • L'Équipe en 1 clic, sans inscription.
➡️ https://lulu7755000-wq.github.io/hexalive/  ({datetime.now().strftime('%d/%m %Hh%M')})
#HexaLive #Direct #Gratuit"""
video = r"C:\Users\gg_77\Documents\Default Project\hexa-live\promo_hexalive.mp4"
print("Posting HexaLive to X...")
ok = post_tweet_with_video(text, video)
print("OK" if ok else "ECHEC")
sys.exit(0 if ok else 1)
