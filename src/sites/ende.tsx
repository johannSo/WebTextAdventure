import { Global } from "../global.ts";

function Ende() {
  if (Global.cheated || localStorage.getItem("cheated") === "true") {
    localStorage.setItem("cheated", "true");
    window.location.href = "/txtadv/#/cheat";
  }
  return (
    <div className="bg-main h-screen flex flex-col items-center justify-center">
      <p className="accent font-bold text-xl whitespace-pre-line">
        Du hast es geschafft!
      </p>
    </div>
  );
}

export default Ende;
