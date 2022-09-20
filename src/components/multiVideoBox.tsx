import { useState } from "react";
import { MockUpPlayerContainerStyle } from "./common/styles";
import VideoPlayer from "./videoPlayer";
import video1 from "../assets/videoplayback1.mp4";
import video2 from "../assets/videoplayback2.mp4";
import video3 from "../assets/videoplayback3.mp4";
import NowPlayBox from "./common/nowPlayBox";

function MultiVideoBox() {
    const [firstVideo, setFirstVideo] = useState({ url: video1, nowTime: 0 });
    const [nowIndex, setNowIndex] = useState(0);
    const [nowPlaying, setNowPlaying] = useState(true);

    const dummy = [video1, video2, video3, video1, video2, video3];

    return (
        <MockUpPlayerContainerStyle>
            <div className="first-video">
                <VideoPlayer
                    setDummy={setFirstVideo}
                    url={firstVideo.url}
                    index={0}
                    nowTime={firstVideo.nowTime}
                    controls={true}
                    nowPlaying={nowPlaying}
                    setNowPlaying={setNowPlaying}
                />
            </div>
            <div className="select-video">
                <>
                    {dummy.map((item, index) => (
                        <div key={index} className="select-video-item">
                            <VideoPlayer
                                setDummy={setFirstVideo}
                                url={item}
                                index={index}
                                controls={false}
                                setNowIndex={setNowIndex}
                                nowPlaying={nowPlaying}
                                setNowPlaying={setNowPlaying}
                            />
                            {nowIndex === index ? (
                                <NowPlayBox isLive="video" />
                            ) : (
                                ""
                            )}
                        </div>
                    ))}
                </>
            </div>
        </MockUpPlayerContainerStyle>
    );
}

export default MultiVideoBox;
