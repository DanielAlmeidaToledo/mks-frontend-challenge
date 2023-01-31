import styled from 'styled-components'

export const ModalCart = styled.div`
    height: 100vh;
    width: 30%;
    position: fixed;
    inset: 0 0 auto auto;
    box-shadow: -5px 0px 6px 0px #00000021;
    background: ${props => props.theme.colors.primary};

    @media only screen and (max-width: 768px) {
        width: 90vw;
    }
`

export const TitleCart = styled.span`
    width: 60%;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    color: #fff;
    inset: 2rem auto auto 3rem;
    position: absolute;
`

export const ButtonClose = styled.div`
    height: 2rem;
    width: 2rem;
    margin-top: 1.5rem;
    background: #000;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ItemsHeight = styled.div`
    height: 55vh;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        background-color: #000;
    }

    .cartEmpty {
        color: #fff;
        font-size: 1.3rem;
        min-height: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 768px) {
        height: 60vh;
    }
`

export const ItemCart = styled.div`
    width: 90%;
    height: 5rem;
    border-radius: 0.5rem;
    margin: 1rem auto;
    display: flex;
    background: #fff;
    box-shadow: -2px 2px 10px 0px #0000000d;

    @media only screen and (max-width: 768px) {
        height: auto;
        flex-wrap: wrap;
    }

    img {
        height: 80%;
        width: 20%;
        margin: auto 0 auto 0.5rem;

        @media only screen and (max-width: 768px) {
            width: 40%;
            height: 70%;
            margin: 1rem auto 0.5rem;
        }
    }

    h3 {
        font-size: 0.8rem;
        font-weight: 400;
        color: #2c2c2c;
        width: 27%;
        margin: auto 0 auto 0.5rem;

        @media only screen and (max-width: 768px) {
            width: 100%;
            text-align: center;
            margin-bottom: 1rem;
        }
    }

    div {
        height: 30%;
        border-radius: 0.25rem;
        border: 0.3px solid #bfbfbf;
        margin: auto 0.5rem;
        display: flex;
        align-items: center;

        @media only screen and (max-width: 768px) {
            height: 40%;
            margin: auto 2rem 1rem;
            display: flex;
            align-items: center;
        }
    }

    span {
        margin: auto 0.3rem;
        font-size: 0.6rem;
        color: #000;
        font-weight: 400;
        text-align: center;

        @media only screen and (max-width: 768px) {
            width: 1.5rem;
            font-size: 1rem;
            color: #000;
            font-weight: 400;
        }
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
        width: 1rem;
        height: 1rem;

        @media only screen and (max-width: 768px) {
            width: 1.7rem;
            height: 2rem;
            font-size: 1.3rem;
        }
    }

    .btn-remove {
        border-right: 0.3px solid #bfbfbf;
    }

    .btn-add {
        border-left: 0.3px solid #bfbfbf;
    }

    p {
        display: flex;
        width: 30%;
        align-items: center;
        font-size: 1rem;
        font-weight: 700;
        color: #000;
        margin-left: 1rem;

        @media only screen and (max-width: 768px) {
            background: #373737;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 2.2rem;
            border-radius: 0.5rem;
        }
    }

    .btn-delete {
        position: relative;
        inset: auto auto 0.5rem 0.5rem;
        background: #000;
        color: #fff;
        font-size: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.6rem;
        border-radius: 50%;

        @media only screen and (max-width: 768px) {
            inset: auto auto 12.5rem 14.5rem;
            background: none;
            color: #000;
            font-size: 1.6rem;
            font-weight: 500;
            overflow: hidden;
        }
    }
`

export const TotalValue = styled.div`
    width: 80%;
    height: 5rem;
    font-size: 1.5rem;
    font-weight: 800;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    position: absolute;
    inset: auto 0 5rem 0;
`

export const ButtonFinish = styled.button`
    width: 100%;
    height: 5rem;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: auto 0 0 0;
    background: #000;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
`
