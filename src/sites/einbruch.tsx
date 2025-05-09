import { Global } from "../global.ts";

function Einbruch() {
  if (Global.cheated || localStorage.getItem("cheated") === "true") {
    localStorage.setItem("cheated", "true");
    window.location.href = "/txtadv/#/cheat";
  }
  const a = () => {
    alert(
      "Der Schlüssel öffnet den Tresor! Dort ist nur Bargeld und Dokumente.",
    );
  };
  const c = () => {
    Global.deathmsg = "Du hast verckackt (Verübergehender text)";
    window.location.href = "/txtadv/#/gameover";
  };

  const b = () => {
    Global.cheated = false;
    window.location.href = "/txtadv/#/terminal";
  };

  return (
    <div className="bg-main">
      <div id="center-UI" className="flex items-center justify-center h-screen">
        <div>
          <p className="accent text-lg">
            Du knackst das Schloss vom Büro des Schulleiters!
            <br />
            <br />
            Drinnen findest du: <br />
            - 🔒 Einen verschlüsselten Laptop <br />
            - 🔑 Einen Schlüssel <br />
            - 🏦 Einen Tresor <br />
            <br />
            Was willst du tun?
            <br />
            a) Schlüssel am Tresor ausprobieren <br />
            b) Laptop kopieren <br />
            c) Laptop klauen <br />
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div
          id="buttons"
          className="absolute mb-10 bottom-0 mx-auto ustify-between"
        >
          <a className="red mr-3" href="/txtadv/#/anleitung">
            ← zurück
          </a>
          <button className="button mr-3" onClick={a}>
            Wähle option a
          </button>
          <button className="button mr-3" onClick={b}>
            Wähle option b
          </button>
          <button className="button mr-3" onClick={c}>
            Wähle option c
          </button>
        </div>
      </div>
    </div>
  );
}

export default Einbruch;
