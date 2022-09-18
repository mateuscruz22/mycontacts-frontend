import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 32px;
`

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

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;

    strong {
        color: #222;
        font-size: 24px;
    }

    a {
        color: ${({ theme }) => theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.1s ease-in;

        &:hover {
            background: ${({ theme }) => theme.colors.primary.main};
            color: #fff;
        }
    }
`

export const ListContainer = styled.div`
    margin-top: 24px;

    header {
        margin-bottom: 8px;

        button {
            background: transparent;
            border: none;
            display: flex;
            align-items: center;

            span {
                margin-right: 8px;
                font-size: 16px;
                font-weight: 700;
                color: ${({ theme }) => theme.colors.primary.main};
            }
        }
    }
`

export const Card = styled.div`
    padding: 16px;
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & + & {
        margin-top: 16px;
    }

    .info {
        .contact-name {
            display: flex;
            align-items: center;

            small {
                background: ${({ theme }) => theme.colors.primary.lighter};
                color: ${({ theme }) => theme.colors.primary.main};
                text-transform: uppercase;
                padding: 2px 4px;
                border-radius: 4px;
                margin-left: 8px;
            }
        }

        span {
            display: block;
            color: ${({ theme }) => theme.colors.gray[900]};
        }
    }

    .actions {
        display: flex;
        align-items: center;

        a {

        }

        button {
            background: transparent;
            border: none;
            margin-left: 8px;
        }
    }
`
