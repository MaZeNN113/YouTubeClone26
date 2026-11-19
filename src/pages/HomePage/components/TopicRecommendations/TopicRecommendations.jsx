import { useEffect, useState } from 'react';
import { recommendations } from '../../../../data/recommendations.js';
import TopicCard from './TopicCard.jsx';
import './TopicRecommendations.css';

function TopicRecommendations({ handleTopic, selectedTopic }) {
  const [userScrollDown, setUserScrollDown] = useState(false);

  useEffect(() => {
    let lastScrollPosition = 0;

    function userScrollDown() {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        setUserScrollDown(true);
      } else {
        setUserScrollDown(false);
      }

      lastScrollPosition = currentScrollPosition;
    }

    window.addEventListener('scroll', userScrollDown);

    return () => {
      window.removeEventListener('scroll', userScrollDown);
    };
  }, []);

  return (
    <div
      className={`topic-recommendations ${userScrollDown ? 'hide-topics' : ''}`}>
      {/* <div className='topic-link' onClick={handleTopic}>
        <button className='ai-topic-button'>
          <div className='ai-topic-container topics'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ai-topic-icon'
              viewBox='0 0 18 18'>
              <path d='M15.75 3.75a1.5 1.5 0 011.5 1.5V15a1.5 1.5 0 01-1.5 1.5H2.25A1.5 1.5 0 01.75 15V5.25a1.5 1.5 0 011.5-1.5h13.5ZM2.25 15h13.5V5.25H2.25V15ZM9 7.125c.117 0 .213.091.23.207a3 3 0 002.563 2.558.235.235 0 01.207.227.235.235 0 01-.207.229 3.001 3.001 0 00-2.565 2.573.234.234 0 01-.228.206.234.234 0 01-.228-.206 3.001 3.001 0 00-2.565-2.573.235.235 0 01-.207-.229c0-.116.091-.212.207-.227a3 3 0 002.564-2.558A.236.236 0 019 7.125ZM13.5.75a1.5 1.5 0 011.5 1.5H3A1.5 1.5 0 014.5.75h9Z'></path>
            </svg>

            <div>Your custom feed</div>
          </div>
        </button>
      </div> */}

      {recommendations.map((recommendation) => {
        return (
          <TopicCard
            key={recommendation.id}
            recommendation={recommendation}
            handleTopic={handleTopic}
            selectedTopic={selectedTopic}
          />
        );
      })}
    </div>
  );
}

export default TopicRecommendations;
