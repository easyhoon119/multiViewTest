import styled from "styled-components";

interface NowPlayBoxProps {
    isLive: "live" | "video";
}

function NowPlayBox({ isLive }: NowPlayBoxProps) {
    return (
        <NowPlayBoxStyle isLive={isLive}>
            <div>Now Playing</div>
        </NowPlayBoxStyle>
    );
}

const NowPlayBoxStyle = styled.div<{ isLive: "live" | "video" }>`
    ${(props) =>
        props.isLive === "video" ? "position: absolute; top: 0; left: 0;" : ""}

    width: 100%;
    height: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    border-bottom: 1px solid gray;
    color: whitesmoke;
    font-size: 1.5rem;
    font-weight: 600;
    z-index: 9999;
`;

export default NowPlayBox;
