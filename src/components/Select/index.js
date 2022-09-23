import styled from 'styled-components'

export const Select = styled.select`
    width: 100%;
    height: 52px;
    padding: 0 16px;
    background: #FFF;

    border: 2px solid #FFF;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;

    font-size: 16px;
    font-weight: bold;
    transition: border-color 0.2s ease-in;
    appearance: none;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary.main}
    }
`
