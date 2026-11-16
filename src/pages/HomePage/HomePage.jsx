import './HomePage.css';
import TopicRecommendations from './components/TopicRecommendations/TopicRecommendations.jsx';
import VideoGrid from './components/VideoGrid/VideoGrid.jsx';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

function HomePage() {
  return (
    <>
      <Header />
      <TopicRecommendations />
      <Sidebar />
      <VideoGrid />
    </>
  );
}

export default HomePage;
