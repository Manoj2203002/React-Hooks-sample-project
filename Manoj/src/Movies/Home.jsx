import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import fscreen from 'fscreen';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [player, setPlayer] = useState(false);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(1);
  const [onProgress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function handlePlay() {
    setPlayer(!player);
  }

  function handleMute() {
    setMute(!mute);
  }

  function handleVolume(e) {
    setVolume(parseFloat(e.target.value));
  }

  function handleOnProgress(state) {
    setProgress(state.played * 100);
  }

  function handleValueOnProgress(e) {
    setProgress(e.target.value);
  }

  function handleFullscreen() {
    if (isFullscreen) {
      fscreen.exit(); // Exit fullscreen mode
    } else {
      fscreen.request(document.documentElement); // Request fullscreen on the root element
    }
    setIsFullscreen(!isFullscreen);
  }

  return (
    <div className="player-container">
      <div className="video-wrapper">
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=55Kc0mIyeXM'}
          playing={player}
          muted={mute}
          volume={volume}
          onProgress={handleOnProgress}
          onSeek={onProgress / 100}
          controls={false}
        />
        <input
          type="range"
          className="progress"
          step={0.01}
          max={100}
          min={0}
          value={onProgress}
          onChange={handleValueOnProgress}
        />
      </div>
      <div className="controls">
        <button onClick={handlePlay} className="play">
          {player ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleMute} className="mute">
          {mute ? 'Unmute' : 'Mute'}
        </button>
        <input
          type="range"
          className="volume"
          step={0.01}
          max={1.5}
          min={0}
          value={volume}
          onChange={handleVolume}
        />
        <button onClick={handleFullscreen} className="fullscreen">
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>
    </div>
  );
};

export default Home;
