import { Global } from "../global.ts";

function First() {
  const a = () => {
    Global.deathmsg =
      "Du versuchst zu lernen...\nAber nach 30 Minuten gibst du auf und schläfst ein 💤.";
    window.location.href = "/txtadv/#/gameover";
  };
  const d = () => {
    Global.deathmsg = "Die Lehrer lassen sich nicht bestechen.";
    window.location.href = "/txtadv/#/gameover";
  };

  const c = () => {
    Global.deathmsg =
      "Du startest dein Hacking-Programm...\nAber die Schul-Server sind zu gut gesichert!\nDer Hack wird entdeckt und zurückverfolgt!\n\nAm Abend bekommst du eine E-Mail:\n'Sie wurden beim Hacken der Schulsysteme erwischt.'\n\nDeine Eltern rasten komplett aus!\nDein PC wird einkassiert, du bleibst sitzen...";
    window.location.href = "/txtadv/#/gameover";
  };

  const b = () => {
    Global.cheated = false;
    window.location.href = "/txtadv/#/einbruch";
  };

  return (
    <div className="bg-main">
      <div id="center-UI" className="flex items-center justify-center h-screen">
        <div>
          <p className="accent text-lg">
            Willst du:
            <br />
            <br />
            🧠 a) Lernen für die nächsten Tests <br />
            🕵️‍♂️ b) In das Büro des Schulleiters einbrechen <br />
            💻 c) Einen Hack auf die Schulserver starten <br />
            💵 d) Die Lehrer bestechen
            <br />
            <br />
            <br />
            (Jeder Weg hat seine Konsequenzen... Gute oder Schlechte)
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
          <a className="button mr-3" onClick={a}>
            Wähle option a
          </a>
          <a className="a mr-3" onClick={b}>
            Wähle option b
          </a>
          <a className="button mr-3" onClick={c}>
            Wähle option c
          </a>
          <a className="button" onClick={d}>
            Wähle option d
          </a>
        </div>
      </div>
    </div>
  );
}

export default First;
