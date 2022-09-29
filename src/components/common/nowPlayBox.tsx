import styled from "styled-components";

interface NowPlayBoxProps {
    isLive: "live" | "video";
    isPc?: boolean;
    full?: boolean;
}

function NowPlayBox({ isLive, isPc, full }: NowPlayBoxProps) {
    return (
        <NowPlayBoxStyle
            className="select-live-item"
            isLive={isLive}
            isPc={isPc}
            full={full}
        >
            <div>Now Playing</div>
        </NowPlayBoxStyle>
    );
}

const NowPlayBoxStyle = styled.div<{
    isLive: "live" | "video";
    isPc?: boolean;
    full?: boolean;
}>`
    ${(props) =>
        props.isLive === "video" ? "position: absolute; top: 0; left: 0;" : ""}

    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    border-bottom: 1px solid gray;
    color: whitesmoke;
    font-size: 50%;
    font-weight: 600;
    z-index: 9999;
    ${(props) =>
        props.isPc ? "" : "width : 200px; height : 100%; flex: 0 0 auto"}
    ${(props) => (props.full && !props.isPc ? "height : 100%;" : "")}
`;

export default NowPlayBox;
