import THEOLivePlayer from "@theolive/player";

const MAINLIVE = "live/MAINLIVE" as const;

type MainLiveState = {
    mainPlayer: THEOLivePlayer | null;
};

export const MainLiveAction = (data: MainLiveState) => ({
    type: MAINLIVE,
    data: data,
});

const initialState: MainLiveState = {
    mainPlayer: null,
};

type MainLiveActionType = ReturnType<typeof MainLiveAction>;

function MainLiveReducer(
    state: MainLiveState = initialState,
    action: MainLiveActionType
): MainLiveState {
    switch (action.type) {
        case MAINLIVE: {
            return {
                ...state,
                mainPlayer: action.data.mainPlayer,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
}

export default MainLiveReducer;
