import { useState } from 'react';
import './Header.css';

function Header({
  searchVideos,
  handleInput,
  userScrollDown,
  theme,
  toggleTheme,
}) {
  const [isMobileSearch, setIsMobileSearch] = useState(false);

  return (
    <header
      className={`${userScrollDown ? 'hide-header' : ''} ${isMobileSearch ? 'mobile-mode' : ''}`}>
      <div className='left-section'>
        <i className='material-symbols-outlined menu-icon'>menu</i>

        <a href='index.html'>
          <img
            src={`images/assets/youtube-header-${theme === 'dark' ? 'white' : 'black'}.png`}
            className='youtube-header-icon'
          />
        </a>
      </div>

      {/* The mobile search mode */}
      <div
        className={`mobile-search-container ${isMobileSearch ? 'mobile-search-enabled' : ''}`}>
        <button
          className='mobile-back-button'
          onClick={() => setIsMobileSearch(false)}>
          <i className='material-symbols-outlined mobile-back-icon'>
            arrow_back
          </i>
        </button>

        <input
          type='text'
          className='mobile-search-input'
          placeholder='Search videos'
          onChange={handleInput}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              searchVideos();
              setIsMobileSearch(false);
            }
          }}
        />

        <button
          className='mobile-submit-button'
          onClick={() => {
            searchVideos();
            setIsMobileSearch(false);
          }}>
          <svg
            className='mobile-submit-icon'
            xmlns='http://w3.org'
            viewBox='0 0 24 24'>
            <path d='M11 2a9 9 0 105.641 16.01.966.966 0 00.152.197l3.5 3.5a1 1 0 101.414-1.414l-3.5-3.5a1 1 0 00-.197-.153A8.96 8.96 0 0020 11a9 9 0 00-9-9Zm0 2a7 7 0 110 14 7 7 0 010-14Z'></path>
          </svg>
        </button>
      </div>

      <div className='mid-section'>
        <div className='search-box-container'>
          <input
            onKeyDown={(event) => event.key === 'Enter' && searchVideos()}
            onChange={handleInput}
            className='search-box js-search-box'
            type='text'
            placeholder='Search or ask a question'
          />
          <button className='ai-ask-button'>
            <div className='ai-ask-container'>
              <svg
                className='ai-ask-icon'
                xmlns='http://w3.org'
                viewBox='0 0 24 24'>
                <path d='M19 0a5 5 0 01-5 5 5 5 0 015 5 5 5 0 015-5 5 5 0 01-5-5Zm-8 2a9 9 0 105.641 16.013c.044.07.094.135.152.194l3.5 3.5a1 1 0 001.414-1.414l-3.5-3.5a1.001 1.001 0 00-.194-.152A8.96 8.96 0 0019.945 12H17.93a7 7 0 11-5.99-7.938l1.675-1.676A9 9 0 0011 2Z'></path>
                <div className='ai-ask-text'>Ask YouTube</div>
              </svg>
            </div>
          </button>
          <button
            className='search-box-button js-search-box-button'
            onClick={() => {
              if (window.innerWidth <= 480) {
                setIsMobileSearch(true);
              } else {
                searchVideos();
              }
            }}>
            <svg
              className='search-box-icon'
              xmlns='http://w3.org'
              viewBox='0 0 24 24'>
              <path d='M11 2a9 9 0 105.641 16.01.966.966 0 00.152.197l3.5 3.5a1 1 0 101.414-1.414l-3.5-3.5a1 1 0 00-.197-.153A8.96 8.96 0 0020 11a9 9 0 00-9-9Zm0 2a7 7 0 110 14 7 7 0 010-14Z'></path>
            </svg>
          </button>
        </div>

        <button className='mic-search-button'>
          <svg
            className='mic-search-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path d='M18.063 14.5a1 1 0 111.73 1A8.998 8.998 0 0113 19.942V22a1 1 0 11-2 0v-2.058A8.999 8.999 0 014.206 15.5l.866-.5.865-.5a7.002 7.002 0 0012.125 0ZM12 1a5 5 0 015 5v5a5 5 0 01-10 0V6a5 5 0 015-5ZM4.572 14.134a1 1 0 011.365.366l-1.731 1a1 1 0 01.366-1.366ZM12 3a3 3 0 00-3 3v5a3 3 0 106 0V6a3 3 0 00-3-3Z'></path>
          </svg>

          <div className='tooltip'>Search with your voice</div>
        </button>
      </div>

      <div className='right-section'>
        <button className='create-button'>
          <i className='material-symbols-outlined create-icon'>add</i>
          Create
        </button>

        <button className='notifications-button'>
          <svg
            className='notifications-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path d='M16 19a4 4 0 11-8 0H4.765C3.21 19 2.25 17.304 3.05 15.97l1.806-3.01A1 1 0 005 12.446V8a7 7 0 0114 0v4.446c0 .181.05.36.142.515l1.807 3.01c.8 1.333-.161 3.029-1.716 3.029H16ZM12 3a5 5 0 00-5 5v4.446a3 3 0 01-.428 1.543L4.765 17h14.468l-1.805-3.01A3 3 0 0117 12.445V8a5 5 0 00-5-5Zm-2 16a2 2 0 104 0h-4Z'></path>
          </svg>

          <div className='tooltip'>Notifications</div>
        </button>

        <button className='dark-mode-button' onClick={toggleTheme}>
          <svg
            className='dark-mode-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path
              d='M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z'
              id='svgrepo-309493-3'></path>
          </svg>
        </button>

        <div className='account-container'>
          <img
            className='account-icon'
            id='img'
            draggable='false'
            alt='Avatar image'
            src='https://yt3.ggpht.com/yti/ANjgQV-EcgMO_lL4Mgj16_8Wq-vYRDK8ZCUqC7HQwYaCzSI=s88-c-k-c0x00ffffff-no-rj-mo'
          />

          <div className='tooltip'>Mazen Medhat</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
