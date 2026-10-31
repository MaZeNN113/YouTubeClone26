let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const headerElement = document.querySelector('header');
  const topicElements = document.querySelector('.topic-recommendations');

  let currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    headerElement.classList.add('hide-header');
    topicElements.classList.add('hide-topics');
  } else {
    headerElement.classList.remove('hide-header');
    topicElements.classList.remove('hide-topics');
  }

  lastScrollPosition = currentScrollPosition;
});
