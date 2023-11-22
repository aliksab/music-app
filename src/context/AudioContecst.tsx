import { createContext, useState } from "react";
import tracsList from "../assets/tracsList";

const audio = new Audio();

export const AudioContext = createContext({});

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
