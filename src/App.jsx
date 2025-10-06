import { useState } from "react";
import { episodeList as episodeData } from "./data";

function EpisodeListView({ episodes, onSelect }) {
  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.id} onClick={() => onSelect(episode)}>
          {episode.title}
        </li>
      ))}
    </ul>
  );
}

function EpisodeDetails({ episode }) {
  return (
    <div class="details">
      <h2>{episode.title}</h2>
      <p>Episode #{episode.id}</p>
      <p>{episode.description}</p>
    </div>
  );
}

function App() {
  const [episodes] = useState(episodeData);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div>
      <h1>Episode Explorer</h1>
      <EpisodeListView episodes={episodes} onSelect={setSelectedEpisode} />
      {selectedEpisode ? (
        <EpisodeDetails episode={selectedEpisode} />
      ) : (
        <p>Please select an episode to see the details.</p>
      )}
    </div>
  );
}

export default App;
