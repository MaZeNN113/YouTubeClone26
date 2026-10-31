import { videos, formatViews, fetchVideoTime, calculateDate } from '../data/videos.js';

export async function generateVideos() {
  const shuffledVideos = [...videos];
  
  shuffledVideos.sort(() => Math.random() - 0.5);
  
  let homeHTML = '';
  
  /* const uploadedDates = await Promise.all(shuffledVideos.map((video) => fetchVideoTime(video.id))); */

  shuffledVideos.forEach((video, index) => {
    const html = `
    <div class="video-preview">
      <a href="${video.videoUrl}" class="thumbnail-container">
        <img class="thumbnail" src="${video.thumbnail}">
        <div class="video-time">${video.videoTime}</div>
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
              ${video.channelName} &#183; ${formatViews(video.views)} views &#183; ${calculateDate(video.uploadedAt)} ago
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

export async function generateTopics(topicsArray) {
  const shuffledVideos = [...topicsArray];

  shuffledVideos.sort(() => Math.random() - 0.5);

  /* const uploadedDates = await Promise.all(shuffledVideos.map(video => fetchVideoTime(video.id))) */

  let homeHTML = '';

  shuffledVideos.forEach((video) => {
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
                ${video.channelName} &#183; ${formatViews(video.views)} views &#183; ${calculateDate(video.uploadedAt)} ago
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
