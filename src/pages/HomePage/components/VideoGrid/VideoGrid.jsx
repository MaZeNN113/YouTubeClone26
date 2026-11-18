import './VideoGrid.css';
import VideoCard from './VideoCard.jsx';

function VideoGrid({ videos }) {
  return (
    <>
      {videos.length <= 0 ? (
        <div className='not-found'>
          <h1 className='not-found-text'> No videos found </h1>
        </div>
      ) : (
        <main>
          {videos.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
        </main>
      )}
    </>
  );
}

export default VideoGrid;
