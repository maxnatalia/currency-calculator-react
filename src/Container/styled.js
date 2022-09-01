import styled from "styled-components";

export const ElementParagraph = styled.div`
    border-style: double;
    border-color: ${({ theme }) => theme.color.darkGreen};
    border-radius: 15px;
    padding-left: 20px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.color.lightGreen};
    font-size: 16px;
    margin-top: 20px;
    display: flex;
    justify-content: left;
`;