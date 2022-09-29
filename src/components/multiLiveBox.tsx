import { MockUpPlayerContainerStyle } from "./common/styles";
import THEOLivePlayer from "@theolive/player";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import LivePlayer from "./livePlayer";
import NowPlayBox from "./common/nowPlayBox";
import { useSelector } from "react-redux";
import { RootReducerType } from "store";
import { useNavigate, useParams } from "react-router-dom";
import { StyledComponent } from "styled-components";

function MultiLiveBox() {
    const [firstLive, setFirstLive] = useState({
        url: "08jyqcm2p7osghhzyoz8b1sxs",
        index: 0,
    });
    const { isPc } = useSelector(
        (state: RootReducerType) => state.NowMediaQueryReducer
    );
    const { mainPlayer } = useSelector(
        (state: RootReducerType) => state.MainLiveReducer
    );
    const [foldSelect, setFoldSelect] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const mockref = useRef<HTMLDivElement>(null);
    const [channelArray, setChannelArray] = useState<string[]>([]);

    const liveDummy = [
        "08jyqcm2p7osghhzyoz8b1sxs",
        "08jyqcm2p7osghhzyoz8b1sxs",
        "08jyqcm2p7osghhzyoz8b1sxs",
        // "08jyqcm2p7osghhzyoz8b1sxs",
        // "08jyqcm2p7osghhzyoz8b1sxs",
    ];

    useEffect((): any => {
        if (params.id === "12345" && mockref) {
            window.parent.postMessage(
                {
                    childSize: {
                        width: mockref.current?.offsetWidth,
                        height: mockref.current?.scrollHeight,
                        full: isFullScreen,
                    },
                },
                "http://127.0.0.1:5500"
            );
        }
    }, [isPc, isFullScreen]);

    const afterGetMessage = (e: any) => {
        console.log(e.data);
        console.log("hih");
        if (e.origin === "http://127.0.0.1:5500") {
            setChannelArray(e.data);
        }
    };

    useEffect(() => {
        window.addEventListener("message", (e) => afterGetMessage(e));

        return () => {
            window.removeEventListener("message", (e) => afterGetMessage(e));
        };
    }, []);

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

    if (params.id !== "12345") {
        return (
            <>
                <p>...로딩중</p>
            </>
        );
    }

    return (
        <MockUpPlayerContainerStyle
            full={isFullScreen}
            fold={foldSelect}
            isPc={isPc}
            ref={mockref}
        >
            {channelArray.length > 0 ? (
                <>
                    <div className="first-video">
                        {isFullScreen ? (
                            <div
                                onClick={onFoldSelect}
                                className="fold-select-btn"
                            >
                                &gt;
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="select-live">
                        {channelArray.map((item, index) => (
                            <React.Fragment key={`box${index}`}>
                                {firstLive.index === index ? (
                                    <NowPlayBox
                                        isLive="live"
                                        isPc={isPc}
                                        full={isFullScreen}
                                    />
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
                </>
            ) : (
                ""
            )}
        </MockUpPlayerContainerStyle>
    );
}

export default MultiLiveBox;
