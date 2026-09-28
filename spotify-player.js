/* Lisa's Universe — Spotify Player
   Song: "her" by JVKE
*/

(function () {
  const TRACK_URL =
    "https://open.spotify.com/embed/track/2Kc8MeW8prVwHEREYM3wCG?utm_source=generator&theme=0";

  function addSpotifyPlayer() {
    if (document.getElementById("lisa-spotify-player")) return;

    const player = document.createElement("div");

    player.id = "lisa-spotify-player";

    player.setAttribute(
      "aria-label",
      "Spotify player for her by JVKE"
    );

    Object.assign(player.style, {
      position: "fixed",
      right: "16px",
      bottom: "16px",
      zIndex: "99999",
      width: "min(352px, calc(100vw - 32px))",
      height: "152px",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 12px 35px rgba(0, 0, 0, 0.28)",
      background: "#111"
    });

    const iframe = document.createElement("iframe");

    iframe.src = TRACK_URL;
    iframe.title = "Play her by JVKE on Spotify";
    iframe.width = "100%";
    iframe.height = "152";
    iframe.frameBorder = "0";

    iframe.allow =
      "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";

    iframe.loading = "lazy";

    player.appendChild(iframe);
    document.body.appendChild(player);

    const style = document.createElement("style");

    style.textContent = `
      #lisa-spotify-player {
        transition:
          transform 0.25s ease,
          opacity 0.25s ease;
      }

      #lisa-spotify-player:hover {
        transform: translateY(-3px);
      }

      @media (max-width: 600px) {
        #lisa-spotify-player {
          right: 10px !important;
          bottom: 10px !important;
          width: calc(100vw - 20px) !important;
          height: 152px !important;
          border-radius: 14px !important;
        }
      }

      @media (min-width: 601px) and (max-width: 1024px) {
        #lisa-spotify-player {
          right: 14px !important;
          bottom: 14px !important;
          width: 340px !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      addSpotifyPlayer
    );
  } else {
    addSpotifyPlayer();
  }
})();
