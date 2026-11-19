import './VideoGrid.css';
import { formatViews, calculateDate } from '../../../../data/videos';
import { assetPath } from '../../../../utils/assetPath';

function VideoCard({ video }) {
  return (
    <>
      <div className='video-preview'>
        <a href={video.videoUrl} className='thumbnail-container'>
          <img
            className='thumbnail'
            width={640}
            height={360}
            loading='lazy'
            decoding='async'
            alt={video.title}
            src={assetPath(video.thumbnail)}
          />
          <div className='video-time'>{video.videoTime}</div>
        </a>

        <div className='info-container'>
          <a className='channel-pic-container' href={video.channelUrl}>
            <img
              width={48}
              height={48}
              className='channel-pic'
              src={assetPath(video.channelImage)}
              alt={`${video.channelName} channel`}
            />
          </a>

          <div className='video-info'>
            <div className='video-title-and-stats'>
              <p className='video-title'>{video.title}</p>

              <p className='video-stats'>
                {video.channelName} &#183; {formatViews(video.views)} views
                &#183; {calculateDate(video.uploadedAt)} ago
              </p>
            </div>

            <button className='dots-button'>
              <i className='material-symbols-outlined dots-icon'>more_vert</i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
