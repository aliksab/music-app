import { createContext, useState } from "react";
import tracsList from "../assets/tracsList";

const audio = new Audio();

// export const AudioContext = createContext({audio, currentTrack, handleToggleAudio, currentTrack, isPlaying});
interface AudioContext {
    audio: any;
    currentTrack: any;
    handleToggleAudio: any;
    isPlaying: any;
}

export const AudioContext = createContext<AudioContext>({
    audio: null,
    currentTrack: null,
    handleToggleAudio: () => {},
    isPlaying: false
});

const AudioProvider = ({ children }: any) => {
    const [currentTrack, setCurrentTrack] = useState(tracsList[0]);
    const [isPlaying, setPlaying] = useState(false);
    const handleToggleAudio = (track: any) => {
        if (currentTrack.id !== track.id) {
            setCurrentTrack(track);
            setPlaying(true);

            audio.src = track.src;
            audio.currentTime = 0;
            audio.play();
            return;
        }

        if (isPlaying) {
            audio.pause();
            setPlaying(false);
        } else {
            audio.play();
            setPlaying(true);
        }
    };
    const value = { audio, currentTrack, isPlaying, handleToggleAudio };
    return (
        <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
    );
};

export default AudioProvider;
