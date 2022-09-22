import { MockUpPlayerContainerStyle } from "./common/styles";
import THEOLivePlayer from "@theolive/player";
import React, { useEffect, useRef, useState } from "react";
import LivePlayer from "./livePlayer";
import NowPlayBox from "./common/nowPlayBox";

function MultiLiveBox() {
    const [firstLive, setFirstLive] = useState({
        url: "08jyqcm2p7osghhzyoz8b1sxs",
        index: 0,
    });

    const [foldSelect, setFoldSelect] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const liveDummy = [
        "08jyqcm2p7osghhzyoz8b1sxs",
        "08jyqcm2p7osghhzyoz8b1sxs",
        "08jyqcm2p7osghhzyoz8b1sxs",
        // "08jyqcm2p7osghhzyoz8b1sxs",
    ];

    useEffect(() => {
        if (!isFullScreen) {
            setFoldSelect(false);
        }
    }, [isFullScreen]);

    const onFoldSelect = () => {
        setFoldSelect((prev) => !prev);
    };

    useEffect(() => {
        if (THEOLivePlayer.requiresServiceWorker()) {
            navigator.serviceWorker.register("THEOLive.sw.js");
        }
    }, []);

    return (
        <MockUpPlayerContainerStyle full={isFullScreen} fold={foldSelect}>
            <div className="first-video">
                {isFullScreen ? (
                    <div onClick={onFoldSelect} className="fold-select-btn">
                        &gt;
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className="select-live">
                {liveDummy.map((item, index) => (
                    <React.Fragment key={`box${index}`}>
                        {firstLive.index === index ? (
                            <NowPlayBox isLive="live" />
                        ) : (
                            ""
                        )}
                        <LivePlayer
                            className="select-live-item"
                            channelId={item}
                            setFirstLive={setFirstLive}
                            firstLive={firstLive.index}
                            index={index}
                            key={index}
                            setIsFullScreen={setIsFullScreen}
                            isFullScreen={isFullScreen}
                        />
                    </React.Fragment>
                ))}
            </div>
        </MockUpPlayerContainerStyle>
    );
}

export default MultiLiveBox;
