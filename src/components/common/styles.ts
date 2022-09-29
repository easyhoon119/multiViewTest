import styled from "styled-components";

export const MockUpPlayerContainerStyle = styled.div<{
    full?: boolean;
    fold?: boolean;
    isPc?: boolean;
}>`
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background-color: black;
    display: flex;
    ${(props) => (props.isPc ? "" : "display: block;")}
    position: relative;

    ${(props) =>
        props.full
            ? "width : 100vw; height : 100vh; position : fixed; top:0; left : 0;"
            : ""}

    @media (orientation: landscape) {
        & {
            ${(props) => (!props.isPc && props.full ? "display: flex;" : "")}
        }
    }

    .first-video {
        width: 85%;
        height: 100%;
        ${(props) => (props.fold ? "width : 100%;" : "")}
        ${(props) => (props.full && !props.isPc ? "height : 85%;" : "")}
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
        overflow: scroll;
        transition: all ease 0.5;
        ${(props) =>
            props.full && props.fold
                ? "width : 0; animation: selectFold ease 0.5s; "
                : "width : 15%;"}

        ${(props) =>
            props.isPc
                ? ""
                : "display : flex; flex-wrap: nowrap; overflow-x: auto; width : 100%; height: fit-content;"}

        .announcement-text {
            font-size: 100% !important;
        }
    }

    .select-live {
        position: static;
        width: 15%;
        height: 100%;
        overflow: auto;
        transition: all ease 0.5;
        background-color: black;
        /* position: relative; */
        /* animation: selectFold ease 0.5s;
        animation-direction: alternate; */
        ${(props) =>
            props.full && props.fold && props.isPc
                ? "width : 0; "
                : "width : 15%;"}

        ${(props) =>
            props.isPc ? "" : "display : flex; width : 100%; height: 150px;"}
        ${(props) => (props.full && !props.isPc ? "height : 20%;" : "")}

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

    @media (orientation: landscape) {
        .select-live {
            ${(props) =>
                props.full && !props.isPc
                    ? "display: block; width: 20%; height: 100%;"
                    : ""}
        }
    }

    .select-live-item {
        width: 100%;
        height: 150px;
        border-bottom: 1px solid gray;
        position: relative;
        z-index: 9999;
        ${(props) =>
            props.isPc ? "" : "width : 200px; height : 100%; flex: 0 0 auto;"}
        ${(props) => (props.full && !props.isPc ? "height : 100%;" : "")}
    }

    @media (orientation: landscape) {
        .select-live-item {
            ${(props) =>
                props.full && !props.isPc ? "width: 100%; height: 150px;" : ""}
        }
    }

    .select-video-item {
        width: 100%;
        height: 8vw;
        border-bottom: 1px solid gray;
        position: relative;
        z-index: 9999;
        ${(props) =>
            props.isPc
                ? ""
                : "width : 200px; height : fit-content; flex: 0 0 auto;"}

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
        ${(props) => (props.isPc ? "" : "width : 100%;")}
    }

    .nowPlayLive {
        /* transform: scale(2); */
        width: 85%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        cursor: none !important;
        ${(props) => (props.fold ? "width : 100%;" : "")}
        ${(props) => (props.isPc ? "" : "width : 100%;")}
        ${(props) => (props.full && !props.isPc ? "height : 80%;" : "")}
        /* animation: livePlay ease 0.3s; */

        .fullscreen-icon {
            display: none;
            cursor: pointer;
        }
    }

    @media (orientation: landscape) {
        .nowPlayLive {
            ${(props) =>
                props.full && !props.isPc ? "width: 80%; height: 100%;" : ""}
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

        padding: 0.5rem;
        transition: all ease 0.5;
        ${(props) => (props.fold ? "transform: rotate(180deg);" : "")}
        ${(props) => (props.isPc ? "top: 50%; right: 1%;" : "display : none;")}
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
            ${(props) => (props.isPc ? "" : "width : 100%; height : 80%;")}
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
