import { useContext } from "react";
import style from "./track.module.scss";
import { AudioContext } from "../../context/AudioContecst";
import { IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import trackTime from "../../utils/trackTime";
import cn from "classnames";

const Track = (track: object) => {
    const {
        id,
        src,
        preview,
        title,
        artists,
        duration
    }: {
        id: number;
        src: string;
        preview: string;
        title: string;
        artists: string;
        duration: number;
    } = track;
    const { handleToggleAudio, currentTrack, isPlaying } =
        useContext(AudioContext);
    const isCurrentTrack = currentTrack.id === track.id;
    const formatDuration: string = trackTime(duration);
    return (
        <div className={cn(style.track, isCurrentTrack && style.playing)}>
            <IconButton onClick={() => handleToggleAudio(track)}>
                {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <img className={style.preview} src={preview} alt="" />
            <div className={style.credits}>
                <b>{title}</b>
                <p>{artists}</p>
            </div>
            <p>{formatDuration}</p>
        </div>
    );
};

export default Track;
