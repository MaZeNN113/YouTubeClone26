import './WatchPage.css';
import VideoSuggestColumn from './components/VideoSuggestColumn/VideoSuggestColumn.jsx';

function WatchPage() {
  return (
    <div className='video-suggestions'>
      <div className='video-watch'>
        <div className='video-watch-container'>
          <iframe
            class='youtube-video'
            frameBorder={0}
            title='NLM embedded YouTube video player example'
            src='https://www.youtube.com/embed/GQigLJ6iV4Y?html5=1&enablejsapi=1'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen></iframe>
        </div>
      </div>

      <div className='videos-recommendations'>
        <VideoSuggestColumn />
      </div>
    </div>
  );
}

export default WatchPage;
