
function Confetti() {
  const pieces = Array.from({ length: 45 });

  return (
    <div className="confetti">
      {pieces.map((_, index) => (
        <span
          key={index}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.6}s`,
          }}
        ></span>
      ))}
    </div>
  );
}

export default Confetti;