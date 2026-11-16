import './HomePage.css';
import TopicRecommendations from './components/TopicRecommendations/TopicRecommendations.jsx';
import VideoGrid from './components/VideoGrid/VideoGrid.jsx';

function HomePage() {
  return (
    <>
      <TopicRecommendations />
      <VideoGrid />
    </>
  );
}

export default HomePage;
