import { recommendations } from '../data/recommendations.js';
import { videos } from '../data/videos.js';
import { generateVideos, generateTopics } from './home.js';

let recommendationsHTML = `
  <div class="topic-link">
    <button class="ai-topic-button">
      <div class="ai-topic-container topics">
        <svg xmlns="http://www.w3.org/2000/svg" class="ai-topic-icon" viewBox="0 0 18 18">
          <path d="M15.75 3.75a1.5 1.5 0 011.5 1.5V15a1.5 1.5 0 01-1.5 1.5H2.25A1.5 1.5 0 01.75 15V5.25a1.5 1.5 0 011.5-1.5h13.5ZM2.25 15h13.5V5.25H2.25V15ZM9 7.125c.117 0 .213.091.23.207a3 3 0 002.563 2.558.235.235 0 01.207.227.235.235 0 01-.207.229 3.001 3.001 0 00-2.565 2.573.234.234 0 01-.228.206.234.234 0 01-.228-.206 3.001 3.001 0 00-2.565-2.573.235.235 0 01-.207-.229c0-.116.091-.212.207-.227a3 3 0 002.564-2.558A.236.236 0 019 7.125ZM13.5.75a1.5 1.5 0 011.5 1.5H3A1.5 1.5 0 014.5.75h9Z"></path>
        </svg>
          
        <div>
          Your custom feed
        </div>
      </div>
    </button>
  </div>
`;

function generateRecommendations() {
  recommendations.forEach((recommendation) => {
    const html = `
    <div class="topic-link">
      <div class="${recommendation.id}-topic topics">
        ${recommendation.name}
      </div>
    </div>
  `;
    recommendationsHTML += html;
  });

  document.querySelector('.topic-recommendations').innerHTML =
    recommendationsHTML;
}
generateRecommendations();

// Making the ALL white as default
function allTopics() {
  const allElement = document.querySelector('.k9N2b-topic');
  allElement.classList.add('js-topic-enabled');
  generateVideos();
}
allTopics();

// Making the topics functional that when
// pressing on one, the other turn off directly
document.querySelectorAll('.topics').forEach((topic) => {
  topic.addEventListener('click', () => {
    const allElement = document.querySelector('.k9N2b-topic');
    const mainElement = document.querySelector('main');

    if (topic.classList.contains('js-topic-enabled')) {
      
      topic.classList.remove('js-topic-enabled');
      allElement.classList.add('js-topic-enabled');
      mainElement.classList.remove('js-not-found-enabled');
      allTopics();

    } else {
      document.querySelectorAll('.topics').forEach((allTopics) => {
        allTopics.classList.remove('js-topic-enabled');
      });
      topic.classList.add('js-topic-enabled');

      if (allElement.classList.contains('js-topic-enabled')) {
        allTopics();
      } else {
        const matchingTopics = videos.filter((video) => {
          const lowerCaseKeywords = video.keywords.map((keyword) =>
            keyword.toLowerCase()
          );
          const lowerCaseTopic = topic.innerText.toLowerCase();
          return lowerCaseKeywords.includes(lowerCaseTopic);
        });

        if (matchingTopics.length <= 0) {
          const notFound = document.querySelector('main');
          
          notFound.innerHTML = 'No videos found';
          notFound.classList.add('js-not-found-enabled');
        } else {
          generateTopics(matchingTopics);
        }
      }
    }
  });
});
