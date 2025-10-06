import { useState } from "react";
import { EpisodeList } from "data";
import "index.css";

function EpisodeList({ episodes, onSelect }) {
  return (
    <ul className="episode-list">
      {episodes.map((ep) => (
        <li key={ep.id} onClick={() => onSelect(ep)} className="episode-item">
          {ep.name}
        </li>
      ))}
    </ul>
  );
}

function EpisodeDetails({ episode }) {
  return (
    <div className="episode-details">
      <h2>{episode.name}</h2>
      <p>Episode #{episode.number}</p>
      <p>{episode.description}</p>
    </div>
  );
}

function App() {
  const [episodes] = useState(initialEpisodes);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="app-container">
      <h1>Episode Explorer</h1>
      <EpisodeList episodes={episodes} onSelect={setSelectedEpisode} />
      {selectedEpisode ? (
        <EpisodeDetails episode={selectedEpisode} />
      ) : (
        <p className="prompt">Please select an episode to see the details.</p>
      )}
    </div>
  );
}

export default App;
