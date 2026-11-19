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
  const [selectedTopic, setSelectedTopic] = useState('All');

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
    const clickedTopic = event.currentTarget.innerText;
    // Create this new variable to store the value of 
    // the selectedTopic and check wether it's All topics
    // or just another topic to handle the generation
    const newTopic = selectedTopic === clickedTopic ? 'All' : clickedTopic;

    // Give the setter function this clickTopic,
    // to prevent it from waiting to press 2 times
    setSelectedTopic(newTopic);


    if (newTopic === 'All') {
      setFilteredVideos([...videos]);
    } else {
      setFilteredVideos(
        videos.filter((video) => {
          const lowerCaseKeywords = video.keywords.map((keyword) =>
            keyword.toLowerCase(),
          );

          return lowerCaseKeywords.includes(
            newTopic.toLowerCase(),
          ) /* || video.title.includes(clickedTopic.toLowerCase()) */;
        }),
      );
    }
  }

  return (
    <>
      <title>YouTube</title>
      <Header searchVideos={searchVideos} handleInput={handleInput} />
      <TopicRecommendations
        selectedTopic={selectedTopic}
        handleTopic={handleTopic}
      />
      <Sidebar />
      <VideoGrid videos={filteredVideos} />
    </>
  );
}

export default HomePage;
