import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "../components/VideoList";
import VideoDetail from "./VideoDetail";
const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSelect = (selection) => {
    setSelectedVideo(selection);
  };
  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
      {selectedVideo ? (
        <VideoDetail
          title={selectedVideo.snippet.title}
          description={selectedVideo.snippet.description}
          id={selectedVideo.id.videoId}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
