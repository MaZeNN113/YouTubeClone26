import { HashRouter as Router, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import WatchPage from './pages/WatchPage/WatchPage';
import Header from './pages/HomePage/components/Header/Header'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/watch' element={<WatchPage />} />
          <Route
            path='*'
            element={
              <h1 style={{ color: 'var(--text-primary)' }}> Page Not Found </h1>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
