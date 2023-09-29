import styled from 'styled-components';

export const Button = styled.button`
    color: ${props =>props.primary ? 'white' : 'yellow'};
    background-color: blue;
    border: none;
    font-weight: bold;
    padding: 1rem;
    transition: 0.4s;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    };
    &.btn_style{
        font-size: 25px
    }
`;

export const SmallButton = styled(Button)`
    background-color: pink;
    font-size: 18px;
`