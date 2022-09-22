import React, { useEffect, useState } from "react";
import { MockUpPlayerContainerStyle } from "./common/styles";
import VideoPlayer from "./videoPlayer";
import video1 from "../assets/videoplayback1.mp4";
import video2 from "../assets/videoplayback2.mp4";
import video3 from "../assets/videoplayback3.mp4";
import NowPlayBox from "./common/nowPlayBox";

function MultiVideoBox() {
    const [firstVideo, setFirstVideo] = useState({
        url: video1,
        nowTime: 0,
        role: "change",
    });
    const [nowIndex, setNowIndex] = useState(0);
    const [nowPlaying, setNowPlaying] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [buffered, setBuffered] = useState(false);
    const [seconds, setSeconds] = useState(0);

    const dummy = [
        "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_1_20220426_132036.m3u8",
        "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_2_20220426_132036.m3u8",
        "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_3_20220426_132036.m3u8",
        "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_4_20220426_132036.m3u8",
        "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_5_20220426_132036.m3u8",
        "https://redlabmcdn.s.llnwi.net/st01/content/going/vod/62677380d0c685ea2a274b39/62677380d0c685ea2a274b39_6_20220426_132036.m3u8",
    ];

    useEffect(() => {
        setNowPlaying(true);

        return () => {
            setNowPlaying(true);
        };
    }, []);

    return (
        <MockUpPlayerContainerStyle>
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
                                    url={item}
                                    index={index}
                                    nowTime={firstVideo.nowTime}
                                    controls={nowIndex === index ? true : false}
                                    setNowIndex={setNowIndex}
                                    nowPlaying={nowPlaying}
                                    setNowPlaying={setNowPlaying}
                                    role={firstVideo.role}
                                    playbackRate={playbackRate}
                                    setPlaybackRate={setPlaybackRate}
                                    setBuffered={setBuffered}
                                    seconds={seconds}
                                    setSeconds={setSeconds}
                                />
                            </div>
                            {nowIndex === index ? (
                                <NowPlayBox isLive="live" />
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
