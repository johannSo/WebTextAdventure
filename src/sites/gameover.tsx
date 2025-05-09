import { Global } from "../global.ts";

function Gameover() {
  return (
    <div className="bg-main h-screen flex flex-col items-center justify-center">
      <p className="accent font-bold text-xl whitespace-pre-line">
        {Global.deathmsg}
      </p>
      <br />
      <p className="accent font-bold text-xl">Game Over 😭</p>
      <div className="mt-7 flex justify-between">
        <a className="red mr-3" href="/txtadv/#/">
          Neu Starten
        </a>
      </div>
    </div>
  );
}

export default Gameover;
