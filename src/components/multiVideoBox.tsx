import React, { useEffect, useState } from "react";
import { MockUpPlayerContainerStyle } from "./common/styles";
import VideoPlayer from "./videoPlayer";
import NowPlayBox from "./common/nowPlayBox";
import { useSelector } from "react-redux";
import { RootReducerType } from "store";
import { useDispatch } from "react-redux";
import { MainVideoAction } from "store/mainVideoReducers";

function MultiVideoBox() {
    const [firstVideo, setFirstVideo] = useState({
        url: "",
        nowTime: 0,
        role: "change",
    });
    const [nowIndex, setNowIndex] = useState(0);
    const [nowPlaying, setNowPlaying] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [buffered, setBuffered] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const { isPc } = useSelector(
        (state: RootReducerType) => state.NowMediaQueryReducer
    );

    const [dummy, setDummy] = useState([
        {
            id: 1,
            state: false,
            url: "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_1_20220426_132036.m3u8",
        },
        {
            id: 2,
            state: false,
            url: "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_2_20220426_132036.m3u8",
        },
        {
            id: 3,
            state: false,
            url: "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_3_20220426_132036.m3u8",
        },
        {
            id: 4,
            state: false,
            url: "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_4_20220426_132036.m3u8",
        },
        {
            id: 5,
            state: false,
            url: "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_5_20220426_132036.m3u8",
        },
        {
            id: 6,
            state: false,
            url: "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_6_20220426_132036.m3u8",
        },
    ]);

    useEffect(() => {
        if (dummy.every((value) => value.state === true)) {
            setNowPlaying(true);
        } else {
            setNowPlaying(false);
        }
    }, [dummy]);

    return (
        <MockUpPlayerContainerStyle isPc={isPc}>
            <div className="first-video"></div>
            <div className="select-video">
                <>
                    {dummy.map((item, index) => (
                        <React.Fragment key={`video${index}`}>
                            <div
                                key={index}
                                className={
                                    nowIndex === index
                                        ? "nowPlayVideo"
                                        : "select-video-item"
                                }
                            >
                                <VideoPlayer
                                    setDummy={setFirstVideo}
                                    url={item.url}
                                    index={index}
                                    nowTime={firstVideo.nowTime}
                                    controls={nowIndex === index ? true : false}
                                    setNowIndex={setNowIndex}
                                    nowIndex={nowIndex}
                                    nowPlaying={nowPlaying}
                                    setNowPlaying={setNowPlaying}
                                    role={firstVideo.role}
                                    playbackRate={playbackRate}
                                    setPlaybackRate={setPlaybackRate}
                                    setBuffered={setBuffered}
                                    buffered={buffered}
                                    seconds={seconds}
                                    setSeconds={setSeconds}
                                    setfummy={setDummy}
                                />
                            </div>
                            {nowIndex === index ? (
                                <NowPlayBox isLive="live" isPc={isPc} />
                            ) : (
                                ""
                            )}
                        </React.Fragment>
                    ))}
                </>
            </div>
        </MockUpPlayerContainerStyle>
    );
}

export default MultiVideoBox;
