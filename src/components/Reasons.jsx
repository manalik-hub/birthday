const reasons = [
  {
    title: "Biggest Heart",
    text: "You care so deeply and make people feel safe around you. i admire how u always have soft croner for people i forget ppl but u will always make everyone feel special even if years have gone ",
  },
  {
    title: "Sunshine Energy",
    text: "You turn ordinary days into so much  fun , chaotic and memorable.",
  },
  {
    title: "Strong & Beautiful",
    text: "You handle life with grace, even when things are hard. you ACt ! very few i have seen with such perfect timings ",
  },
  {
    title: "My Favorite Person",
    text: "Having you as my friend is genuinely one of my biggest blessings.",
  },
];

function Reasons() {
  return (
    <section className="reasons">
      <h2 className="section-title">Why You Are Amazing</h2>
      <p className="section-subtitle">
        I could write a whole book, but here is a tiny start.
      </p>

      <div className="reason-grid">
        {reasons.map((reason, index) => (
          <div className="reason-card" key={index}>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reasons;