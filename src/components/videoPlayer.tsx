import styled from "styled-components";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";

interface VideoProps {
    setDummy: React.Dispatch<any>;
    url: string;
    index: number;
    nowTime?: number;
    controls: boolean;
}

function VideoPlayer({ url, setDummy, index, nowTime, controls }: VideoProps) {
    const nowVideo = useRef<ReactPlayer>(null);

    const onChangeVideoArray = (e: React.RefObject<ReactPlayer>) => {
        setDummy({ url, nowTime: e.current?.getCurrentTime() });
    };

    useEffect(() => {
        if (nowTime) {
            nowVideo.current?.seekTo(nowTime, "seconds");
        }
    }, [nowTime]);

    return (
        <VideoPlayerStyle controls={controls}>
            {/* <div className="wrap-video" onClick={onChangeVideoArray}></div> */}
            <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                playing={true}
                muted
                onClick={() => {
                    onChangeVideoArray(nowVideo);
                }}
                playsinline={true}
                ref={nowVideo}
                controls={controls}
                style={{ cursor: "pointer", objectFit: "fill" }}
            />
        </VideoPlayerStyle>
    );
}

const VideoPlayerStyle = styled.div<{ controls: boolean }>`
    width: 100%;
    height: 100%;

    .wrap-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        cursor: pointer;
    }

    video {
        object-fit: ${(props) => (props.controls ? "contain" : "fill")};
    }
`;

export default VideoPlayer;
