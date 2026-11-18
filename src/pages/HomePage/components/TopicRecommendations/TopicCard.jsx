function TopicCard({ recommendation, handleTopic, selectedTopic }) {
  return (
    <div className='topic-link'>
      <div
        onClick={handleTopic}
        key={recommendation.id}
        className={`${recommendation.id}-topic ${selectedTopic === recommendation.name ? 'topic-enabled' : ''} topics`}>
        {recommendation.name}
      </div>
    </div>
  );
}

export default TopicCard;
