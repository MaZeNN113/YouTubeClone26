import './HomePage.css';
import TopicRecommendations from './components/TopicRecommendations/TopicRecommendations.jsx';
import VideoGrid from './components/VideoGrid/VideoGrid.jsx';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { useState } from 'react';
import { videos } from '../../data/videos.js';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [draftQuery, setDraftQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([...videos]);

  function handleInput(event) {
    setDraftQuery(event.target.value);
  }

  function searchVideos() {
    setSearchQuery(draftQuery);
    const newSearch = draftQuery.trim().toLowerCase().split(' ');

    setFilteredVideos(
      videos.filter((video) => {
        const searchableContent = (
          video.title +
          '' +
          video.channelName +
          '' +
          video.keywords.join(' ')
        ).toLowerCase();

        return newSearch.every((word) => searchableContent.includes(word));
      }),
    );
  }

  return (
    <>
      <title>YouTube</title>
      <Header searchVideos={searchVideos} handleInput={handleInput} />
      <TopicRecommendations />
      <Sidebar />
      <VideoGrid videos={filteredVideos} />
    </>
  );
}

export default HomePage;
