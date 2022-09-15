import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
    children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    const navigate = useNavigate();

    return (
        <LayoutStyle>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                비디오
            </button>
            <button
                onClick={() => {
                    navigate("/live");
                }}
            >
                라이브
            </button>
            {children}
        </LayoutStyle>
    );
}

const LayoutStyle = styled.div`
    width: 100%;
    height: 100%;
`;

export default Layout;
