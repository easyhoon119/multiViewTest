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

    const dummy = [video1, video2, video3, video1, video2, video3];

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
