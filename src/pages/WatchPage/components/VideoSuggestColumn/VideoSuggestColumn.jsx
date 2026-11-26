import './VideoSuggestColumn.css';
import VideoSuggestCard from './VideoSuggestCard.jsx';
import { videos } from '../../../../data/videos.js';

function VideoSuggestColumn() {
  return (
    <>
      <div className='videos-column'>
        {videos.map((video) => {
          return <VideoSuggestCard key={video.id} video={video} />;
        })}
      </div>
    </>
  );
}

export default VideoSuggestColumn;
