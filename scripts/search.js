import { videos } from '../data/videos.js';
import { generateTopics } from './home.js';

const searchButtonElement = document.querySelector('.js-search-box-button');
const searchBoxElement = document.querySelector('.js-search-box');

searchButtonElement.addEventListener('click', () => {
  searchVideos();
});

if (searchBoxElement) {
  searchBoxElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      searchVideos()
    }
  });
}

function searchVideos() {
  const searchElement = document.querySelector('.js-search-box');
  const userQuery = searchElement.value.trim().toLowerCase();
  const queryWords = userQuery.split(' ');
  const matchingTopics = videos.filter((video) => {
    const lowerCaseKeywords = video.keywords.map((keyword) =>
      keyword.toLowerCase()
    );
    const lowerCaseTitle = video.title.toLocaleLowerCase();
    const lowerCaseChannel = video.channelName.toLowerCase();
    const searchableContent = (
      video.title +
      '' +
      video.channelName +
      '' +
      video.keywords.join(' ')
    ).toLowerCase();

    return queryWords.every((word) => searchableContent.includes(word));
    /* lowerCaseKeywords.some((keyword) => keyword.includes(userQuery)) ||
      lowerCaseTitle.includes(userQuery) ||
      lowerCaseChannel.includes(userQuery) */
  });
  if (matchingTopics.length <= 0) {
    const notFound = document.querySelector('main');

    notFound.innerHTML = 'No videos found';
    notFound.classList.add('js-not-found-enabled');
  } else {
    generateTopics(matchingTopics);
  }
}
