import MultiLiveBox from "components/multiLiveBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LivePage from "../pages/livePage";
import VideoPage from "../pages/videoPage";

function RootRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VideoPage />} />
                <Route path="/live" element={<>...로딩중</>} />
                <Route path="/live/:id" element={<MultiLiveBox />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRoute;
