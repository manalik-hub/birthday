function Hero() {
  return (
    <section className="hero">
      <div className="floating heart-one">♡</div>
      <div className="floating heart-two">♡</div>
      <div className="floating star-one">✦</div>

      <div className="hero-content">
        <p className="tag">a little birthday world made with love</p>

        <h1>
          Happy Birthday
          <span>Akanksha</span>
        </h1>

        <p className="subtitle">my favorite human, my forever person</p>

        <p className="hero-message">
          Today is special because it gave the world someone as kind, funny,
          beautiful, and precious as you. I hope this year brings you soft
          mornings, loud laughs, big dreams, and all the love you deserve.
        </p>

        <a href="#surprise" className="main-btn">
          Open Your Surprise 🎁
        </a>
      </div>

      <img src="/photos/Hero.jpg" alt="Birthday memory" className="hero-img" />
    </section>
  );
}

export default Hero;