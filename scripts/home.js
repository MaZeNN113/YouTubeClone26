import { videos, formatViews } from '../data/videos.js';

export function generateVideos() {
  let homeHTML = '';

  videos.forEach((video) => {
    const html = `
    <div class="video-preview">
      <a href="${video.videoUrl}">
        <img class="thumbnail" src="${video.thumbnail}">
      </a>
    
      <div class="info-container">
        <a class="channel-pic-container" href="${video.channelUrl}">
          <img class="channel-pic" src="${video.channelImage}">
        </a>

        <div class="video-info">
          <div class="video-title-and-stats">
            <p class="video-title">
              ${video.title}
            </p>

            <p class="video-stats">
              ${video.channelName} &#183; ${formatViews(video.views)} views &#183; ${video.uploadedAt}
            </p>
          </div>

          <button class="dots-button">
            <i class="material-symbols-outlined dots-icon">
              more_vert
            </i>
          </button>
        </div>
      </div>
    </div>
  `;

    homeHTML += html;

  });
  document.querySelector('main').innerHTML = homeHTML;
}

export function generateTopics(topicsArray) {
  let homeHTML = '';

  topicsArray.forEach((video) => {
    const html = `
      <div class="video-preview">
        <a href="${video.videoUrl}">
          <img class="thumbnail" src="${video.thumbnail}">
        </a>
      
        <div class="info-container">
          <a class="channel-pic-container" href="${video.channelUrl}">
            <img class="channel-pic" src="${video.channelImage}">
          </a>
  
          <div class="video-info">
            <div class="video-title-and-stats">
              <p class="video-title">
                ${video.title}
              </p>
  
              <p class="video-stats">
                ${video.channelName} &#183; ${formatViews(video.views)} views &#183; ${video.uploadedAt}
              </p>
            </div>
  
            <button class="dots-button">
              <i class="material-symbols-outlined dots-icon">
                more_vert
              </i>
            </button>
          </div>
        </div>
      </div>
    `;

    homeHTML += html;

  });
  document.querySelector('main').innerHTML = homeHTML;
}
