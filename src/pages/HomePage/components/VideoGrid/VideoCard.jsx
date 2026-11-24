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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='var(--text-primary)'
                aria-hidden='true'
                className='dots-icon'>
                <path
                  d='M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z'
                  stroke='var(--text-primary)'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z'
                  stroke='var(--text-primary)'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z'
                  stroke='var(--text-primary)'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
