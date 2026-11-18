function TopicCard({ recommendation, handleTopic, selectedTopic }) {
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
