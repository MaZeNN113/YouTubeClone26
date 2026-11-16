import './Sidebar.css';

function Sidebar() {
  return (
    <nav>
      <div className='sidebar-link'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='home-section'>
          <path d='m11.485 2.143-8 4.8-2 1.2a1 1 0 001.03 1.714L3 9.567V20a2 2 0 002 2h5v-8h4v8h5a2 2 0 002-2V9.567l.485.29a1 1 0 001.03-1.714l-2-1.2-8-4.8a1 1 0 00-1.03 0Z'></path>
        </svg>
        <p className='sidebar-text'>Home</p>
      </div>

      <div className='sidebar-link'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='shorts-section'>
          <path d='m13.467 1.19-8 4.7a5 5 0 00-.255 8.46 5 5 0 005.32 8.462l8-4.7a5 5 0 00.258-8.462 5 5 0 001.641-6.464l-.12-.217a5 5 0 00-6.844-1.78m5.12 2.79a2.999 2.999 0 01-1.067 4.107l-1.327.78a1 1 0 00.096 1.775l.943.423a3 3 0 01.288 5.323l-8 4.7a3 3 0 01-3.039-5.173l1.327-.78a1 1 0 00-.097-1.775l-.942-.423a3 3 0 01-.288-5.323l8-4.7a3 3 0 014.106 1.066ZM15 12l-5-3v6l5-3Z'></path>
        </svg>
        <p className='sidebar-text'>Shorts</p>
      </div>

      <div className='sidebar-link' id='subs-section'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='subs-section'
          viewBox='0 0 24 24'>
          <path d='M18 1H6a2 2 0 00-2 2h16a2 2 0 00-2-2Zm3 4H3a2 2 0 00-2 2v13a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2ZM3 20V7h18v13H3Zm13-6.5L10 10v7l6-3.5Z'></path>
        </svg>
        <p className='sidebar-text'>Subscriptions</p>

        <div className='subscriptions-list-tooltip'>
          <p id='subs-header'>Subscriptions</p>

          <a
            className='subs-info'
            href='https://www.youtube.com/@abdullahthe_architect'>
            <img
              className='channel-picture'
              src='images/channels/abdullah-the-architect.jpg'
            />

            <div className='channel-name'>Abdullah The Architect</div>
          </a>

          <a className='subs-info' href='https://www.youtube.com/@aburob'>
            <img className='channel-picture' src='images/channels/aburob.jpg' />

            <div className='channel-name'>Aburob</div>
          </a>

          <a
            className='subs-info'
            href='https://www.youtube.com/@AliMuhammadAli'>
            <img
              className='channel-picture'
              src='images/channels/ali-mohamed.jpg'
            />

            <div className='channel-name'>Ali Mohamed Ali</div>
          </a>

          <a className='subs-info' href='https://www.youtube.com/@BrandonShep'>
            <img
              className='channel-picture'
              src='images/channels/brandon-shepherd.jpg'
            />

            <div className='channel-name'>Brandon Shepherd</div>
          </a>

          <a className='subs-info' href='https://www.youtube.com/@DanKoeTalks'>
            <img
              className='channel-picture'
              src='images/channels/dan-koe.jpg'
            />

            <div className='channel-name'>Dan Koe</div>
          </a>

          <a
            className='subs-info'
            href='https://www.youtube.com/@DroosOnline4u'>
            <img
              className='channel-picture'
              src='images/channels/droos-online.jpg'
            />

            <div className='channel-name'>Droos Online</div>
          </a>

          <a className='subs-info' href='https://www.youtube.com/@vizmazen'>
            <img
              className='channel-picture'
              src='images/channels/nerd-anchor.jpg'
            />

            <div className='channel-name'>Nerd Anchor</div>
          </a>

          <div className='subs-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='channel-picture'
              viewBox='0 0 24 24'>
              <path d='M18.707 8.793a1 1 0 00-1.414 0L12 14.086 6.707 8.793a1 1 0 10-1.414 1.414L12 16.914l6.707-6.707a1 1 0 000-1.414Z'></path>
            </svg>

            <div className='channel-name'>See More</div>
          </div>
        </div>
      </div>

      <div className='sidebar-link' id='you-section'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='you-section'
          viewBox='0 0 24 24'>
          <path d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 016.447 15.276 7 7 0 00-12.895 0A9 9 0 0112 3Zm0 2a4 4 0 100 8 4 4 0 000-8Zm0 2a2 2 0 110 4 2 2 0 010-4Zm-.1 9.001L11.899 16a5 5 0 014.904 3.61A8.96 8.96 0 0112 21a8.96 8.96 0 01-4.804-1.391 5 5 0 014.704-3.608Z'></path>
        </svg>
        <p className='sidebar-text'>You</p>

        <div className='setting-elements'></div>

        <div className='settings-list-tooltip'>
          <p id='you-header'>You</p>

          <div className='setting-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='setting-icon'
              viewBox='0 0 24 24'>
              <path d='M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2ZM4 20V4h16v16h-1.293a7 7 0 00-13.414 0H4Zm8-14a4 4 0 100 8 4 4 0 000-8Zm0 2a2 2 0 110 4 2 2 0 010-4Zm-.1 9.001h-.002A5 5 0 0116.581 20H7.417a5 5 0 014.483-2.999Z'></path>
            </svg>

            <div className='setting-name'>Your channel</div>
          </div>

          <div className='setting-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='setting-icon'
              viewBox='0 0 24 24'>
              <path d='M8.76 1.487a11 11 0 11-7.54 12.706 1 1 0 011.96-.4 9 9 0 0014.254 5.38A9 9 0 0016.79 4.38 9 9 0 004.518 7H7a1 1 0 010 2H1V3a1 1 0 012 0v2.678a11 11 0 015.76-4.192ZM12 6a1 1 0 00-1 1v5.58l.504.288 3.5 2a1 1 0 10.992-1.736L13 11.42V7a1 1 0 00-1-1Z'></path>
            </svg>

            <div className='setting-name'>History</div>
          </div>

          <div className='setting-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='setting-icon'
              viewBox='0 0 24 24'>
              <path d='M16 15.395a.5.5 0 01.762-.426L22.5 18.5l-5.738 3.531a.5.5 0 01-.762-.425v-6.212ZM14 19H4a1 1 0 110-2h10v2Zm6-8a1 1 0 110 2H4a1 1 0 110-2h16Zm0-6a1 1 0 110 2H4a1 1 0 010-2h16Z'></path>
            </svg>

            <div className='setting-name'>Playlists</div>
          </div>

          <div className='setting-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='setting-icon'
              viewBox='0 0 24 24'>
              <path d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 110 18.001A9 9 0 0112 3Zm0 3a1 1 0 00-1 1v5.565l.485.292 3.33 2a1 1 0 001.03-1.714L13 11.435V7a1 1 0 00-1-1Z'></path>
            </svg>

            <div className='setting-name'>Watch later</div>
          </div>

          <div className='setting-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='setting-icon'
              viewBox='0 0 24 24'>
              <path d='M9.221 1.795a1 1 0 011.109-.656l1.04.173a4 4 0 013.252 4.784L14 9h4.061a3.664 3.664 0 013.576 2.868A3.68 3.68 0 0121 14.85l.02.087A3.815 3.815 0 0120 18.5v.043l-.01.227a2.82 2.82 0 01-.135.663l-.106.282A3.754 3.754 0 0116.295 22h-3.606l-.392-.007a12.002 12.002 0 01-5.223-1.388l-.343-.189-.27-.154a2.005 2.005 0 00-.863-.26l-.13-.004H3.5a1.5 1.5 0 01-1.5-1.5V12.5A1.5 1.5 0 013.5 11h1.79l.157-.013a1 1 0 00.724-.512l.063-.145 2.987-8.535Zm-1.1 9.196A3 3 0 015.29 13H4v4.998h1.468a4 4 0 011.986.528l.27.155.285.157A10 10 0 0012.69 20h3.606c.754 0 1.424-.483 1.663-1.2l.03-.126a.819.819 0 00.012-.131v-.872l.587-.586c.388-.388.577-.927.523-1.465l-.038-.23-.02-.087-.21-.9.55-.744A1.663 1.663 0 0018.061 11H14a2.002 2.002 0 01-1.956-2.418l.623-2.904a2 2 0 00-1.626-2.392l-.21-.035-2.71 7.741Z'></path>
            </svg>

            <div className='setting-name'>Liked videos</div>
          </div>

          <div className='setting-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='setting-icon'
              viewBox='0 0 24 24'>
              <path d='M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2ZM3 19V5h18v14H3Zm13-7L9.5 8v8l6.5-4Z'></path>
            </svg>

            <div className='setting-name'>Your videos</div>
          </div>

          <div className='setting-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='setting-icon'
              viewBox='0 0 24 24'>
              <path d='M12 2a1 1 0 00-1 1v11.586l-4.293-4.293a1 1 0 10-1.414 1.414L12 18.414l6.707-6.707a1 1 0 10-1.414-1.414L13 14.586V3a1 1 0 00-1-1Zm7 18H5a1 1 0 000 2h14a1 1 0 000-2Z'></path>
            </svg>

            <div className='setting-name'>Downloads</div>
          </div>

          <div className='setting-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='setting-icon'
              viewBox='0 0 24 24'>
              <path d='M18.707 8.793a1 1 0 00-1.414 0L12 14.086 6.707 8.793a1 1 0 10-1.414 1.414L12 16.914l6.707-6.707a1 1 0 000-1.414Z'></path>
            </svg>

            <div className='setting-name'>Show more</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
