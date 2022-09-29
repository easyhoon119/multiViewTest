import React from "react";
import styled from "styled-components";
import Header from "./header";

interface LayoutProps {
    children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <LayoutStyle>
            <Header />
            {children}
        </LayoutStyle>
    );
}

const LayoutStyle = styled.div`
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    /* padding: 0 1rem; */
`;

export default Layout;
