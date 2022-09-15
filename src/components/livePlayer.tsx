import THEOLivePlayer from "@theolive/player";
import { useEffect, useRef } from "react";

interface LivePlayerProps {
    className: string;
    channelId: string;
}

function LivePlayer({ className, channelId }: LivePlayerProps) {
    const liveBox = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const player = new THEOLivePlayer(channelId, true);
        player.style.width = "100%";
        player.style.height = "100%";
        console.log(player);

        if (liveBox.current) {
            liveBox.current.append(player);
        }
    }, [channelId]);

    return <div className={className} ref={liveBox}></div>;
}

export default LivePlayer;
