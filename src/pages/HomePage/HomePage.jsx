import './HomePage.css';
import TopicRecommendations from './components/TopicRecommendations/TopicRecommendations.jsx';
import VideoGrid from './components/VideoGrid/VideoGrid.jsx';
import Header from './components/Header/Header.jsx';

function HomePage() {
  return (
    <>
      <Header />
      <TopicRecommendations />
      <VideoGrid />
    </>
  );
}

export default HomePage;
