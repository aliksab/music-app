import { useState } from "react";
import tracsList from "../assets/tracsList";
import Track from "../components/Track/Track";
import style from "./mainPage.module.scss";
import { Input } from "@mui/material";

const runSearch = (query: string) => {
    if (!query) {
        return tracsList;
    }
    const lowerCaseQuery = query.toLowerCase();
    return tracsList.filter(
        (track) =>
            track.title.toLowerCase().includes(lowerCaseQuery) ||
            track.artists.toLowerCase().includes(lowerCaseQuery)
    );
};
const MainPage = () => {
    const [tracks, setTracks] = useState(tracsList);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const foundTracks = runSearch(event.target.value);
        setTracks(foundTracks);
    };

    return (
        <div className={style.search}>
            <Input
                className={style.input}
                placeholder="Поиск трека"
                onChange={handleChange}
            />
            <div className={style.list}>
                {tracks.map((track) => (
                    <Track key={track.id} {...track} />
                ))}
            </div>
        </div>
    );
};

export default MainPage;
