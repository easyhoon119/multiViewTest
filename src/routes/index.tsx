import LivePlayer from "components/livePlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LivePage from "../pages/livePage";
import VideoPage from "../pages/videoPage";

function RootRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VideoPage />} />
                <Route path="/live" element={<LivePage />} />
                {/* <Route
                    path="http://8462-125-143-153-4.ngrok.io/live/0"
                    element={
                        <LivePlayer
                            className="select-video-item"
                            channelId={"6lptg30lega4mbos4zqs9kmvy"}
                        />
                    }
                />
                <Route
                    path="/selectLive/1"
                    element={
                        <LivePlayer
                            className="select-video-item"
                            channelId={"6lptg30lega4mbos4zqs9kmvy"}
                        />
                    }
                />
                <Route
                    path="/selectLive/2"
                    element={
                        <LivePlayer
                            className="select-video-item"
                            channelId={"08jyqcm2p7osghhzyoz8b1sxs"}
                        />
                    }
                />
                <Route
                    path="/selectLive/3"
                    element={
                        <LivePlayer
                            className="select-video-item"
                            channelId={"08jyqcm2p7osghhzyoz8b1sxs"}
                        />
                    }
                />
                <Route
                    path="/selectLive/4"
                    element={
                        <LivePlayer
                            className="select-video-item"
                            channelId={"6lptg30lega4mbos4zqs9kmvy"}
                        />
                    }
                /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default RootRoute;
