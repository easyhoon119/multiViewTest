import styled from "styled-components";

export const MockUpPlayerContainerStyle = styled.div`
    width: 50%;
    height: 500px;
    background-color: blue;
    margin: 0 auto;
    display: flex;
    margin-top: 3rem;

    .first-video {
        width: 85%;
        height: 100%;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .select-video {
        width: 15%;
        height: 100%;
        background-color: green;
        overflow-y: scroll;
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
        height: 150px;
        border: 1px solid gray;
    }

    .theoplayer-container {
        height: 100% !important;
    }
`;
