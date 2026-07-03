const moments = [
  {
    title: "The Day We Met",
    text: "from LKG to 2026 ? you brought me to class held me to right path that day nd till date !",
  },
  {
    title: "Our Random Talks",
    text: "The jokes, drama, advice, and nonsense that somehow made everything calm the clamer something i always crave .",
  },
  {
    title: "Always There",
    text: "Through happy days and messy days, you have always felt like home.",
  },
  {
    title: "Today",
    text: "A day to celebrate you  : your heart, your smile, your magic.",
  },
];

function Timeline() {
  return (
    <section className="timeline">
      <h2 className="section-title">Our Little Story</h2>
      <p className="section-subtitle">
        Some friendships do not need big explanations. They just feel right.
      </p>

      <div className="timeline-box">
        {moments.map((moment, index) => (
          <div className="timeline-item" key={index}>
            <span>{index + 1}</span>
            <div>
              <h3>{moment.title}</h3>
              <p>{moment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;