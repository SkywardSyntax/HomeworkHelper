import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks = [
    'track1.mp3',
    'track2.mp3',
    'track3.mp3'
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skip = () => {
    setCurrentTrack((currentTrack + 1) % tracks.length);
  };

  const goBack = () => {
    setCurrentTrack((currentTrack - 1 + tracks.length) % tracks.length);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = tracks[currentTrack];
      if (isPlaying) {
        audio.play();
      }
    }
  }, [currentTrack]);

  return (
    <div>
      <audio ref={audioRef} />
      <button onClick={playPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={skip}>Next</button>
      <button onClick={goBack}>Previous</button>
    </div>
  );
};

export default AudioPlayer;
