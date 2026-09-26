import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Repeat, Music, Disc, X } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(165); // Default 2:45 if not loaded
  const [volume, setVolume] = useState(0.8);
  const [usingSynthFallback, setUsingSynthFallback] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthIntervalRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Web Audio API ambient lofi fallback in case remote mp3 fails or is blocked
  const playSynthNote = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Calm Lo-Fi Chords: Fmaj7 -> Em7 -> Dm7 -> Cmaj7
      const chordProgressions = [
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [164.81, 196.00, 246.94, 293.66], // Em7
        [146.83, 174.61, 220.00, 261.63], // Dm7
        [130.81, 164.81, 196.00, 246.94], // Cmaj7
      ];

      const now = ctx.currentTime;
      const chordIndex = Math.floor((now / 3) % chordProgressions.length);
      const notes = chordProgressions[chordIndex];

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm triangle / sine synth tone
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime((isMuted ? 0 : volume) * 0.05, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3);
      });
    } catch {
      // AudioContext unavailable
    }
  }, [isMuted, volume]);

  const startSynthFallback = useCallback(() => {
    setUsingSynthFallback(true);
    if (!synthIntervalRef.current) {
      playSynthNote();
      synthIntervalRef.current = window.setInterval(playSynthNote, 2800);
    }
  }, [playSynthNote]);

  const stopSynthFallback = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleEnded = () => {
      if (isLooping) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        setIsPlaying(false);
      }
    };
    const handleError = () => {
      // Audio network/CORS error -> seamlessly switch to synth audio fallback
      startSynthFallback();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      stopSynthFallback();
    };
  }, [isLooping, startSynthFallback]);

  // Handle synth time ticker if using fallback
  useEffect(() => {
    let timer: number;
    if (usingSynthFallback && isPlaying) {
      timer = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            return isLooping ? 0 : duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [usingSynthFallback, isPlaying, duration, isLooping]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      stopSynthFallback();
      setIsPlaying(false);
    } else {
      try {
        audio.volume = isMuted ? 0 : volume;
        audio.loop = isLooping;
        await audio.play();
        setIsPlaying(true);
      } catch {
        // If autoplay policy or network blocks mp3, start synth fallback
        startSynthFallback();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (audio) {
      audio.volume = newMuted ? 0 : volume;
    }
  };

  const toggleLoop = () => {
    const newLoop = !isLooping;
    setIsLooping(newLoop);
    if (audioRef.current) {
      audioRef.current.loop = newLoop;
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;

    setCurrentTime(newTime);
    if (audioRef.current && !usingSynthFallback) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        id="bgAudio"
        preload="auto"
        loop={isLooping}
        src="https://k.top4top.io/m_3880xm7dy1.mp3"
      />

      {/* Floating Audio Player Card */}
      {isPlayerOpen && (
        <div 
          id="playerCard"
          className="fixed bottom-24 right-6 z-40 w-80 sm:w-84 rounded-2xl bg-[#0f0f18]/95 dark:bg-[#0f0f18]/95 light:bg-white/95 backdrop-blur-xl border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl p-4 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
        >
          {/* Card Header with Disc & Meta */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] mb-3">
            <div className="flex items-center gap-3">
              {/* Spinning Disc */}
              <div 
                className={`w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-400 shadow-md ${
                  isPlaying ? 'animate-spin-slow' : ''
                }`}
              >
                <Disc className="w-5 h-5" />
              </div>

              {/* Title & Artist */}
              <div>
                <h4 className="font-sans font-bold text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 leading-tight">
                  Background Vibes
                </h4>
                <p className="font-mono text-xs text-amber-500 font-medium">
                  4lcaDev {usingSynthFallback && <span className="text-[10px] text-zinc-500">(Ambient)</span>}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsPlayerOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Tutup player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar & Timing */}
          <div className="mb-4">
            <div
              onClick={handleSeek}
              className="w-full h-2 bg-zinc-800/80 dark:bg-zinc-800/80 light:bg-zinc-200 rounded-full overflow-hidden cursor-pointer relative group"
            >
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-150 group-hover:brightness-110"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between mt-1.5 font-mono text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500 tabular-nums">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls: Mute, Play/Pause, Loop */}
          <div className="flex items-center justify-between">
            {/* Mute Toggle */}
            <button
              onClick={toggleMute}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors cursor-pointer ${
                isMuted 
                  ? 'text-red-400 bg-red-500/10 border border-red-500/20' 
                  : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10'
              }`}
              title={isMuted ? 'Unmute' : 'Mute'}
              type="button"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-11 h-11 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 flex items-center justify-center transition-all transform active:scale-95 shadow-lg shadow-amber-500/25 cursor-pointer"
              aria-label={isPlaying ? 'Pause' : 'Play'}
              type="button"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            {/* Loop Button */}
            <button
              onClick={toggleLoop}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors cursor-pointer ${
                isLooping 
                  ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30' 
                  : 'text-zinc-500 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10'
              }`}
              title={isLooping ? 'Loop aktif' : 'Loop mati'}
              type="button"
            >
              <Repeat className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => setIsPlayerOpen(!isPlayerOpen)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-white/90 backdrop-blur-md border border-white/15 dark:border-white/15 light:border-black/15 shadow-2xl flex items-center justify-center text-amber-400 hover:border-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
        aria-label="Kontrol musik latar"
        type="button"
      >
        {isPlaying ? (
          /* Animated Equalizer bars */
          <div className="flex items-end gap-[3px] h-4">
            <span className="w-1 bg-amber-400 rounded-full eq-bar-1" />
            <span className="w-1 bg-amber-400 rounded-full eq-bar-2" />
            <span className="w-1 bg-amber-400 rounded-full eq-bar-3" />
            <span className="w-1 bg-amber-400 rounded-full eq-bar-4" />
          </div>
        ) : (
          <Music className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
        )}
      </button>
    </>
  );
};
