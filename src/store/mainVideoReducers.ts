const MAINVIDEO = "video/MAINVIDEO" as const;

type MainVideoState = {
    videoPlayer: boolean[];
};

export const MainVideoAction = (data: MainVideoState) => ({
    type: MAINVIDEO,
    data: data,
});

const initialState: MainVideoState = {
    videoPlayer: [],
};

type MainVideoActionType = ReturnType<typeof MainVideoAction>;

function MainVideoReducer(
    state: MainVideoState = initialState,
    action: MainVideoActionType
): MainVideoState {
    switch (action.type) {
        case MAINVIDEO: {
            return {
                ...state,
                videoPlayer: action.data.videoPlayer,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
}

export default MainVideoReducer;
