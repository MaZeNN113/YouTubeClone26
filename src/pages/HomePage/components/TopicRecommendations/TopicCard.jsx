import './TopicRecommendations.css';

function TopicCard({ recommendation }) {
  return (
    <div className='topic-link'>
      <div
        key={recommendation.id}
        className={`${recommendation.id}-topic topics`}>
        {recommendation.name}
      </div>
    </div>
  );
}

export default TopicCard;
