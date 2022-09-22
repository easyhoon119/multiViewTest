import { BrowserRouter, Routes, Route } from "react-router-dom";
import LivePage from "../pages/livePage";
import VideoPage from "../pages/videoPage";

function RootRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VideoPage />} />
                <Route path="/live" element={<LivePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRoute;
