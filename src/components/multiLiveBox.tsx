import { MockUpPlayerContainerStyle } from "./common/styles";
import THEOLivePlayer from "@theolive/player";
import React, { useEffect, useState } from "react";
import LivePlayer from "./livePlayer";
import NowPlayBox from "./common/nowPlayBox";

function MultiLiveBox() {
    const [firstLive, setFirstLive] = useState({
        url: "08jyqcm2p7osghhzyoz8b1sxs",
        index: 0,
    });

    const liveDummy = [
        "08jyqcm2p7osghhzyoz8b1sxs",
        "08jyqcm2p7osghhzyoz8b1sxs",
        "08jyqcm2p7osghhzyoz8b1sxs",
        // "08jyqcm2p7osghhzyoz8b1sxs",
    ];

    useEffect(() => {
        if (THEOLivePlayer.requiresServiceWorker()) {
            navigator.serviceWorker.register("THEOLive.sw.js");
        }
    }, []);

    return (
        <MockUpPlayerContainerStyle>
            {/* <LivePlayer
                className="first-video"
                channelId={firstLive.url}
                index={0}
            /> */}
            <div className="first-video"></div>
            <div className="select-video">
                {liveDummy.map((item, index) => (
                    //     <iframe
                    //     width={"100%"}
                    //     height={"150px"}
                    //     id={`liveBox${index}`}
                    //     title={`liveBox${index}`}
                    //     src={`http://localhost:3000/selectLive/${index}`}
                    //     key={index}
                    // ></iframe>
                    <React.Fragment key={`box${index}`}>
                        {firstLive.index === index ? (
                            <NowPlayBox isLive="live" />
                        ) : (
                            ""
                        )}
                        <LivePlayer
                            className="select-video-item"
                            channelId={item}
                            setFirstLive={setFirstLive}
                            firstLive={firstLive.index}
                            index={index}
                            key={index}
                        />
                    </React.Fragment>
                ))}
            </div>
        </MockUpPlayerContainerStyle>
    );
}

export default MultiLiveBox;
