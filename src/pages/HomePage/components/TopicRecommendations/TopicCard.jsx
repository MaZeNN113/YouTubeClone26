import './TopicRecommendations.css';

function TopicCard({ recommendation, handleTopic }) {
  return (
    <div className='topic-link'>
      <div
        onClick={handleTopic}
        key={recommendation.id}
        className={`${recommendation.id}-topic topics`}>
        {recommendation.name}
      </div>
    </div>
  );
}

export default TopicCard;
