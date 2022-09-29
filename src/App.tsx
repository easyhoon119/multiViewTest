import { useDispatch } from "react-redux";
import RootRoute from "./routes";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { NowMediaQueryAction } from "store/mediaQueryReducers";

function App() {
    const dispatch = useDispatch();
    const isPc = useMediaQuery({
        query: `(min-width : 1000px)`,
    });

    useEffect(() => {
        console.log(isPc);

        dispatch(
            NowMediaQueryAction({
                isPc: isPc,
            })
        );
    }, [isPc]);

    return (
        <>
            <RootRoute />
        </>
    );
}

export default App;
