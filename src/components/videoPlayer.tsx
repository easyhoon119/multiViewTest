import styled from "styled-components";
import ReactPlayer from "react-player";
import { useEffect, useRef } from "react";

interface VideoProps {
    setDummy: React.Dispatch<any>;
    url: string;
    index: number;
    nowTime?: number;
    controls: boolean;
    setNowIndex?: React.Dispatch<React.SetStateAction<number>>;
    nowPlaying: boolean;
    setNowPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

function VideoPlayer({
    url,
    setDummy,
    index,
    nowTime,
    controls,
    setNowIndex,
    nowPlaying,
    setNowPlaying,
}: VideoProps) {
    const nowVideo = useRef<ReactPlayer>(null);

    const onChangeVideoArray = (e: React.RefObject<ReactPlayer>) => {
        setDummy({ url, nowTime: e.current?.getCurrentTime() });
        if (setNowIndex) {
            setNowIndex(() => index);
        }
    };

    const onPauseVideo = () => {
        setNowPlaying(false);
    };

    const onPlayingVideo = () => {
        setNowPlaying(true);
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
                playing={nowPlaying}
                muted
                onClick={() => {
                    onChangeVideoArray(nowVideo);
                }}
                onPause={onPauseVideo}
                onPlay={onPlayingVideo}
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
