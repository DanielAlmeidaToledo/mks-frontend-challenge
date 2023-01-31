import styled from 'styled-components'

export const ProductsStyled = styled.div`
    width: 80vw;
    min-height: 70vh;
    margin: 0 auto;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 1em;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        width: 80vw;
    }
`

export const ItemStyled = styled.div`
    width: 18vw;
    height: 21rem;
    background: #ffffff;
    box-shadow: 0px 2px 8px 0px #00000022;
    border-radius: 0.5rem;
    margin-top: 0.7rem;

    img {
        width: 70%;
        height: 12rem;
        display: flex;
        margin: 0.3rem auto;
    }

    div {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    h3 {
        line-height: 19px;
        font-weight: 400;
        color: #2c2c2c;
        width: 60%;
        height: 2.5rem;
        font-size: 1.1rem;
    }

    span {
        background: #373737;
        color: #ffffff;
        border-radius: 5px;
        line-height: 15px;
        font-weight: 700;
        padding: 0 0.5rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        font-size: 0.6rem;
        color: #2c2c2c;
        height: 3rem;
        width: 90%;
        display: flex;
        margin: 0.3rem auto 0.5rem;
    }

    button {
        background: #0f52ba;
        color: #fff;
        border: none;
        width: 100%;
        height: 2.5rem;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 0 0.5rem 0.5rem;

        @media only screen and (max-width: 768px) {
            height: 3rem;
            font-size: 1rem;
        }

        & :nth-child(1) {
            margin-right: 0.5rem;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 70vw;
        height: 21.8rem;
        overflow: hidden;
        margin: 0.7rem auto 0;
    }
`

