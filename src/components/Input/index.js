import styled from 'styled-components'

export const Input = styled.input`
    width: 100%;
    height: 52px;
    padding: 0 16px;
    background: #FFF;

    border: 2px solid #FFF;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;

    font-size: 16px;
    transition: border-color 0.2s ease-in;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary.main}
    }
`
