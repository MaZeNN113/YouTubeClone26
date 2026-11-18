import './HomePage.css';
import TopicRecommendations from './components/TopicRecommendations/TopicRecommendations.jsx';
import VideoGrid from './components/VideoGrid/VideoGrid.jsx';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { useState } from 'react';
import { videos } from '../../data/videos.js';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([...videos]);

  function handleInput(event) {
    setSearchQuery(event.target.value);

    const newSearch = searchQuery.trim().toLowerCase().split(' ');

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
      <Header handleInput={handleInput} />
      <TopicRecommendations />
      <Sidebar />
      <VideoGrid videos={filteredVideos} />
    </>
  );
}

export default HomePage;
