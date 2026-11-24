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
        <button type='button' className='menu-button' aria-label='Menu'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='var(--text-primary)'
            aria-hidden='true'
            className='menu-icon'>
            <path
              d='M4 6H20M4 12H20M4 18H20'
              stroke='var(--text-primary)'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>

        <a href='/'>
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
          {theme === 'dark' ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='var(--text-primary)'
              aria-hidden='true'
              className='theme-icon'>
              <path
                d='M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z'
                stroke='var(--text-primary)'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='var(--text-primary)'
              aria-hidden='true'
              className='theme-icon'>
              <path d='M3,11.985A9.811,9.811,0,0,0,12.569,22a9.528,9.528,0,0,0,8.309-5.059,1,1,0,0,0-.947-1.477l-.11.008c-.131.01-.263.02-.4.02a7.811,7.811,0,0,1-7.569-8.015,8.378,8.378,0,0,1,1.016-4A1,1,0,0,0,11.923,2,9.855,9.855,0,0,0,3,11.985Zm7.343-7.652a10.382,10.382,0,0,0-.488,3.144A9.89,9.89,0,0,0,18.137,17.4,7.4,7.4,0,0,1,12.569,20,7.811,7.811,0,0,1,5,11.985,7.992,7.992,0,0,1,10.343,4.333Z' />
            </svg>
          )}
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
