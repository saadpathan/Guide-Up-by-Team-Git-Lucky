
import { useState, useCallback } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button } from '@/components/ui/button';
import { Speaker, X } from 'lucide-react';

type TextToSpeechProps = {
  text: string;
  buttonLabel?: string;
};

export function TextToSpeech({ text, buttonLabel = "Listen" }: TextToSpeechProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { speak, cancel, speaking } = useSpeechSynthesis();

  const handleSpeak = useCallback(() => {
    if (speaking) {
      cancel();
      setIsPlaying(false);
    } else {
      speak({ text });
      setIsPlaying(true);
    }
  }, [speak, cancel, speaking, text]);

  // When speech ends
  const onEnd = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return (
    <Button 
      onClick={handleSpeak}
      variant="outline"
      className="flex items-center gap-2 text-purple hover:text-purple-dark hover:bg-purple-light transition-colors"
      aria-label={isPlaying ? "Stop reading text" : "Listen to text"}
    >
      {isPlaying ? <X size={16} /> : <Speaker size={16} />}
      <span>{isPlaying ? "Stop" : buttonLabel}</span>
    </Button>
  );
}

// Main component that adds text-to-speech to any page content
export function PageTextToSpeech({ selector = "main" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { speak, cancel, speaking } = useSpeechSynthesis({ onEnd: () => setIsPlaying(false) });

  const handleSpeakPage = useCallback(() => {
    if (speaking) {
      cancel();
      setIsPlaying(false);
      return;
    }
    
    // Get the main content element
    const mainElement = document.querySelector(selector);
    if (!mainElement) return;
    
    // Extract text content
    const text = mainElement.textContent || "";
    speak({ text });
    setIsPlaying(true);
  }, [speak, cancel, speaking, selector]);

  return (
    <Button 
      onClick={handleSpeakPage}
      className={`fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-purple hover:bg-purple-dark'}`}
      aria-label={isPlaying ? "Stop reading page" : "Read page aloud"}
    >
      {isPlaying ? <X size={24} color="white" /> : <Speaker size={24} color="white" />}
    </Button>
  );
}
