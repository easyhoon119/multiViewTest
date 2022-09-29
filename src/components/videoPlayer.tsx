import styled from "styled-components";
import ReactPlayer from "react-player/lazy";
import { useEffect, useRef } from "react";

interface VideoProps {
    setDummy: React.Dispatch<any>;
    url: string;
    index: number;
    nowTime: number;
    controls: boolean;
    setNowIndex?: React.Dispatch<React.SetStateAction<number>>;
    nowIndex: number;
    nowPlaying: boolean;
    setNowPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    setBuffered: React.Dispatch<React.SetStateAction<boolean>>;
    buffered: boolean;
    role: string;
    playbackRate: number;
    setPlaybackRate: React.Dispatch<React.SetStateAction<number>>;
    seconds: number;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
    setfummy: React.Dispatch<
        React.SetStateAction<
            {
                id: number;
                state: boolean;
                url: string;
            }[]
        >
    >;
}

function VideoPlayer({
    url,
    setDummy,
    index,
    nowTime,
    controls,
    setNowIndex,
    nowIndex,
    nowPlaying,
    setNowPlaying,
    role,
    playbackRate,
    setPlaybackRate,
    setBuffered,
    buffered,
    seconds,
    setSeconds,
    setfummy,
}: VideoProps) {
    const nowVideo = useRef<ReactPlayer>(null);

    const onChangeVideoArray = (e: React.RefObject<ReactPlayer>) => {
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

    const onSeekingvideo = (currentTime: any) => {
        setfummy((prev) =>
            prev.map((item) =>
                item.url === url ? { ...item, state: false } : item
            )
        );

        setDummy({
            url,
            nowTime: currentTime,
            role: "seek",
        });
    };

    const onSeekedVideo = () => {
        setfummy((prev) =>
            prev.map((item) =>
                item.url === url ? { ...item, state: true } : item
            )
        );
    };

    useEffect(() => {
        if (nowTime && role === "seek") {
            nowVideo.current?.seekTo(nowTime, "seconds");
        }
    }, [nowTime, role]);

    return (
        <VideoPlayerStyle controls={controls}>
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
                onError={(err, data) => {
                    console.log(`${err}`);
                }}
                onPlay={onPlayingVideo}
                playsinline={true}
                pip={true}
                onPlaybackRateChange={(playbackRate: number) => {
                    controls && setPlaybackRate(playbackRate);
                }}
                config={{
                    file: {
                        forceHLS: true,
                        attributes: {
                            preload: "none",
                            onSeeking: (seconds: any) => {
                                onSeekingvideo(seconds.target.currentTime);
                            },
                            onCanPlayThrough: () => {
                                onSeekedVideo();
                            },
                        },
                    },
                }}
                playbackRate={playbackRate}
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
