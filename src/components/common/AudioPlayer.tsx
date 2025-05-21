// components/AudioPlayer.tsx
import { Pause, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  audioSource: string;
  className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioSource,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle play/pause functionality
  const togglePlayPause = (): void => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
        // Handle auto-play restrictions or file loading issues
        setIsPlaying(false);
      });
    }

    setIsPlaying(!isPlaying);
  };

  // Handle audio events
  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    const handleEnded = (): void => {
      setIsPlaying(false);
    };

    const handleError = (e: Event): void => {
      console.error("Audio error:", e);
      setIsPlaying(false);
    };

    audioElement.addEventListener("ended", handleEnded);
    audioElement.addEventListener("error", handleError);

    // Clean up event listeners
    return () => {
      audioElement.removeEventListener("ended", handleEnded);
      audioElement.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div className={`audio-player ${className}`}>
      <audio ref={audioRef} src={audioSource} />
      <button
        className="text-[#237A15] hover:underline flex items-center gap-1"
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <>
            <Pause className=" size-4" />
            Pause Audio
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            Listen to Audio
          </>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
