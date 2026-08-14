import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

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
},    {
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

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="gallery-title">My Photo Gallery</h1>

      <input
        type="text"
        placeholder="Search a photo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="gallery">
        {filteredPhotos.map((photo) => (
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