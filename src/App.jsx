function App() {
  const photos = [
    {
      id: 1,
      title: "Grande Mosquée d'Alger",
      image: "/images/grande-mosquee.png",
    },
    {
      id: 2,
      title: "Grande Poste d'Alger",
      image: "/images/grande-poste.png",
    },
    {
      id: 3,
      title: "La Casbah d'Alger",
      image: "/images/casbah.jpg",
    },
    {
      id: 4,
      title: "Maqam Echahid",
      image: "/images/maqam-echahid.jpg",
    },
    {
      id: 5,
      title: "Port d'Alger",
      image: "/images/port-alger.jpg",
    },
    {
      id: 6,
      title: "Hassiba Ben Bouali",
      image: "/images/hassiba-monument.jpg",
    },
  ];

  return (
    <div className="app">
      <h1 className="gallery-title">My Photo Gallery</h1>

      <div className="gallery">
        {photos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <img src={photo.image} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;