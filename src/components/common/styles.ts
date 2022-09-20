import styled from "styled-components";

export const MockUpPlayerContainerStyle = styled.div`
    width: 100%;
    height: 42vw;
    margin: 0 auto;
    background-color: green;
    display: flex;
    position: relative;

    .first-video {
        width: 85%;
        height: 42vw;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .select-video {
        position: static;
        width: 15%;
        height: 100%;
        overflow-y: scroll;
        /* position: relative; */

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

    .select-live {
        width: 15%;
        height: 100%;
        background-color: green;
        overflow-y: scroll;
        display: flex;
        flex-direction: row;
    }

    .select-video-item {
        width: 100%;
        height: 8vw;
        border-bottom: 1px solid gray;
        position: relative;
        z-index: 9999;
    }

    .nowPlayLive {
        /* transform: scale(2); */
        animation: livePlay ease 0.3s;
        width: 85%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .theoplayer-container {
        height: 100% !important;
        padding: 0 !important;
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
`;
