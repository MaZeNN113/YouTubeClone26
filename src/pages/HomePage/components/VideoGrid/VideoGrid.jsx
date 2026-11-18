import './VideoGrid.css';
import VideoCard from './VideoCard.jsx';

function VideoGrid({ videos }) {
  return (
    <main>
      {videos.length <= 0 ? (
        <h1 style={{ color: '#e3e3e3' }}>No videos found</h1>
      ) : (
        videos.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })
      )}
    </main>
  );
}

export default VideoGrid;
