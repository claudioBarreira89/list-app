import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    max-width: 1400px;
    margin: 2rem auto;

    > * {
        padding: 15px;
        flex: 1 100%;
    }
`;
