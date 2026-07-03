import { useState } from "react";
import Confetti from "./Confetti";

function Surprise() {
  const [confetti, setConfetti] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
    setConfetti(true);

    setTimeout(() => {
      setConfetti(false);
      setOpen(true);
    }, 2800);
  };

  return (
    <section className="surprise" id="surprise">
      {confetti && <Confetti />}

      <h2 className="section-title">A Tiny Surprise</h2>

      <p className="section-subtitle">
        Every birthday deserves a little magic... so here's yours. ✨
      </p>

      <button className="gift-btn" onClick={handleClick}>
        🎁
      </button>

      {open && (
        <div className="surprise-message">
          <h3>📜 Birthday Terms & Conditions</h3>

          <p>By turning one year older, you officially agree to:</p>

          <p>
            ✨ Keep being the beautiful soul you are.<br />
            💸 Become rich enough for our random plans.<br />
                Never Forget to give me tea and IM THERE FOR U ALWAYS.<br />
            🌸 Protect your peace at all costs.<br />
            🍕 Never say no to food with me.<br />
            📱 Reply to my reels... eventually.<br />
            🤍 Keep me as your lifetime best friend.
          </p>

          <p>
            Failure to comply may result in surprise visits, emotional
            blackmail, food dates, and me reminding you that you're stuck with
            me forever.
          </p>

          <p>
            <strong>Signed:</strong> Yours GOAT Mana .<br />
            <strong>Status:</strong> Permanent. Non-negotiable. 🤍
          </p>
        </div>
      )}
    </section>
  );
}

export default Surprise;