import { useRef, useState } from "react";
import styled from "styled-components";
import { MockUpPlayerContainerStyle } from "./common/styles";
import VideoPlayer from "./videoPlayer";
import video1 from "../assets/videoplayback1.mp4";
import video2 from "../assets/videoplayback2.mp4";
import video3 from "../assets/videoplayback3.mp4";

function MultiVideoBox() {
    const [firstVideo, setFirstVideo] = useState({ url: video1, nowTime: 0 });

    const [dummy, setDummy] = useState([
        video1,
        video2,
        video3,
        video1,
        video2,
        video3,
    ]);

    return (
        <MockUpPlayerContainerStyle>
            <div className="first-video">
                <VideoPlayer
                    setDummy={setFirstVideo}
                    url={firstVideo.url}
                    index={0}
                    nowTime={firstVideo.nowTime}
                    controls={true}
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
                            />
                        </div>
                    ))}
                </>
            </div>
        </MockUpPlayerContainerStyle>
    );
}

export default MultiVideoBox;
