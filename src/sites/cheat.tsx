import { Global } from "../global.ts";

function Cheat() {
  const a = () => {
    localStorage.removeItem("cheated");
    Global.cheated = true;
    window.location.href = "/txtadv/#/";
  };
  return (
    <div className="bg-main h-screen flex flex-col items-center justify-center">
      <p className="accent font-bold text-xl whitespace-pre-line">
        Ich denke du hast gecheated! 🤯
        <br />
        Das will ich nicht nochmal sehen!
      </p>
      <br />
      <br />
      <div className="mt-7 flex justify-between">
        <button className="red mr-3" onClick={a}>
          Neu Starten
        </button>
      </div>
    </div>
  );
}

export default Cheat;
