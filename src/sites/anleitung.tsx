function Anleitung() {
  return (
    <div className="bg-main h-screen flex flex-col items-center justify-center">
      <p className="accent font-bold text-xl">
        Willkommen bei Final Grade: Hacked!
        <br />
        <br />
        Du bist Max, ein Schüler, der kurz vorm Sitzenbleiben steht.
        <br />
        Aber du gibst nicht auf!
        <br />
        Dein Ziel: Deine Noten retten – mit allen Mitteln.
      </p>
      <div className="mt-7 flex justify-between">
        <a className="red mr-3" href="/txtadv/#/">
          ← zurück
        </a>
        <a className="a" href="/txtadv/#/first">
          weiter →
        </a>
      </div>
    </div>
  );
}

export default Anleitung;
