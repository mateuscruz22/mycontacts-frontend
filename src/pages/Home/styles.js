import styled from 'styled-components'

export const InputSearchContainer = styled.div`
    width: 100%;

    input {
        width: 100%;
        background: #fff;
        border: none;
        border-radius: 25px;
        height: 50px;
        box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.04);
        outline: 0;
        padding: 0 16px;
    }

    &::placeholder {
        color: #bcbcbc;
    }
`
