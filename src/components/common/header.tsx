import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <HeaderStyle>
            <div
                className="header-btn"
                onClick={() => {
                    navigate("/");
                }}
            >
                비디오
            </div>
            <div
                className="header-btn"
                onClick={() => {
                    navigate("/live");
                }}
            >
                라이브
            </div>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;

    .header-btn {
        width: 100%;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        color: whitesmoke;
        border: 1px solid gray;
        cursor: pointer;
    }
`;

export default Header;
