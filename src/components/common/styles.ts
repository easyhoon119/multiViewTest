import styled from "styled-components";

export const MockUpPlayerContainerStyle = styled.div<{
    full?: boolean;
    fold?: boolean;
}>`
    width: 100%;
    height: 42vw;
    margin: 0 auto;
    background-color: black;
    display: flex;
    position: relative;

    ${(props) =>
        props.full
            ? "width : 100vw; height : 100vh; position : fixed; top:0; left : 0;"
            : ""}

    .first-video {
        width: 85%;
        height: 100%;
        ${(props) => (props.fold ? "width : 100%;" : "")}
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .select-video {
        position: static;
        width: 15%;
        height: 100%;
        overflow-y: scroll;
        transition: all ease 0.5;
        ${(props) =>
            props.full && props.fold
                ? "width : 0; animation: selectFold ease 0.5s; "
                : "width : 15%;"}

        .announcement-text {
            font-size: 100% !important;
        }
    }

    .select-live {
        position: static;
        width: 15%;
        height: 100%;
        overflow-y: scroll;
        transition: all ease 0.5;
        /* position: relative; */
        /* animation: selectFold ease 0.5s;
        animation-direction: alternate; */
        ${(props) =>
            props.full && props.fold
                ? "width : 0; animation: selectFold ease 0.5s; "
                : "width : 15%;"}

        .announcement-text {
            font-size: 100% !important;
        }

        .vjs-control-bar {
            display: none !important;
        }

        .theoplayer-container {
            pointer-events: none !important;
        }
    }

    .select-live-item {
        width: 100%;
        height: 8vw;
        border-bottom: 1px solid gray;
        position: relative;
        z-index: 9999;
    }

    .select-video-item {
        width: 100%;
        height: 8vw;
        border-bottom: 1px solid gray;
        position: relative;
        z-index: 9999;

        .vjs-control-bar {
            display: none !important;
        }

        .theoplayer-container {
            pointer-events: none !important;
        }

        video {
            pointer-events: none;
        }
    }

    .nowPlayVideo {
        animation: livePlay ease 0.3s;
        width: 85%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .nowPlayLive {
        /* transform: scale(2); */
        animation: livePlay ease 0.3s;
        width: 85%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        cursor: none !important;
        ${(props) => (props.fold ? "width : 100%;" : "")}

        .fullscreen-icon {
            display: none;
            cursor: pointer;
        }
    }

    .nowPlayLive:hover {
        .fullscreen-icon {
            display: block;
        }
    }

    .theoplayer-container {
        height: 100% !important;
        padding: 0 !important;
    }

    .fold-select-btn {
        position: absolute;
        top: 50%;
        right: 1%;
        padding: 0.5rem;
        transition: all ease 0.5;
        ${(props) => (props.fold ? "transform: rotate(180deg);" : "")}
        z-index: 9999999999999999999;
        font-size: 2rem;
        font-weight: 700;
        color: whitesmoke;
        cursor: pointer;
    }

    @keyframes livePlay {
        0% {
            width: 0;
            height: 0;
        }

        /* 25% {
            width: 20%;
            height: 25%;
        }

        50% {
            width: 45%;
            height: 50%;
        }

        75% {
            width: 65%;
            height: 75%;
        } */

        100% {
            width: 85%;
            height: 100%;
        }
    }

    @keyframes selectFold {
        0% {
            width: 15%;
        }
        100% {
            width: 0;
        }
    }

    @keyframes selectFoldOpen {
        0% {
            width: 0;
        }
        100% {
            width: 15%;
        }
    }
`;
