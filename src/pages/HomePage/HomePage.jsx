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
  const [selectedTopic, setSelectedTopic] = useState('all');

  function handleInput(event) {
    setDraftQuery(event.target.value);
  }

  function searchVideos() {
    // give the searchQuery setter function the draftQuery,
    // so it can have the last value after typing
    setSearchQuery(draftQuery);

    // Create the newSearch to take the draftQuery directly
    // rather than the searchQuery variable, to prevent misleading
    // and to make the videos load directly with the correct value
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

  function handleTopic(event) {
    // Assign the clickedTopic to get the topic immediately
    const clickedTopic = event.target.innerText;

    // Give the setter function this clickTopic,
    // to prevent it from waiting to press 2 times
    setSelectedTopic(clickedTopic);

    setFilteredVideos(
      videos.filter((video) => {
        const searchableContent = (
          video.title +
          '' +
          video.channelName +
          '' +
          video.keywords.join(' ')
        ).toLowerCase();

        return searchableContent.includes(clickedTopic.toLowerCase());
      }),
    );
  }

  return (
    <>
      <title>YouTube</title>
      <Header searchVideos={searchVideos} handleInput={handleInput} />
      <TopicRecommendations handleTopic={handleTopic} />
      <Sidebar />
      <VideoGrid videos={filteredVideos} />
    </>
  );
}

export default HomePage;
