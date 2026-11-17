import './VideoGrid.css';
import { videos } from '../../../../data/videos.js';
import VideoCard from './VideoCard.jsx';

function VideoGrid({ videos }) {
  return (
    <main>
      {videos.map((video) => {
        return <VideoCard key={video.id} video={video} />;
      })}
    </main>
  );
}

export default VideoGrid;
