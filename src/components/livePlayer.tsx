import THEOLivePlayer from "@theolive/player";
import { useEffect, useRef } from "react";
import NowPlayBox from "./common/nowPlayBox";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { MainLiveAction } from "store/mainLiveReducers";
import { useSelector } from "react-redux";
import { stat } from "fs";
import { RootReducerType } from "store";

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
}

function LivePlayer({
    className,
    channelId,
    setFirstLive,
    index,
    firstLive,
}: LivePlayerProps) {
    const liveBox = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const { mainPlayer } = useSelector(
        (state: RootReducerType) => state.MainLiveReducer
    );

    useEffect(() => {
        const player = new THEOLivePlayer(channelId, true);
        player.style.width = "100%";
        player.style.height = "100%";
        player.style.cursor = "pointer";

        if (liveBox.current) {
            liveBox.current.prepend(player);
        }
    }, [channelId]);

    const onChangeFirstLive = (e: React.MouseEvent<HTMLDivElement>) => {
        if (setFirstLive) {
            setFirstLive({ url: channelId, index: index });
        }
    };

    return (
        <>
            <div
                className={`${firstLive === index ? "nowPlayLive" : className}`}
                onClick={onChangeFirstLive}
            >
                <LiveItemStyle ref={liveBox}></LiveItemStyle>
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
                {/* {firstLive === index ? <NowPlayBox /> : ""} */}
            </div>
        </>
    );
}

const LiveItemStyle = styled.div`
    width: 100%;
    height: 100%;
`;

export default LivePlayer;
