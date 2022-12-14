import THEOLivePlayer from "@theolive/player";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootReducerType } from "store";
import { MainLiveAction } from "store/mainLiveReducers";

interface LivePlayerProps {
    className: string;
    channelId: string;
    index: number;
    setFirstLive?: React.Dispatch<
        React.SetStateAction<{
            url: string;
            index: number;
        }>
    >;
    firstLive?: number;
    setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
    isFullScreen: boolean;
}

function LivePlayer({
    className,
    channelId,
    setFirstLive,
    index,
    firstLive,
    setIsFullScreen,
    isFullScreen,
}: LivePlayerProps) {
    const liveBox = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const { mainPlayer } = useSelector(
        (state: RootReducerType) => state.MainLiveReducer
    );

    useEffect(() => {
        const player = new THEOLivePlayer(channelId, false);
        player.style.width = "100%";
        player.style.height = "100%";
        player.style.cursor = "pointer";

        if (liveBox.current) {
            if (index === 0) {
                dispatch(
                    MainLiveAction({
                        mainPlayer: player,
                    })
                );
            }
            liveBox.current.prepend(player);
        }

        return () => {
            player.destroy();
        };
    }, [channelId]);

    const onChangeFirstLive = (e: React.MouseEvent<HTMLDivElement>) => {
        if (setFirstLive) {
            setFirstLive({ url: channelId, index: index });
        }
    };

    const onChangeFullScreen = () => {
        setIsFullScreen((prev) => !prev);
    };

    const onMuted = () => {
        if (mainPlayer) {
            mainPlayer.muted = !mainPlayer.muted;
            console.log(mainPlayer.volume);
        }
    };

    const onSoundDown = () => {
        if (mainPlayer) {
            mainPlayer.volume = mainPlayer.volume - 0.2;
        }
    };

    return (
        <>
            <div
                className={`${firstLive === index ? "nowPlayLive" : className}`}
                onClick={onChangeFirstLive}
                ref={liveBox}
            >
                {firstLive === index ? (
                    <div
                        className="fullscreen-icon"
                        style={{
                            height: "50px",
                            position: "absolute",
                            display: "flex",
                            bottom: "0.5%",
                            right: "3%",
                            fontSize: "2rem",
                            fontWeight: "700",
                            gap: "15px",
                            zIndex: "9999999999999999999999999999999999999",
                            color: "rgba(255, 255, 255, 0.5)",
                        }}
                    >
                        <div onClick={onMuted}>????</div>
                        <div onClick={onSoundDown}>down</div>
                        <div onClick={onChangeFullScreen}>
                            {isFullScreen ? "????" : "????"}
                        </div>
                    </div>
                ) : (
                    ""
                )}
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: "999999999999",
                        backgroundColor: "gray",
                        padding: "0.5rem",
                        color: "whitesmoke",
                        fontWeight: "600",
                    }}
                >
                    {index}
                </div>
            </div>
        </>
    );
}
export default LivePlayer;
