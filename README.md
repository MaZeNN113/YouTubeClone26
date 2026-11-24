<div align="center">

# YouTubeClone26

### A YouTube-inspired frontend, rebuilt with React.

A hands-on project exploring how a familiar video platform can be recreated with modern frontend tools, component architecture, and interactive UI.

[**Live Demo**](https://mazenn113.github.io/YouTubeClone26/) · [**Source Code**](https://github.com/MaZeNN113/YouTubeClone26) · [**React Version**](https://github.com/MaZeNN113/YouTubeClone26/tree/React-Version)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-In%20Development-orange)

</div>

---

## About the Project

YouTubeClone26 started as a frontend recreation project and is now being migrated from vanilla JavaScript to React.

The goal isn't just to make a page that looks like YouTube. It's to understand how real interfaces are structured: breaking large UIs into components, managing state, passing data through props, handling events, and gradually building reusable features.

The project uses a curated collection of video data and locally stored assets to create a video-browsing experience.

> _Built as a learning project. Not affiliated with, endorsed by, or connected to YouTube or Google._

## Features

### Currently Implemented

- **Video feed** — videos are rendered dynamically from a JavaScript data collection. **(DONE ✔️)**
- **Search** — search videos by title, channel name, and keywords. **(DONE ✔️)**
- **Topic recommendations** — filter the feed by selecting a topic. **(DONE ✔️)**
- **Topic toggle** — select an active topic again to reset the feed to All. **(DONE ✔️)**
- **Responsive search experience** — a dedicated mobile search mode. **(DONE ✔️)**
- **Scroll-aware header** — detect scroll direction and hide the header while scrolling down. **(DONE ✔️)**
- **Reusable video cards** — each video is rendered through a dedicated React component. **(DONE ✔️)**
- **Video metadata** — display channel information, view counts, upload time, and duration. **(DONE ✔️)**
- **Asset path helper** — centralize asset paths for deployment compatibility. **(DONE ✔️)**
- Dark mode **(DONE ✔️)**

### In Progress / Planned

- Video options menu
- Watch Later collection
- Advanced search filters and sorting
- Infinite scrolling
- Dedicated watch page with routing
- API-powered video feed

_Planned features are not presented as completed functionality. The project is evolving one feature at a time._

## Tech Stack

| Technology        | Purpose                                  |
| ----------------- | ---------------------------------------- |
| React 19          | UI components and state management       |
| JavaScript (ES6+) | Application logic                        |
| Vite 8            | Development server and production build  |
| CSS               | Layout, styling, and responsive behavior |
| Day.js            | Date formatting utilities                |
| ESLint            | Code quality and linting                 |

## Getting Started

### Requirements

- Node.js
- npm
- Git

### Installation

1. **Clone the React version:**

   ```bash
   git clone --branch React-Version https://github.com/MaZeNN113/YouTubeClone26.git
   cd YouTubeClone26
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Vite will print a local development URL in the terminal. Open that URL in your browser.

### Available Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the local development server |
| `npm run build`   | Create a production build          |
| `npm run preview` | Preview the production build       |
| `npm run lint`    | Run ESLint                         |

## Project Structure

The React application is organized around pages, reusable components, data, and utility functions.

```text
src/
├── data/
│   ├── videos.js
│   └── recommendations.js
├── pages/
│   └── HomePage/
│       ├── HomePage.jsx
│       ├── HomePage.css
│       └── components/
│           ├── Header/
│           ├── Sidebar/
│           ├── TopicRecommendations/
│           └── VideoGrid/
└── utils/
    └── assetPath.js
```

_The structure may change as the application grows._

## React Concepts Practiced

This project is also a practical React learning space. Current implementations provide experience with:

- **Components** — splitting the interface into focused, reusable pieces.
- **Props** — passing video data and event handlers between components.
- **State (`useState`)** — managing search input, selected topics, and UI behavior.
- **Effects (`useEffect`)** — subscribing to browser scroll events and cleaning them up.
- **Event handling** — responding to clicks, keyboard input, and scrolling.
- **Conditional rendering** — displaying different UI states based on application data.
- **List rendering and keys** — generating video cards from arrays.
- **Lifting state up** — keeping shared state in a common parent component.

## Development Direction

The React version is being developed incrementally. Each feature is intended to introduce or strengthen a specific concept instead of adding complexity for its own sake.

The current focus is improving component design, state management, and reusable interactions before moving into routing, persistence, and API-driven data.

## Feedback

Found a bug or have an idea that could improve the project? Feel free to [open an issue](https://github.com) in the repository.

---

<div align="center">

**Made by [Mazen Medhat](https://github.com/MaZeNN113)**

_Learning by building. Improving one component at a time._

</div>
