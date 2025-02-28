import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import VideoPlayer from './Components/VideoPlayer';
import MusicPlayer from './Components/MusicPlayer';
import Homepage from "./Components/Homepage"

function App() {
  return (
    <div className="wrapper">
      <div className="flexbox nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/music-player" className="nav-item">MusicPlayer</Link>
        <Link to="/video-player" className="nav-item">VideoPlayer</Link>
      </div>
      <Routes>
         <Route path="/" element={<Homepage/>} />
        <Route path='/music-player' element={<MusicPlayer />} />
        <Route path='/video-player' element={<VideoPlayer />} />
    </Routes>
    </div>
  );
}

export default App;
