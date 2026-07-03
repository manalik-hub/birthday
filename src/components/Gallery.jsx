const photos = [
  {
    src: "/photos/photo1.jpg",
    caption: "POlar opposites but magneticaly same 🤍",
  },
  {
    src: "/photos/photo2.jpg",
    caption: "Every picture tells a story.",
  },
  {
    src: "/photos/photo3.jpg",
    caption: "her  favorite smile",
  },
  {
    src: "/photos/photo4.jpg",
    caption: "not those blue but the prettiest shade of blue",
  },
  {
    src: "/photos/photo5.jpg",
    caption: "One more memory I'll always keep.",
  },
  {
    src: "/photos/photo6.jpg",
    caption: "Forever grateful for you. 💗",
  },
];

function Gallery() {
  return (
    <section className="gallery">
      <h2 className="section-title">Our Little Scrapbook</h2>

      <p className="section-subtitle">
        Every photo here holds a tiny piece of our friendship.
      </p>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="polaroid" key={index}>
            <img src={photo.src} alt={photo.caption} />
            <p>{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;