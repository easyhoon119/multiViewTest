import { MockUpPlayerContainerStyle } from "./common/styles";
import THEOLivePlayer from "@theolive/player";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import LivePlayer from "./livePlayer";

function MultiLiveBox() {
    const [firstLive, setFirstLive] = useState({
        url: "6lptg30lega4mbos4zqs9kmvy",
        index: 0,
    });

    const liveDummy = [
        "6lptg30lega4mbos4zqs9kmvy",
        "6lptg30lega4mbos4zqs9kmvy",
        "6lptg30lega4mbos4zqs9kmvy",
        "6lptg30lega4mbos4zqs9kmvy",
        "6lptg30lega4mbos4zqs9kmvy",
        "6lptg30lega4mbos4zqs9kmvy",
    ];

    useEffect(() => {
        if (THEOLivePlayer.requiresServiceWorker()) {
            navigator.serviceWorker.register("THEOLive.sw.js");
        }
    }, []);

    return (
        <MockUpPlayerContainerStyle>
            <LivePlayer className="first-video" channelId={firstLive.url} />
            <div className="select-video">
                {liveDummy.map((item, index) => (
                    <LivePlayer
                        className="select-video-item"
                        channelId={item}
                        key={index}
                    />
                ))}
            </div>
        </MockUpPlayerContainerStyle>
    );
}

export default MultiLiveBox;
