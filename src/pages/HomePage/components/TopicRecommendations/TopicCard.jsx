import { useContext } from 'react';
import { TopicContext } from '../../../../context/TopicContext';

function TopicCard({ recommendation }) {
  const { selectedTopic, handleTopic } = useContext(TopicContext);

  return (
    <div className='topic-link'>
      <button
        onClick={handleTopic}
        className={`${recommendation.id}-topic ${selectedTopic === recommendation.name ? 'topic-enabled' : ''} topics`}>
        {recommendation.name}
      </button>
    </div>
  );
}

export default TopicCard;
